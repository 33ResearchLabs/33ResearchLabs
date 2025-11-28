import React from 'react';
import { LucideIcon } from 'lucide-react';
import { TEXT_DARK, PRIMARY_BLUE } from '../config/colors';

interface DiffCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  colorHex: string; // The specific pastel background color hex
}

// Icon colors mapping to maintain the subtle pastel design logic
const getIconColor = (title: string) => {
  switch (title) {
    case 'Integrated Strategy':
      return 'text-blue-700';
    case 'Rapid Prototyping':
      return 'text-green-700';
    case 'Full-Stack Ownership':
      return 'text-yellow-700';
    case 'Growth-Oriented':
      return 'text-purple-700';
    default:
      return PRIMARY_BLUE;
  }
};

const DiffCard: React.FC<DiffCardProps> = ({ title, description, icon: Icon, colorHex }) => {
  const iconColorClass = getIconColor(title);
  
  return (
    <div
      className={`p-6 rounded-xl`}
      style={{ backgroundColor: colorHex }}
    >
      <div className="flex items-start mb-4">
        <Icon className={`text-2xl mr-4 ${iconColorClass}`} size={24} />
        <h3 className={`text-lg font-semibold text-[${TEXT_DARK}]`}>{title}</h3>
      </div>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  );
};

export default DiffCard;