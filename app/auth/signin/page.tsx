import { signIn } from "@/app/api/auth/[...nextauth]/route"
import { Button } from "@/components/ui/button"

export default function SignInPage({
  searchParams,
}: {
  searchParams: { callbackUrl?: string }
}) {
  const callbackUrl = searchParams.callbackUrl || "/"
  
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-4 rounded-lg border p-8">
        <h1 className="text-2xl font-bold">Sign In</h1>
        <p className="text-muted-foreground">Choose a provider to sign in</p>
        
        <form
          action={async () => {
            "use server"
            await signIn("google", { redirectTo: callbackUrl })
          }}
        >
          <Button type="submit" className="w-full">
            Continue with Google
          </Button>
        </form>

        <form
          action={async () => {
            "use server"
            await signIn("github", { redirectTo: callbackUrl })
          }}
        >
          <Button type="submit" variant="outline" className="w-full">
            Continue with GitHub
          </Button>
        </form>
      </div>
    </div>
  )
}