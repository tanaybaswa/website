import React from "react";
import Navbar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold">Welcome to my website</h1>
        <p className="mt-4">This is the main content of my website.</p>
      </main>
    </div>
  );
}
