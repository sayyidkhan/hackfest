import { NextRequest, NextResponse } from "next/server";
import { getAllEvents, createEvent, Event } from "@/lib/db";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const events = await getAllEvents();
    return NextResponse.json(events);
  } catch (error) {
    console.error("Error fetching events:", error);
    return NextResponse.json(
      { error: "Failed to fetch events" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const event = await createEvent(body as Omit<Event, "id">);
    
    if (!event) {
      return NextResponse.json(
        { error: "Failed to create event" },
        { status: 500 }
      );
    }
    
    return NextResponse.json(event, { status: 201 });
  } catch (error) {
    console.error("Error creating event:", error);
    return NextResponse.json(
      { error: "Failed to create event" },
      { status: 500 }
    );
  }
}
