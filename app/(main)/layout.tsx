import Navbar from "@/components/Navbar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="antialiased min-h-screen pt-16">
      <Navbar />
      {children}
    </main>
  );
}

export default Layout;
