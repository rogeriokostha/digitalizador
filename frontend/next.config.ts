import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Necessário para rodar dentro do Docker e ser acessível no host
  ...(process.env.NODE_ENV === "development" && {
    experimental: {},
  }),
};

export default nextConfig;
