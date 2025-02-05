"use client";

import { SignIn } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useClerk } from "@clerk/nextjs";

const SignInPage = () => {
  const { user } = useClerk(); // Clerk hook to get user information
  const router = useRouter(); // Next.js router for navigation

  useEffect(() => {
    if (user) {
      router.push("/dashboard"); // Redirect to /dashboard if user is logged in
    }
  }, [user, router]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignIn />
    </div>
  );
};

export default SignInPage;
