import { auth } from "@/app/api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import { SignOutButton } from "@/components/auth/sign-out-button"
import Image from "next/image"

export default async function DashboardPage() {
  const session = await auth()

  if (!session) {
    redirect("/auth/signin")
  }

  return (
    <div className="container mx-auto p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <SignOutButton />
      </div>
      
      <div className="mt-8 space-y-6">
        <div className="flex items-center gap-4 p-6 rounded-lg border">
          {session.user?.image && (
            <Image
              src={session.user.image}
              alt={session.user.name || "User"}
              width={64}
              height={64}
              className="rounded-full"
            />
          )}
          <div>
            <p className="text-xl font-semibold">
              Welcome, {session.user?.name || session.user?.email}!
            </p>
            <p className="text-muted-foreground">{session.user?.email}</p>
          </div>
        </div>
        
        <div className="p-4 rounded bg-gray-100">
          <h2 className="font-semibold mb-2">Session Data:</h2>
          <pre className="text-xs overflow-auto">
            {JSON.stringify(session, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  )
}