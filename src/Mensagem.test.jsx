import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import Mensagem from "./Mensagem";

it("deve exibir boas-vindas", () => {
  render(<Mensagem logado={true} />);

  expect(screen.getByText("Bem-vindo!")).toBeInTheDocument();
});

it("deve solicitar login", () => {
  render(<Mensagem logado={false} />);

  expect(screen.getByText("Faça login")).toBeInTheDocument();
});
