import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Event {
  id: string;
  year: number;
  title: string;
  date: string;
  description: string;
  image: string;
  status: 'current' | 'past';
  link: string;
}

export async function getCurrentEvent(): Promise<Event | null> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) return null;
  
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .eq('status', 'current')
    .single();
  
  if (error || !data) return null;
  return data as Event;
}

export async function getPastEvents(): Promise<Event[]> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) return [];
  
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .eq('status', 'past')
    .order('year', { ascending: false });
  
  if (error || !data) return [];
  return data as Event[];
}

export async function getEventById(id: string): Promise<Event | null> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) return null;
  
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error || !data) return null;
  return data as Event;
}

export async function getAllEvents(): Promise<Event[]> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) return [];
  
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .order('year', { ascending: false });
  
  if (error || !data) return [];
  return data as Event[];
}

export async function createEvent(event: Omit<Event, 'id'>): Promise<Event | null> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) return null;
  
  const { data, error } = await supabase
    .from('events')
    .insert([event])
    .select()
    .single();
  
  if (error || !data) return null;
  return data as Event;
}

export async function updateEvent(id: string, event: Partial<Event>): Promise<Event | null> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) return null;
  
  const { data, error } = await supabase
    .from('events')
    .update(event)
    .eq('id', id)
    .select()
    .single();
  
  if (error || !data) return null;
  return data as Event;
}

export async function deleteEvent(id: string): Promise<boolean> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) return false;
  
  const { error } = await supabase
    .from('events')
    .delete()
    .eq('id', id);
  
  return !error;
}
