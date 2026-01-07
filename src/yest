import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('realiza suma correctamente', () => {
  render(<App />);

  const num1 = screen.getByTestId('num1');
  const num2 = screen.getByTestId('num2');
  const addBtn = screen.getByTestId('add-btn');
  const result = screen.getByTestId('result');

  fireEvent.change(num1, { target: { value: '3' } });
  fireEvent.change(num2, { target: { value: '4' } });
  fireEvent.click(addBtn);

  expect(result.textContent).toBe('Resultado: 7');
});

test('realiza resta correctamente', () => {
  render(<App />);

  const num1 = screen.getByTestId('num1');
  const num2 = screen.getByTestId('num2');
  const subBtn = screen.getByTestId('sub-btn');
  const result = screen.getByTestId('result');

  fireEvent.change(num1, { target: { value: '10' } });
  fireEvent.change(num2, { target: { value: '4' } });
  fireEvent.click(subBtn);

  expect(result.textContent).toBe('Resultado: 6');
});

