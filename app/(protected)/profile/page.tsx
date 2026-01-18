import { auth } from "@/app/api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import Image from "next/image"

export default async function ProfilePage() {
  const session = await auth()
  
  if (!session) {
    redirect("/auth/signin")
  }
  
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Profile</h1>
      
      <div className="max-w-2xl space-y-6">
        <div className="flex items-center gap-6 p-6 rounded-lg border">
          {session.user?.image && (
            <Image
              src={session.user.image}
              alt={session.user.name || "User"}
              width={100}
              height={100}
              className="rounded-full"
            />
          )}
          <div>
            <h2 className="text-2xl font-semibold">{session.user?.name}</h2>
            <p className="text-muted-foreground">{session.user?.email}</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Name</label>
            <p className="mt-1">{session.user?.name || "Not provided"}</p>
          </div>
          
          <div>
            <label className="text-sm font-medium">Email</label>
            <p className="mt-1">{session.user?.email || "Not provided"}</p>
          </div>
          
          <div>
            <label className="text-sm font-medium">User ID</label>
            <p className="mt-1 font-mono text-sm">{session.user?.id || "Not available"}</p>
          </div>
        </div>
      </div>
    </div>
  )
}