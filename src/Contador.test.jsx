import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { it, expect } from "vitest";
import Contador from "./Contador";

it("deve incrementar o contador", async () => {
  const user = userEvent.setup();

  render(<Contador />);

  await user.click(
    screen.getByRole("button", {
      name: "Incrementar",
    }),
  );

  expect(screen.getByText("Contador: 1")).toBeInTheDocument();
});
