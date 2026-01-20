import Link from 'next/link';
import Avatar from './Avatar';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/90 border-b border-gray-100">
      <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
        <Link href="/" className="flex items-center gap-3">
          <Avatar type="robot" size="sm" />
          <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            ClaudeFeed
          </span>
        </Link>
      </div>
    </header>
  );
}
