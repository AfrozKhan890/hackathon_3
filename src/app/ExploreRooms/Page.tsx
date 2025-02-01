"use client";
import ImageCarousel from "@/components/ImageCarousel";

export default function Home() {
  const images = [
    "https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?w=700&auto=format&fit=crop&q=60",
    "https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1558&auto=format&fit=crop",
  ];

  return (
    <div className="mt-11 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center px-4">
        Explore Beautiful Room Inspirations
      </h1>

      {/* Image Carousel Component */}
      <ImageCarousel images={images} />
    </div>
  );
}
