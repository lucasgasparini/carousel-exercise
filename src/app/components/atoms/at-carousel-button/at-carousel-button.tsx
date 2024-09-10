import React, { MouseEventHandler, ReactNode } from "react";

interface AtCarouselButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  disabled?: boolean;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

const AtCarouselButton = ({
  onClick,
  children,
  className = "",
  ariaLabel,
  disabled = false,
  buttonProps,
}: AtCarouselButtonProps) => {
  return (
    <button
      onClick={disabled ? undefined : onClick}
      className={`py-2 px-4 text-black bg-white rounded-full shadow-lg hover:bg-gray-200 transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      aria-label={ariaLabel}
      aria-disabled={disabled}
      disabled={disabled}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default AtCarouselButton;
