import { supabase, Feed } from '@/lib/supabase';
import { mockFeeds } from '@/lib/mockData';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeedCard from '@/components/FeedCard';

async function getFeeds(): Promise<Feed[]> {
  try {
    const { data, error } = await supabase
      .from('feeds')
      .select('*')
      .order('published_at', { ascending: false })
      .limit(50);

    if (error || !data || data.length === 0) {
      return mockFeeds;
    }
    return data;
  } catch {
    return mockFeeds;
  }
}

export const revalidate = 60;

export default async function Home() {
  const feeds = await getFeeds();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <main className="max-w-2xl mx-auto px-4 py-8">
        <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-6">
          Latest Feeds
        </h2>
        <div className="space-y-4">
          {feeds.map((feed) => (
            <FeedCard key={feed.id} feed={feed} />
          ))}
        </div>
      </main>
      <footer className="text-center py-8 text-sm text-gray-400">
        Powered by Claude AI
      </footer>
    </div>
  );
}
