import react from "@vitejs/plugin-react";
import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    port: 3000,
  },
  // Use react vite plugin in Vitest environment, remix otherwise
  // https://remix.run/docs/en/main/guides/vite#plugin-usage-with-other-vite-based-tools-eg-vitest-storybook
  plugins: [!process.env.VITEST ? reactRouter() : react(), tsconfigPaths()],
  // Configure Vitest environment using jsdom
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./test/setupTestEnv.ts"],
  },
});
