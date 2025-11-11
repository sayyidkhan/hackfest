import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getEventById } from "@/lib/db";
import { notFound } from "next/navigation";

export default async function PastEventDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = await getEventById(id);

  if (!event) {
    notFound();
  }

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
              <Button variant="ghost">← Back to Past Events</Button>
            </Link>
            <Link href="/admin">
              <Button variant="outline">Admin</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
          <p className="text-xl text-muted-foreground mb-6">
            {new Date(event.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {event.image && (
            <div className="mb-8 aspect-video bg-muted rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground">Event Image: {event.image}</span>
            </div>
          )}

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground whitespace-pre-line">
                {event.description}
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  This event featured innovative projects, engaging workshops, and inspiring speakers from the Muslim tech community.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Winners</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Congratulations to all participants! The winners demonstrated exceptional creativity and technical skills.
                </p>
              </CardContent>
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
