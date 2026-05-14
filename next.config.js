const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

const nextConfig = {
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
    domains: [{ domain: "portfolio.trebeljahr.com", defaultLocale: "en-US" }],
  },
  reactStrictMode: true,
};

module.exports = [withPWA, withBundleAnalyzer].reduce(
  (config, plugin) => plugin(config),
  nextConfig,
);
