import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Index from "../_index";

describe("index", () => {
  it("renders", () => {
    render(<Index />);
    expect(screen.getByTestId("hello")).toBeInTheDocument();
  });
});
