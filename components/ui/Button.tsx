import React, { memo } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'minimal';
  fullWidth?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  href,
  target,
  rel,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium transition-all duration-300 focus:outline-none tracking-wide rounded-sm";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-black hover:px-10 shadow-lg shadow-neutral-300",
    outline: "border border-line text-primary bg-transparent hover:bg-white hover:border-primary",
    minimal: "text-primary border-b border-line hover:border-primary px-0 py-1 rounded-none hover:opacity-70"
  };

  const widthClass = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (href) {
    if (href.startsWith('#')) {
        return (
            <a 
                href={href} 
                onClick={(e) => handleScroll(e, href)}
                className={combinedClasses}
            >
                {children}
            </a>
        );
    }

    return (
      <a href={href} target={target} rel={rel} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default memo(Button);