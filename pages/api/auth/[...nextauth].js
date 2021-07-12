import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
const axios = require('axios');

export default NextAuth({
  // Configure one or more authentication providers
  site: process.env.NEXTAUTH_URL,
  providers: [
  
    // Providers.Email({
    //     server: {
    //       port: 465,
    //       host: 'smtp.gmail.com',
    //       secure: true,
    //       auth: {
    //         user: process.env.EMAIL_USERNAME,
    //         pass: process.env.EMAIL_PASSWORD,
    //       },
    //       tls: {
    //         rejectUnauthorized: false,
    //       },
    //     },
    //     from: process.env.EMAIL_FROM,
    //   }),
      
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_SECRET_ID
    }),

    // ...add more providers here
  ],
  database: process.env.DATABASE_URL,
  callbacks: {
    session: async (session, user) => {
       
        const instance = await axios.create({
            baseURL: process.env.API_URL
          });

          await instance.get('/profile?id='+user.id)
          .then(function (r) {
              session.user = r.data

          })

        return await Promise.resolve(session)


    }
 },
})