import React from 'react';
import { PRIMARY_BLUE, BG_LIGHTEST_BLUE, TEXT_DARK } from '../config/colors';
import { LucideIcon } from 'lucide-react';

interface FocusCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const FocusCard: React.FC<FocusCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <div
      className={`
        p-8 bg-white border border-gray-200 rounded-xl shadow-sm transition duration-300
        hover:border-[#2F6BFF] hover:shadow-lg hover:-translate-y-1
        flex flex-col
      `}
      style={{
        '--tw-bg-opacity': 1,
        '--tw-text-opacity': 1,
      } as React.CSSProperties}
    >
      <div
        className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 text-2xl`}
        style={{
          backgroundColor: BG_LIGHTEST_BLUE,
          color: PRIMARY_BLUE
        }}
      >
        <Icon size={24} />
      </div>
      <h3 className={`text-xl font-semibold mb-2 text-[${TEXT_DARK}]`}>{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default FocusCard;