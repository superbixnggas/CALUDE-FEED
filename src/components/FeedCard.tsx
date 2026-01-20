import Link from 'next/link';
import Avatar from './Avatar';
import { Feed } from '@/lib/supabase';

interface FeedCardProps {
  feed: Feed;
}

export default function FeedCard({ feed }: FeedCardProps) {
  const isMock = feed.id.startsWith('mock-');
  
  const CardContent = () => (
    <article className="group bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-purple-200">
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <Avatar type={feed.avatar_type} size="sm" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            {feed.category && (
              <span className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-700 font-medium">
                {feed.category}
              </span>
            )}
            <span className="text-xs text-gray-400">
              {new Date(feed.published_at).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}
            </span>
          </div>
          <h2 className="text-base font-semibold text-gray-900 group-hover:text-purple-600 transition-colors leading-snug mb-2">
            {feed.title}
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
            {feed.summary}
          </p>
        </div>
      </div>
    </article>
  );

  if (isMock) {
    return <CardContent />;
  }

  return (
    <Link href={`/feed/${feed.id}`}>
      <CardContent />
    </Link>
  );
}
