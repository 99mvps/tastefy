import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

const options = {
  providers: [
    SpotifyProvider({
      clientId: String(process.env.SPOTIFY_CLIENT_ID),
      clientSecret: String(process.env.SPOTIFY_CLIENT_SECRET),
      profile(profile) {
        return {
          id: profile.id,
          name: profile.display_name,
          email: profile.email,
          image: profile.images?.[0]?.url,
        };
      },
    }),
  ],
  // Optional SQL or MongoDB database to persist users
  // database: process.env.DATABASE_URL,
};

// eslint-disable-next-line
export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);
