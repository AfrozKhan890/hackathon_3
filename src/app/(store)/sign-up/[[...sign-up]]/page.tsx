"use client"

import { SignUp } from '@clerk/nextjs'
import { useEffect } from 'react';


export default function Page() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignUp />
    </div>
  );
}