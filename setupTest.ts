import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
// Import js-dom extensions for vitest assertions
import "@testing-library/jest-dom/vitest";

// Reset DOM after each test
afterEach(() => {
  cleanup();
});
