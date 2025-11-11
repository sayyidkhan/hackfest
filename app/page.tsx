import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getCurrentEvent } from "@/lib/db";

export default async function HomePage() {
  const event = await getCurrentEvent();

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            🕌 Mosque Tech Challenge
          </Link>
          <div className="flex gap-4">
            <Link href="/past-events">
              <Button variant="ghost">Past Events</Button>
            </Link>
            <Link href="/admin">
              <Button variant="outline">Admin</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            {event?.title || "Mosque Tech Challenge 2025"}
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            {event?.date 
              ? new Date(event.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })
              : "November 20, 2025"}
          </p>
          {event?.link && (
            <a href={event.link} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-lg px-8">
                Join Now
              </Button>
            </a>
          )}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">About</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground text-center mb-6">
              {event?.description || "Empowering youth to build Islamic tech solutions. Join us for an exciting challenge where innovation meets faith."}
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card>
                <CardHeader>
                  <CardTitle>Purpose</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To inspire and empower the next generation of Muslim technologists to create solutions that benefit the community.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Organizer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Organized by passionate volunteers dedicated to fostering innovation in the Muslim tech community.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Venue</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Join us at our main event location. More details will be shared upon registration.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Event Timeline</h2>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary"></div>
                  <div className="w-0.5 h-full bg-border"></div>
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="font-semibold text-lg mb-2">Registration Opens</h3>
                  <p className="text-muted-foreground">Sign up now to secure your spot</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary"></div>
                  <div className="w-0.5 h-full bg-border"></div>
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="font-semibold text-lg mb-2">Event Day</h3>
                  <p className="text-muted-foreground">Join us for workshops, networking, and the main challenge</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary"></div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">Awards Ceremony</h3>
                  <p className="text-muted-foreground">Celebrate the winners and their innovative solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners & Sponsors Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Partners & Sponsors</h2>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <Card className="p-6">
              <p className="text-muted-foreground">Partner Logo</p>
            </Card>
            <Card className="p-6">
              <p className="text-muted-foreground">Sponsor Logo</p>
            </Card>
            <Card className="p-6">
              <p className="text-muted-foreground">Sponsor Logo</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 Mosque Tech Challenge. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
