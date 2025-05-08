'use client'
import React, { useState, useRef } from 'react';
import Header from '../common/Header';
import Image from 'next/image';

const Hero = () => {
    const [message, setMessage] = useState('');
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);
    const [generatedVideoUrl, setGeneratedVideoUrl] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [generationStatus, setGenerationStatus] = useState<string>('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const uploadToCloudinary = async (file: File): Promise<string> => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'f3aubt1e'); 

        try {
            const response = await fetch(
                `https://api.cloudinary.com/v1_1/dihqczuhh/image/upload`,
                {
                    method: 'POST',
                    body: formData,
                }
            );

            if (!response.ok) {
                throw new Error('Failed to upload image to Cloudinary');
            }

            const data = await response.json();
            return data.secure_url;
        } catch (error) {
            console.error('Cloudinary upload error:', error);
            throw error;
        }
    };

    const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedImage(file);
            const imageUrl = URL.createObjectURL(file);
            setPreviewUrl(imageUrl);
            setError(''); 
        }
    };

    const handleGenerateVideo = async () => {
        if (!selectedImage || !message) return;
        
        setIsLoading(true);
        setError('');
        setGenerationStatus('Starting video generation...');
        setGeneratedVideoUrl('');

        try {
            // First upload to Cloudinary
            setGenerationStatus('Uploading image to Cloudinary...');
            const cloudinaryUrl = await uploadToCloudinary(selectedImage);
            
            // Then send to D-ID API
            setGenerationStatus('Generating video with D-ID...');
            const formData = new FormData();
            formData.append('imageUrl', cloudinaryUrl);
            formData.append('text', message);

            const response = await fetch('/api/d-id', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to generate video');
            }

            setGeneratedVideoUrl(data.videoUrl);
            setGenerationStatus('Video generated successfully!');
        } catch (error) {
            console.error('Error generating video:', error);
            setError(error instanceof Error ? error.message : 'Failed to generate video');
            setGenerationStatus('');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#f3f3f5] flex flex-col items-center overflow-hidden span-light">
            <Header />

            <div className="max-w-7xl w-full text-center mt-6 px-4 md:px-6">
                <button className="text-white bg-primary span-bold text-[10px] md:text-[12px] py-1 md:py-2 px-3 md:px-5 rounded-full">
                    Transform Data Into Emotions
                </button>
                <h1 className="text-2xl md:text-4xl lg:text-5xl leading-tight mt-3 md:mt-4 max-w-[380px] md:max-w-[600px] lg:max-w-[720px] mx-auto">
                    Ein gutes Gespräch.
                </h1>
                <p className="text-gray-600 mt-2 text-[10px] md:text-sm span-bold">
                    Meet Alva. Sie Kennt sich mit Tinnitus aus
                </p>
            </div>

            <div className="max-w-7xl w-full py-12 px-6 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Input Section */}
                    <div className="space-y-6">
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleImageUpload}
                                accept="image/*"
                                className="hidden"
                            />
                            {previewUrl ? (
                                <div className="relative">
                                    <Image
                                        src={previewUrl}
                                        alt="Preview"
                                        className="w-full h-64 object-cover rounded-lg"   
                                        width={256}
                                        height={256}
                                    />
                                    <button
                                        onClick={() => fileInputRef.current?.click()}
                                        className="mt-2 text-blue-500 hover:text-blue-700"
                                    >
                                        Change Image
                                    </button>
                                </div>
                            ) : (
                                <button
                                    onClick={() => fileInputRef.current?.click()}
                                    className="w-full h-64 flex items-center justify-center bg-gray-50 hover:bg-gray-100 rounded-lg"
                                >
                                    <span className="text-gray-500">Click to upload image</span>
                                </button>
                            )}
                        </div>

                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Enter the text you want the image to speak..."
                            className="w-full h-32 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />

                        <button
                            onClick={handleGenerateVideo}
                            disabled={!selectedImage || !message || isLoading}
                            className={`w-full py-3 px-6 rounded-lg text-white font-semibold ${
                                !selectedImage || !message || isLoading
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-blue-500 hover:bg-blue-600'
                            }`}
                        >
                            {isLoading ? 'Generating...' : 'Generate Video'}
                        </button>

                        {error && (
                            <div className="text-red-500 text-sm mt-2">
                                {error}
                            </div>
                        )}

                        {generationStatus && (
                            <div className="text-green-500 text-sm mt-2">
                                {generationStatus}
                            </div>
                        )}
                    </div>

                    {/* Output Section */}
                    <div className="space-y-6">
                        <div className="border-2 border-gray-200 rounded-lg p-6">
                            <h3 className="text-lg font-semibold mb-4">Generated Video</h3>
                            {isLoading ? (
                                <div className="w-full h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                                    <div className="text-center">
                                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
                                        <p className="mt-2 text-gray-500">{generationStatus}</p>
                                    </div>
                                </div>
                            ) : generatedVideoUrl ? (
                                <div className="">
                                    <video
                                    className="w-full rounded-lg"
                                    controls
                                    src={generatedVideoUrl}
                                />

                                </div>
                                
                            ) : (
                                <div className="w-full h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                                    <span className="text-gray-500">
                                        Video will appear here
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hero;