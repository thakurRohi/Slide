"use client"

import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"

export function SignInButton() {
  return (
    <Button
      onClick={() => signIn("google")} // Change to "github" or "discord" as needed
      className="bg-white text-black px-7 font-semibold"
    >
      Sign In
    </Button>
  )
}