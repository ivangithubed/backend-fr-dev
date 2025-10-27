export default ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
    sessions: {
      // Конфігурація для Strapi 5
      maxRefreshTokenLifespan: 1000 * 60 * 60 * 24 * 7, // 7 днів
      maxSessionLifespan: 1000 * 60 * 60 * 24, // 1 день
    },
  },
  // Налаштування для HTTPS на продакшені
  session: {
    keys: env.array("APP_KEYS"),
    cookie: {
      secure: env("NODE_ENV") === "production",
      sameSite: "lax",
    },
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT"),
    },
  },
  secrets: {
    encryptionKey: env("ENCRYPTION_KEY"),
  },
  flags: {
    nps: env.bool("FLAG_NPS", true),
    promoteEE: env.bool("FLAG_PROMOTE_EE", true),
  },
});
