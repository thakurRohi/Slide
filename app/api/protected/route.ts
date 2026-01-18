import { auth } from "@/app/api/auth/[...nextauth]/route"
import { NextResponse } from "next/server"

export async function GET() {
  const session = await auth()
  
  if (!session) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    )
  }
  
  return NextResponse.json({
    message: "This is protected data",
    user: {
      id: session.user?.id,
      name: session.user?.name,
      email: session.user?.email,
    },
    timestamp: new Date().toISOString(),
  })
}