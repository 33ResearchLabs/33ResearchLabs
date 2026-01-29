import React from 'react';
import { LucideIcon } from 'lucide-react';

interface DiffCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  colorHex?: string;
}

const DiffCard: React.FC<DiffCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className="group p-6 lg:p-8 rounded-2xl bg-zinc-50/50 border border-zinc-100 hover:bg-white hover:border-zinc-200 hover:shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
          <Icon className="text-white" size={18} strokeWidth={1.5} />
        </div>
        <div>
          <h3 className="text-[15px] font-semibold text-zinc-900 mb-2 tracking-[-0.01em]">
            {title}
          </h3>
          <p className="text-[14px] text-zinc-500 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiffCard;