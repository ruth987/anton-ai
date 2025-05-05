import { NextResponse } from 'next/server';

const D_ID_API_KEY = process.env.D_ID_API_KEY;
const D_ID_API_URL = 'https://api.d-id.com';

export async function POST(request: Request) {
    try {
        if (!D_ID_API_KEY) {
            console.error('D_ID_API_KEY is not set in environment variables');
            return NextResponse.json(
                { error: 'API key not configured' },
                { status: 500 }
            );
        }

        console.log('Starting D-ID API request...');
        const formData = await request.formData();
        const imageUrl = formData.get('imageUrl') as string;
        const text = formData.get('text') as string;

        if (!imageUrl || !text) {
            console.log('Missing image URL or text');
            return NextResponse.json(
                { error: 'Image URL and text are required' },
                { status: 400 }
            );
        }

        const requestBody = {
            source_url: imageUrl,
            script: {
                type: "text",
                subtitles: "false",
                provider: {
                    type: "microsoft",
                    voice_id: "Sara"
                },
                input: text,
                ssml: "false"
            },
            config: {
                fluent: "false"
            }
        };

        console.log('Making request to D-ID API:', `${D_ID_API_URL}/talks`);
        console.log('Request body:', JSON.stringify(requestBody, null, 2));

        const talkResponse = await fetch(`${D_ID_API_URL}/talks`, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${D_ID_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        });

        console.log('D-ID API Response Status:', talkResponse.status);
        const talkResponseText = await talkResponse.text();
        console.log('D-ID API Response:', talkResponseText);

        if (!talkResponse.ok) {
            throw new Error(`Failed to create talk: ${talkResponseText}`);
        }

        const talkData = JSON.parse(talkResponseText);
        console.log('Talk created with ID:', talkData.id);
        
        // Poll for the video URL until it's ready
        let videoData;
        let attempts = 0;
        const maxAttempts = 10;

        while (attempts < maxAttempts) {
            console.log(`Polling attempt ${attempts + 1} for video status...`);
            const videoResponse = await fetch(`${D_ID_API_URL}/talks/${talkData.id}`, {
                headers: {
                    'Authorization': `Basic ${D_ID_API_KEY}`,
                },
            });

            console.log('Video status response:', videoResponse.status);
            const videoResponseText = await videoResponse.text();
            console.log('Video status data:', videoResponseText);

            if (!videoResponse.ok) {
                throw new Error(`Failed to get video status: ${videoResponseText}`);
            }

            videoData = JSON.parse(videoResponseText);
            
            if (videoData.status === 'done') {
                console.log('Video generation completed!');
                break;
            }

            console.log('Video still processing, waiting 2 seconds...');
            await new Promise(resolve => setTimeout(resolve, 2000));
            attempts++;
        }

        if (!videoData || videoData.status !== 'done') {
            throw new Error('Video generation timed out');
        }

        console.log('Returning video URL:', videoData.result_url);
        return NextResponse.json({
            videoUrl: videoData.result_url,
            status: videoData.status,
            duration: videoData.duration,
            audioUrl: videoData.audio_url
        });
    } catch (error) {
        console.error('D-ID API Error:', error);
        return NextResponse.json(
            { 
                error: error instanceof Error ? error.message : 'Failed to generate video',
                details: error instanceof Error ? error.stack : undefined
            },
            { status: 500 }
        );
    }
} 