"use client";

import Link from "next/link";
import { useState } from "react";
import SignIn from "./SignIn";

const Footer: React.FC = () => {
  const [showSignIn, setShowSignIn] = useState(false);

  const handleSignInClick = () => {
    setShowSignIn(true);
  };

  const handleSignInComplete = () => {
    setShowSignIn(false);
  };

  return (
    <footer className="flex flex-col justify-center items-center gap-y-6 text-center p-4 mt-4">
      <div className="flex flex-row space-x-2">
        <span className="font-bold">
          Connect Farcaster accounts for free using&nbsp;
        </span>
        <button onClick={handleSignInClick}>Sign in with Neynar</button>
      </div>

      {showSignIn && <SignIn />}

      <Link href="https://github.com" target="_blank">
        Farcaster -&gt; <span className="font-bold">WarpHeroes</span>
      </Link>
    </footer>
  );
};

export default Footer;
