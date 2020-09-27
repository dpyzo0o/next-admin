import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  providers: [
    Providers.Credentials({
      authorize: async credentials => {
        const { username, password } = credentials;
        if (username === 'admin' && password === 'admin123') {
          return Promise.resolve({ id: 100, username, password });
        } else {
          return Promise.resolve(null);
        }
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  session: {
    jwt: true,
  },

  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    encryption: true,
  },

  pages: {
    signIn: '/login',
  },

  callbacks: {
    jwt: async (token, user) => {
      if (user) {
        token.user = user;
      }
      return token;
    },
    session: async (session, jwtToken) => {
      return { ...session, user: jwtToken.user };
    },
  },
};

export default function handler(req, res) {
  return NextAuth(req, res, options);
}
