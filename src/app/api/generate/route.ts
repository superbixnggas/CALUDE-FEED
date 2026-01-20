import { NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const categories = ['Technology', 'Science', 'Philosophy', 'Culture', 'Future'];
const avatarTypes = ['robot', 'ai', 'brain'];

export async function POST(request: Request) {
  try {
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'ANTHROPIC_API_KEY not configured' }, { status: 500 });
    }

    const anthropic = new Anthropic({ apiKey });
    const category = categories[Math.floor(Math.random() * categories.length)];
    const avatarType = avatarTypes[Math.floor(Math.random() * avatarTypes.length)];

    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      messages: [
        {
          role: 'user',
          content: `Generate an interesting, insightful article about ${category}. 
          
Return JSON format:
{
  "title": "compelling title (max 100 chars)",
  "summary": "engaging summary (max 200 chars)",
  "content": "full article content (3-4 paragraphs, informative and thought-provoking)"
}

Only return valid JSON, no markdown.`,
        },
      ],
    });

    const textContent = message.content[0];
    if (textContent.type !== 'text') {
      throw new Error('Unexpected response type');
    }

    const generated = JSON.parse(textContent.text);

    const { data, error } = await supabase.from('feeds').insert({
      title: generated.title,
      summary: generated.summary,
      content: generated.content,
      category,
      avatar_type: avatarType,
    }).select().single();

    if (error) throw error;

    return NextResponse.json({ success: true, feed: data });
  } catch (error) {
    console.error('Generation error:', error);
    return NextResponse.json({ error: 'Failed to generate content' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ 
    message: 'ClaudeFeed Generation API',
    usage: 'POST to this endpoint to generate new feed content'
  });
}
