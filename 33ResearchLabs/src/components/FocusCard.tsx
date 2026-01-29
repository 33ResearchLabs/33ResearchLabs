import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FocusCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const FocusCard: React.FC<FocusCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className="group py-12 border-b border-zinc-100 last:border-b-0">
      <div className="flex items-start gap-8">
        <div className="w-16 h-16 rounded-2xl bg-zinc-900 flex items-center justify-center flex-shrink-0">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-normal text-zinc-900 mb-4 tracking-[-0.01em]">
            {title}
          </h3>
          <p className="text-zinc-500 leading-relaxed max-w-xl">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FocusCard;
