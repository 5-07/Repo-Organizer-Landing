import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { ClerkProvider, SignedIn, SignedOut, SignIn, UserButton } from "@clerk/nextjs";
import { DM_Sans } from "next/font/google";
import clsx from "clsx";
import "./globals.css"; // Adjust the path if necessary
import Spline from '@splinetool/react-spline/next';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const dmSans = DM_Sans({ subsets: ["latin"] });

export const CallToAction = () => {
  return (
    <div className="call-to-action">
      <h2>Ready to get started?</h2>
      <Link href="/sign-in">
        <a className="get-started-button">Get Started</a>
      </Link>
    </div>
  );
};

const signUpAppearance = {
  elements: {
    card: 'bg-white shadow-lg rounded-lg p-6',
    headerTitle: 'text-2xl font-bold text-center',
    formFieldInput: 'border border-gray-300 rounded-md p-2',
    formButtonPrimary: 'bg-blue-500 text-white rounded-md p-2 mt-4',
  },
};

const SignInPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <SignIn routing="path" path="/sign-in" />
    </div>
  );
};


  return (
    <ClerkProvider>
      <div className={clsx(dmSans.className, "antialiased")}>
        <Spline
          scene="https://prod.spline.design/ePiv8GIaZAAKZ8Lw/scene.splinecode"
          className="absolute inset-0 w-full h-full -z-10"
        />
        <header className="flex justify-between p-4">
          <UserButton showName />
        </header>
        <main>
          <SignedOut>
            <div className="signin-container">
              <SignIn routing="hash" />
            </div>
          </SignedOut>
          <SignedIn>
            <p>Welcome back!</p>
          </SignedIn>
        </main>
      </div>
    </ClerkProvider>
  );
}
export default SignInPage;