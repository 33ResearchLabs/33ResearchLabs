import React from 'react';

interface MetricCardProps {
  value: string;
  description: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ value, description }) => {
  return (
    <div className="group p-6 lg:p-8 bg-white border border-zinc-100 rounded-2xl transition-all duration-300 hover:border-zinc-200 hover:shadow-[0_4px_20px_rgb(0,0,0,0.03)] h-full flex flex-col justify-center">
      <div className="text-3xl lg:text-4xl font-semibold text-zinc-900 mb-2 tracking-[-0.02em] transition-transform duration-300 group-hover:translate-x-0.5">
        {value}
      </div>
      <div className="text-[13px] text-zinc-500 font-medium leading-snug">
        {description}
      </div>
    </div>
  );
};

export default MetricCard;