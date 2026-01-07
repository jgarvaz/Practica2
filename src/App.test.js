import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("calcula correctamente 2 + 3 al pulsar el botón", () => {
  render(<App />);

  const boton = screen.getByText(/calcular/i);
  fireEvent.click(boton);

  const resultado = screen.getByTestId("resultado");
  expect(resultado).toHaveTextContent("Resultado: 5");
});

