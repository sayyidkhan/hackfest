import { createClient } from "@/lib/supabase-server";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data: { session } } = await supabase.auth.getSession();

  // TODO: Add proper authentication check
  // For now, we'll allow access but you should implement proper auth
  // if (!session) {
  //   redirect("/login");
  // }

  return <>{children}</>;
}
