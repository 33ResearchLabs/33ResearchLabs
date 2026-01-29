import React from 'react';

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
        inline-flex items-center justify-center px-6 py-3 text-[14px] font-medium rounded-lg transition-all duration-200 whitespace-nowrap
        ${primary
          ? 'bg-zinc-900 text-white hover:bg-zinc-800 shadow-none'
          : 'bg-transparent text-zinc-600 border border-zinc-200 hover:border-zinc-300 hover:text-zinc-900 hover:bg-zinc-50'
        }
        ${className}
      `}
    >
      {children}
    </a>
  );
};

export default Button;