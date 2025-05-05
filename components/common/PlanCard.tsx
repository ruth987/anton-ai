import React from "react";

interface PlanCardProps {
  title: string;
  highlight: string;
  details: string[];
  discount: boolean;
}

const PlanCard: React.FC<PlanCardProps> = ({ title, highlight, details, discount }) => {
  return (
    <div className="span-light border-[1px] border-white rounded-xl p-6 w-full max-w-lg bg-section3-background h-52 md:h-72 relative">
      <h2 className="text-xl md:text-3xl text-primary ">
        <span className="span-bold">{highlight}</span> {title}
      </h2>
      <p className="text-gray-300 mt-2 md:mt-4 text-sm font-bold md:text-lg">Pro Monat:</p>
      <ul className="text-gray-300 text-sm md:text-lg">
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>

            {/* Discount Tag */}
            {discount && (
        <div className="font-medium  absolute bottom-6 right-6 text-white text-sm md:text-lg bg-primary rounded-full px-4 py-1">
          -25%
        </div>
      )}
      
    </div>
  );
};

export default PlanCard;
