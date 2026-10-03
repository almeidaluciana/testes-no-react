import { render, screen } from "@testing-library/react";
import { it, expect } from "vitest";

import App from "./App";

it("deve exibir o título", () => {
  render(<App />);

  expect(screen.getByText("Minha aplicação")).toBeInTheDocument();
});
