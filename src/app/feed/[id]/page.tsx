import { supabase, Feed } from '@/lib/supabase';
import Header from '@/components/Header';
import Avatar from '@/components/Avatar';
import Link from 'next/link';
import { notFound } from 'next/navigation';

async function getFeed(id: string): Promise<Feed | null> {
  const { data, error } = await supabase
    .from('feeds')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !data) return null;
  return data;
}

export default async function FeedDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const feed = await getFeed(id);

  if (!feed) notFound();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Header />
      <main className="max-w-2xl mx-auto px-4 py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-purple-600 mb-6"
        >
          ← Back to Feed
        </Link>

        <article className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-4 mb-6">
            <Avatar type={feed.avatar_type} size="lg" />
            <div>
              {feed.category && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300">
                  {feed.category}
                </span>
              )}
              <p className="text-sm text-gray-400 mt-1">
                {new Date(feed.published_at).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {feed.title}
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            {feed.summary}
          </p>

          <div className="prose dark:prose-invert max-w-none">
            {feed.content.split('\n').map((paragraph, i) => (
              <p key={i} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
}
