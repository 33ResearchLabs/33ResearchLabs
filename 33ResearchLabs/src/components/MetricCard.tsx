import React from 'react';
import { PRIMARY_BLUE, BORDER_METRICS, TEXT_DARK, BG_LIGHTEST_BLUE } from '../config/colors';

interface MetricCardProps {
  value: string;
  description: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ value, description }) => {
  return (
    <div
      className={`
        p-8 bg-white border rounded-xl shadow-sm transition duration-200 h-full
        flex flex-col justify-center text-left
      `}
      style={{
        borderColor: BORDER_METRICS,
        '--tw-shadow-color': 'rgba(0, 0, 0, 0.03)',
      }}
    >
      <div
        className={`text-5xl font-extrabold mb-1 leading-none`}
        style={{ color: PRIMARY_BLUE }}
      >
        {value}
      </div>
      <div className={`text-sm text-[${TEXT_DARK}] font-medium`}>
        {description}
      </div>
    </div>
  );
};

export default MetricCard;