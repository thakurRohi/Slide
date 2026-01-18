import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    // Google OAuth
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    
    // GitHub OAuth (Great for development)

    // Email/Password credentials (for custom login)
    // Credentials({
    //   credentials: {
    //     email: { label: "Email", type: "email" },
    //     password: { label: "Password", type: "password" }
    //   },
    //   async authorize(credentials) {
    //     // Add your custom authentication logic here
    //     // This is just an example
    //     if (credentials?.email && credentials?.password) {
    //       // Validate user from your database
    //       return {
    //         id: "1",
    //         email: credentials.email as string,
    //         name: "User",
    //       }
    //     }
    //     return null
    //   },
    // }),
  ],
  
  // Session configuration
  session: {
    strategy: "jwt", // Use JWT for session (no database required)
    // strategy: "database", // Use database sessions (requires database setup)
  },
  
  // Pages customization
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  
  // Callbacks for customizing session/user data
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
      }
      return session
    },
  },
})

// Export handlers for the API route
export const { GET, POST } = handlers