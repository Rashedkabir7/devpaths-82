import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import GitHubStrategy from "passport-github2";
import DiscordStrategy from "passport-discord";
import User from "../models/User.js";

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => User.findById(id).then((u) => done(null, u)));

// ✅ Google
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback",
      passReqToCallback: true,
    },
    async (req, accessToken, refreshToken, profile, done) => {
      let user = await User.findOne({ providerId: profile.id });
      if (!user) {
        user = await User.create({
          name: profile.displayName,
          email: profile.emails?.[0]?.value,
          provider: "google",
          providerId: profile.id,
          avatar: profile.photos?.[0]?.value,
        });
        req.app.get("io").emit("userCreated", user);
      }
      done(null, user);
    }
  )
);

// ✅ GitHub
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "/api/auth/github/callback",
      passReqToCallback: true,
    },
    async (req, accessToken, refreshToken, profile, done) => {
      let user = await User.findOne({ providerId: profile.id });
      if (!user) {
        user = await User.create({
          name: profile.username,
          email: profile.emails?.[0]?.value || "",
          provider: "github",
          providerId: profile.id,
          avatar: profile.photos?.[0]?.value,
        });
        req.app.get("io").emit("userCreated", user);
      }
      done(null, user);
    }
  )
);

// ✅ Discord
passport.use(
  new DiscordStrategy(
    {
      clientID: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      callbackURL: "/api/auth/discord/callback",
      scope: ["identify", "email"],
      passReqToCallback: true,
    },
    async (req, accessToken, refreshToken, profile, done) => {
      let user = await User.findOne({ providerId: profile.id });
      if (!user) {
        user = await User.create({
          name: profile.username,
          email: profile.email || "",
          provider: "discord",
          providerId: profile.id,
          avatar: `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png`,
        });
        req.app.get("io").emit("userCreated", user);
      }
      done(null, user);
    }
  )
);
