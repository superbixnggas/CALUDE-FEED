import Link from 'next/link';
import Avatar from './Avatar';
import { Feed } from '@/lib/supabase';

interface FeedCardProps {
  feed: Feed;
}

export default function FeedCard({ feed }: FeedCardProps) {
  return (
    <Link href={`/feed/${feed.id}`}>
      <article className="group bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:border-purple-200 dark:hover:border-purple-800">
        <div className="flex gap-4">
          <Avatar type={feed.avatar_type} size="sm" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              {feed.category && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300">
                  {feed.category}
                </span>
              )}
              <span className="text-xs text-gray-400">
                {new Date(feed.published_at).toLocaleDateString()}
              </span>
            </div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-2">
              {feed.title}
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
              {feed.summary}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}
