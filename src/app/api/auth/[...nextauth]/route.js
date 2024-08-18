import NextAuth from "next-auth/next";
import credentialsProvider from "next-auth/providers/credentials"

export const authOptions = 
    {
        secret : process.env.NEXT_PUBLIC_AUTH_SECRET,
        session : {
            strategy : "jwt",
            maxAge : 30 * 24 * 60 * 60
        },
        providers : [
            credentialsProvider({
                credentials : {
                    email : {
                        label : 'Email',
                        type : "text",
                        required : true,
                        placeholder : "Your Email"
    
                    },
                    password : {
                        label : 'Password',
                        type : "text",
                        required : true,
                        placeholder : "Your Password"
    
                    },
                },
                async authorize(credentials){
                    const {email , password} = credentials;
                    if(!credentials){
                        return null
                    }
                    if(email){
                        const currentUser = users.find((user) => user.email === email);
                        if(currentUser){
                            if(currentUser.password === password){
                                return currentUser;
                            }
                        }
    
                    }
                    return null;
                }
    
            })
        ],
        callbacks : {
            async jwt({ token, account, user }) {
                // Persist the OAuth access_token and or the user id to the token right after signin
                if (account) {
                  token.type = user.type;
                  
                }
                return token
              },
            async session({ session,  token }) {
                session.user.type = token.type
                return session
              },
        }
    
    }

const handler = NextAuth(authOptions);



const users = [
    {
        id : 1,
        name : "Name",
        type : 'admin',
        email : "mmt@gmail.com",
        password: "1234"
    },
    {
        id : 2,
        name : "meskat",
        type : "Modarator",
        email : "ms@gmail.com",
        password: "1235"
    },
    {
        id : 3,
        name : "AbuSayed",
        email : "m3@gmail.com",
        type : "normal user",
        password: "1238"
    },

]



                

export {handler as GET , handler as POST};