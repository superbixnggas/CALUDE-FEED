import Avatar from './Avatar';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-950/80 border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-3">
        <Avatar type="robot" size="sm" />
        <div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            ClaudeFeed
          </h1>
          <p className="text-xs text-gray-500">AI-Generated Daily Content</p>
        </div>
      </div>
    </header>
  );
}
