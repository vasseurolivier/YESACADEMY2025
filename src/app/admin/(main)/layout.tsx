import { ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-muted p-4">
        <h2 className="text-xl font-semibold mb-4">Admin</h2>
        <nav className="flex flex-col gap-2">
          <Button variant="ghost" asChild className="justify-start">
            <Link href="/admin/photos">Gérer les images</Link>
          </Button>
          <Button variant="ghost" asChild className="justify-start">
            <Link href="/admin/logo">Gérer le logo</Link>
          </Button>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}
