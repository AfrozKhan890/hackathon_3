import { useUser } from '@clerk/nextjs';

import {SignInButton} from "@clerk/nextjs"


export default function SignInButtonComponent() {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) return null; // Wait until user data is loaded

  return (
    !isSignedIn && (
      <button className="flex items-center px-3 py-2 bg-morelightyellow border-2 border-slate-700 text-black text-xs rounded hover:bg-yellow-100 mx-2">
        <SignInButton>Sign In</SignInButton>
      </button>
    )
  );
}