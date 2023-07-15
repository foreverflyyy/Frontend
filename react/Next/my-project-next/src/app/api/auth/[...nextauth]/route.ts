import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import {connectToDB} from "@utils/database";
import User from "@models/user";

const authConfig: any = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_SECRET!
        }),
    ],
    callbacks: {
        async session({session}: any){
            const sessionUser = await User.findOne({
                email: session.user.email
            })

            session.user.id = sessionUser._id.toString();

            return session;
        },
        async signIn({profile}: any){
            try {
                await connectToDB();

                //check if a user already exist
                const userExist = await User.findOne({
                    email: profile.email
                });

                if(!userExist){
                    await User.create({
                        email: profile.email,
                        username: profile.name.replace(" ", "").toLowerCase(),
                        image: profile.picture
                    })
                }

                return true;
            } catch(err: any) {
                console.log(err);
                return false; 
            }
        },
    }
}

const handler = NextAuth(authConfig);

export {handler as GET, handler as POST}