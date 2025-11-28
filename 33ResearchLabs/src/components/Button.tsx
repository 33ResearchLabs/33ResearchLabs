import React from 'react';
import { PRIMARY_BLUE, HOVER_BLUE, BORDER_LIGHT } from '../config/colors';

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  href: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, primary = false, href, className = '' }) => {
  return (
    <a
      href={href}
      className={`
        inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-xl transition duration-200 whitespace-nowrap
        ${primary
          ? `text-white shadow-md shadow-blue-200 hover:bg-[#2659D9]`
          : `bg-transparent text-gray-700 border border-[#E0E0E0] hover:border-[#2F6BFF] hover:text-[#2F6BFF]`
        }
        ${className}
      `}
      style={{
        backgroundColor: primary ? PRIMARY_BLUE : 'transparent',
      }}
    >
      {children}
    </a>
  );
};

export default Button;