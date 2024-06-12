import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

// Reset DOM after each test
afterEach(() => {
  cleanup();
});

// Import js-dom extensions for vitest assertions
import "@testing-library/jest-dom/vitest";
