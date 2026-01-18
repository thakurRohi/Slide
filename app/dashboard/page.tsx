import { auth } from "@/app/api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import { SignOutButton } from "@/components/auth/sign-out-button"

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
      
      <div className="mt-8">
        <p>Welcome, {session.user?.name || session.user?.email}!</p>
        <pre className="mt-4 rounded bg-gray-100 p-4">
          {JSON.stringify(session, null, 2)}
        </pre>
      </div>
    </div>
  )
}