"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ErrorPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/"); // Redirect to the home page after 5 seconds
    }, 5000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold">Oops! Something went wrong</h1>
      <p className="mt-4 text-lg">We couldn't find the page you're looking for.</p>
      <p className="mt-2 text-sm text-gray-600">Redirecting you to the homepage...</p>

      <div className="mt-8">
        <button
          onClick={() => router.push("/")}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
}
    