"use client"

import Link from "next/link"
import { useSession } from "next-auth/react"
import { SignOutButton } from "@/components/auth/sign-out-button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { User, Settings, LogOut } from "lucide-react" // Removed Link from here

// ... rest of your component stays the same
export function UserMenu() {
  const { data: session } = useSession()
  
  if (!session?.user) return null
  
  const initials = session.user.name
    ?.split(" ")
    .map(n => n[0])
    .join("")
    .toUpperCase() || "U"
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="group relative flex items-center gap-2 outline-none">
          {/* Added a subtle ring that glows on hover to separate from blue bg */}
          <Avatar className="h-10 w-10 border-2 border-white/20 transition-all duration-200 group-hover:border-white/50 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            <AvatarImage src={session.user.image || ""} className="object-cover" />
            {/* Fallback designed for blue bg contrast */}
            <AvatarFallback className="bg-blue-900 text-blue-100 font-medium">
              {initials}
            </AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>
      
      {/* Design Upgrades:
        1. bg-blue-950/90: Deep dark blue background (semi-transparent).
        2. backdrop-blur-md: Creates the glass effect.
        3. border-blue-800: Subtle border blending with the theme.
        4. text-blue-50: High contrast text for dark backgrounds.
      */}
      <DropdownMenuContent 
        align="end" 
        className="w-56 overflow-hidden rounded-xl border border-blue-800/50 bg-blue-950/90 p-1 text-blue-50 backdrop-blur-xl shadow-2xl"
      >
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1 p-2">
            <span className="font-semibold leading-none tracking-tight text-white">
              {session.user.name}
            </span>
            <span className="text-xs text-blue-300">
              {session.user.email}
            </span>
          </div>
        </DropdownMenuLabel>
        
        <DropdownMenuSeparator className="bg-blue-800/50" />
        
        <div className="p-1">
        <DropdownMenuItem asChild>
            <Link 
              href="/dashboard" 
              className="group flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-sm text-blue-100 transition-colors focus:bg-blue-800/50 focus:text-white"
            >
              <User className="h-4 w-4 text-blue-300 group-hover:text-blue-100" />
              <span>Profile</span>
            </Link>
          </DropdownMenuItem>
          
          <DropdownMenuItem className="group flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-sm text-blue-100 transition-colors focus:bg-blue-800/50 focus:text-white">
            <Settings className="h-4 w-4 text-blue-300 group-hover:text-blue-100" />
            <span>Settings</span>
          </DropdownMenuItem>
        </div>

        <DropdownMenuSeparator className="bg-blue-800/50" />
        
        <DropdownMenuItem asChild className="p-0 focus:bg-transparent">
          <div className="p-1">
             {/* Assuming SignOutButton accepts className or is a button */}
            <div className="group flex w-full cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-sm text-red-300 hover:bg-red-950/30 hover:text-red-200 focus:bg-red-950/30">
                <LogOut className="h-4 w-4" />
                <SignOutButton className="w-full text-left bg-transparent" />
            </div>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}