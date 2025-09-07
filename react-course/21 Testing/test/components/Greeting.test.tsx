import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Greeting } from "../../src/components/Greeting";

describe("Greeting", () => {
  it("should render the correct greeting", () => {
    render(<Greeting name="John" />);

    expect(screen.getByRole("heading")).toHaveTextContent("Hello, John!");
    expect(screen.getByRole("paragraph")).toHaveTextContent("It's good to see you!");
  });
});
