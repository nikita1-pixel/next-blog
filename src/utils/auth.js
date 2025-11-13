import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";

// This object is imported by your [...nextauth]/route.js file
export const authOptions = {
    // Session configuration (optional, defaults are usually fine)
    session: {
        strategy: "jwt",
    },
    
    // Configure the providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_ID,
            clientSecret: process.env.FACEBOOK_SECRET,
        }),
        // You can add more providers here (e.g., Email, Twitter)
    ],
    
    // Optional: Add custom pages for sign-in/error handling
    pages: {
        signIn: "/login", // Redirects users to your /login page on sign-in attempt
        error: "/login", // Redirects users to your /login page on error
    },

    // Optional: Add callbacks if you need to modify the session or JWT
    // callbacks: {
    //     async jwt({ token, user }) {
    //         return token;
    //     },
    //     async session({ session, token }) {
    //         return session;
    //     },
    // },
};