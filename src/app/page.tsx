import { supabase, Feed } from '@/lib/supabase';
import Header from '@/components/Header';
import FeedCard from '@/components/FeedCard';

async function getFeeds(): Promise<Feed[]> {
  const { data, error } = await supabase
    .from('feeds')
    .select('*')
    .order('published_at', { ascending: false })
    .limit(50);

  if (error) {
    console.error('Error fetching feeds:', error);
    return [];
  }
  return data || [];
}

export const revalidate = 60;

export default async function Home() {
  const feeds = await getFeeds();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Header />
      <main className="max-w-2xl mx-auto px-4 py-8">
        {feeds.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 dark:text-gray-400">
              No feeds yet. Run the generation API to create content.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {feeds.map((feed) => (
              <FeedCard key={feed.id} feed={feed} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
