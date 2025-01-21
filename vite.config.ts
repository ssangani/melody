import react from "@vitejs/plugin-react";
import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    port: 3000,
  },
  // Use react vite plugin in Vitest environment, remix otherwise
  // https://remix.run/docs/en/main/guides/vite#plugin-usage-with-other-vite-based-tools-eg-vitest-storybook
  plugins: [
    !process.env.VITEST
      ? remix({
          ignoredRouteFiles: ["**/*.css"],
          future: {
            unstable_optimizeDeps: true,
            v3_fetcherPersist: true,
            v3_relativeSplatPath: true,
            v3_throwAbortReason: true,
            v3_lazyRouteDiscovery: true,
            v3_singleFetch: true,
            v3_routeConfig: true,
          },
        })
      : react(),
    tsconfigPaths(),
  ],
  // Configure Vitest environment using jsdom
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./test/setupTestEnv.ts"],
  },
});
