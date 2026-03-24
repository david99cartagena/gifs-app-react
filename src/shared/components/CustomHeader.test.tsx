import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { CustomHeader } from "./CustomHeader";

describe("CustomHeader", () => {
  // render cuando un elemento puede cambiar
  const title = "Test Title";

  test("should render the title correctly", () => {
    render(<CustomHeader title={title} />);
    // screen.debug(); usarlo para guiarse
    expect(screen.getByText(title)).toBeDefined();
    expect(screen.getByText(title)).not.toBeNull();
  });

  test("should render the description when provided", () => {
    const description = "Test Description";

    render(<CustomHeader title={title} description={description} />);
    // screen.debug(); usarlo para guiarse

    expect(screen.getByText(description)).toBeDefined();
    expect(screen.getByRole("paragraph")).toBeDefined();
    expect(screen.getByRole("paragraph").innerHTML).toBe(description);

    // mejores para prevenir fallos
    // expect(screen.getByText(description)).toBeInTheDocument();
    // expect(screen.queryByText(description)).not.toBeInTheDocument();
  });

  test("should not render description when not provided", () => {
    // container cuando no se cambia
    const { container } = render(<CustomHeader title={title} />);
    // screen.debug(); usarlo para guiarse
    const divElement = container.querySelector(".content-center");

    const h1 = divElement?.querySelector("h1");
    expect(h1?.innerHTML).toBe(title);

    const p = divElement?.querySelector("p");
    expect(p).toBeNull();
  });
});
