"use client"

import Link from "next/link"
import { useSession } from "next-auth/react"
import { SignInButton } from "@/components/auth/sign-in-button"
import { UserMenu } from "@/components/auth/user-menu"

export function Navbar() {
  const { data: session, status } = useSession()
  
  return (
    <nav className="relative">
      <div className="px-16 max-md:px-5 bg-[#182E6E]">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-white text-black flex items-center justify-center font-bold">
              li
            </div>
            <span className="text-xl font-semibold text-blue-200">
              Slide
            </span>
          </Link>
          
          <div className="flex items-center gap-6">
            <nav className="hidden space-x-6 text-sm text-blue-200 md:block">
              <Link href="#features">Features</Link>
              <Link href="#pricing">Pricing</Link>
              <Link href="#about">About</Link>
            </nav>
            
            {status === "loading" ? (
              // Show nothing or a placeholder during loading
              <div className="h-10 w-10" /> // Invisible placeholder to prevent layout shift
            ) : session ? (
              <UserMenu />
            ) : (
              <SignInButton />
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}