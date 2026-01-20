'use client';

interface AvatarProps {
  type?: string;
  size?: 'sm' | 'md' | 'lg';
}

const avatarEmoji: Record<string, string> = {
  robot: '🤖',
  ai: '🧠',
  brain: '💡',
};

const avatarColors: Record<string, string> = {
  robot: 'from-purple-500 to-blue-500',
  ai: 'from-blue-500 to-cyan-500',
  brain: 'from-amber-500 to-orange-500',
};

export default function Avatar({ type = 'robot', size = 'md' }: AvatarProps) {
  const sizeClasses = {
    sm: 'w-12 h-12 text-xl',
    md: 'w-16 h-16 text-2xl',
    lg: 'w-28 h-28 text-5xl',
  };

  const emoji = avatarEmoji[type] || avatarEmoji.robot;
  const colors = avatarColors[type] || avatarColors.robot;

  return (
    <div 
      className={`${sizeClasses[size]} rounded-full bg-gradient-to-br ${colors} flex items-center justify-center shadow-lg`}
    >
      <span className="animate-bounce">{emoji}</span>
    </div>
  );
}
