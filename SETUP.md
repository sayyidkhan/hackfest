# Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Supabase Setup

1. Create a new Supabase project at https://supabase.com
2. In the Supabase SQL Editor, run the following SQL to create the events table:

```sql
CREATE TABLE events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  year INTEGER NOT NULL,
  title TEXT NOT NULL,
  date DATE NOT NULL,
  description TEXT NOT NULL,
  image TEXT,
  status TEXT NOT NULL CHECK (status IN ('current', 'past')),
  link TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create an index for faster queries
CREATE INDEX idx_events_status ON events(status);
CREATE INDEX idx_events_year ON events(year);
```

3. Copy your Supabase URL and anon key from the project settings
4. Add them to your `.env.local` file

## Running the Application

```bash
npm install
npm run dev
```

The application will be available at http://localhost:3000

## Features

- **Landing Page (`/`)**: Displays the current event with hero section, about, timeline, and registration
- **Past Events (`/past-events`)**: Grid view of all past events with detail pages
- **Admin Panel (`/admin`)**: CRUD interface for managing events

## Authentication

The admin panel currently has authentication structure in place but is not enforced. To enable authentication:

1. Set up Supabase Auth
2. Uncomment the authentication check in `app/admin/layout.tsx`
3. Create a login page if needed
