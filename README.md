# ClaudeFeed

AI-Generated Daily Feed - A read-only feed experience powered by Claude AI.

## Features

- 🤖 AI-generated daily content
- 🎨 Animated Lottie avatars
- 📱 Responsive minimal UI
- ⚡ Next.js App Router
- 🗄️ Supabase database

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables in `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ANTHROPIC_API_KEY=your_anthropic_api_key
   ```

4. Run development server:
   ```bash
   npm run dev
   ```

## Generate Content

Call the API endpoint to generate new feed content:

```bash
curl -X POST http://localhost:3000/api/generate
```

For daily generation, set up a cron job to call this endpoint.

## Deployment

Deploy to Vercel:
```bash
npx vercel
```

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Supabase
- Anthropic Claude API
- Lottie React
