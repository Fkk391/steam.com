"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LoginForm } from "@/components/LoginForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow steam-login-bg">
        <div className="container mx-auto py-16 px-4 relative z-10 flex flex-col md:flex-row justify-between items-start">
          <div className="w-full md:w-1/2 md:pr-8 mb-12 md:mb-0">
            <LoginForm />
          </div>

          <div className="w-full md:w-1/2 md:pl-8 relative z-10">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold mb-4 text-white">New to Steam?</h2>
              <p className="text-gray-300 mb-6">
                It's free and easy. Discover thousands of games to play with millions of new friends.
              </p>
              <Link
                href="/register"
                className="inline-block bg-[#1b6abe] hover:bg-[#1a5ea8] text-white py-2 px-4 rounded"
              >
                Create an account
              </Link>
              <p className="mt-4 text-gray-400">
                <Link href="#" className="text-blue-400 hover:text-blue-300">
                  Learn more about Steam
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
