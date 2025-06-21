import { ReactNode } from "react";

interface FloatingCardProps {
  className?: string;
  icon?: ReactNode;
  value?: string;
  label?: string;
  compact?: boolean;
  bgColor?: string;
  children?: ReactNode;
}

export default function FloatingCard({
  className = "",
  icon,
  value,
  label,
  compact = false,
  bgColor = "bg-brand-primary",
  children
}: FloatingCardProps) {
  if (compact) {
    return (
      <div className={`floating-card rounded-2xl p-3 shadow-lg ${className}`}>
        <div className={`w-8 h-8 ${bgColor} rounded-lg flex items-center justify-center`}>
          {icon}
        </div>
        {children}
      </div>
    );
  }

  return (
    <div className={`floating-card rounded-2xl p-4 shadow-lg max-w-48 ${className}`}>
      <div className="flex items-center space-x-3">
        <div className={`w-12 h-12 ${bgColor} rounded-full flex items-center justify-center`}>
          {icon}
        </div>
        <div>
          {value && <div className="font-bold text-gray-800">{value}</div>}
          {label && <div className="text-sm text-gray-600">{label}</div>}
        </div>
      </div>
      {children}
    </div>
  );
}
