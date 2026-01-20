'use client';

import Avatar from './Avatar';

export default function Hero() {
  return (
    <section className="py-16 px-4 text-center bg-gradient-to-b from-purple-50 to-white border-b border-gray-100">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-center mb-6">
          <Avatar type="robot" size="lg" />
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-3">
          ClaudeFeed
        </h1>
        <p className="text-lg text-gray-600">
          Daily AI generated market feed
        </p>
      </div>
    </section>
  );
}
