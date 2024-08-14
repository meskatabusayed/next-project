import NextAuth from "next-auth/next";
import credentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    session : {
        strategy : "jwt"
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
    ]

});



const users = [
    {
        id : 1,
        name : "Name",
        email : "mmt@gmail.com",
        password: "1234"
    },
    {
        id : 2,
        name : "Name",
        email : "ms@gmail.com",
        password: "1235"
    },
    {
        id : 3,
        name : "Name",
        email : "m3@gmail.com",
        password: "123"
    },

]



                

export {handler as GET , handler as POST};