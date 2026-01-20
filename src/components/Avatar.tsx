'use client';

import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

const avatarAnimations: Record<string, string> = {
  robot: 'https://assets2.lottiefiles.com/packages/lf20_M9p23l.json',
  ai: 'https://assets5.lottiefiles.com/packages/lf20_oyi9a28g.json',
  brain: 'https://assets3.lottiefiles.com/packages/lf20_fcfjwiyb.json',
};

interface AvatarProps {
  type?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Avatar({ type = 'robot', size = 'md' }: AvatarProps) {
  const [animationData, setAnimationData] = useState<object | null>(null);

  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-32 h-32',
  };

  useEffect(() => {
    const url = avatarAnimations[type] || avatarAnimations.robot;
    fetch(url)
      .then((res) => res.json())
      .then(setAnimationData)
      .catch(() => setAnimationData(null));
  }, [type]);

  if (!animationData) {
    return (
      <div className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-purple-500 to-blue-500 animate-pulse flex items-center justify-center`}>
        <span className="text-white text-xl">🤖</span>
      </div>
    );
  }

  return (
    <div className={`${sizeClasses[size]} rounded-full overflow-hidden bg-gradient-to-br from-purple-500/20 to-blue-500/20`}>
      <Lottie animationData={animationData} loop autoplay />
    </div>
  );
}
