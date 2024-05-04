import react from "@vitejs/plugin-react";
import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals();

export default defineConfig({
  // Use react vite plugin in Vitest environment, remix otherwise
  // https://remix.run/docs/en/main/guides/vite#plugin-usage-with-other-vite-based-tools-eg-vitest-storybook
  plugins: [!process.env.VITEST ? remix() : react(), tsconfigPaths()],
  // Configure Vitest environment using jsdom
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./setupTest.ts"],
  },
});
