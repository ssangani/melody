import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import About from "../about";

describe("about", () => {
  it("renders", () => {
    render(<About />);
    expect(screen.getByTestId("todo")).toBeInTheDocument();
  });
});
