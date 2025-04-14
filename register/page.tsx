"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RegisterForm } from "@/components/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow steam-login-bg">
        <div className="container mx-auto py-16 px-4 relative z-10">
          <div className="max-w-2xl mx-auto">
            <RegisterForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
