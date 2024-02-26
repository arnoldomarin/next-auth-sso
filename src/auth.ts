import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import KeycloakProvider from "next-auth/providers/keycloak";

export const { 
    handlers: { GET, POST }, 
    auth, 
    signIn, 
    signOut 
} = NextAuth({
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        KeycloakProvider({
                clientId: process.env.KEYCLOAK_ID,
                clientSecret: process.env.KEYCLOAK_SECRET,
                issuer: process.env.KEYCLOAK_ISSUER,
        })
    ],
})