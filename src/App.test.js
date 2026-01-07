import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza el título correctamente', () => {
  render(<App />);
  const titulo = screen.getByText(/Calculadora HITO 2/i);
  expect(titulo).toBeInTheDocument();
});

