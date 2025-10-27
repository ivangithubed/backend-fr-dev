export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  proxy: env.bool('IS_PROXIED', true), // Для Render
  url: env('PUBLIC_URL', 'https://backend-fr-dev.onrender.com'),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
