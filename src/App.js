import { useState } from 'react';

function App() {
  const [result, setResult] = useState(0);
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  const handleAdd = () => {
    setResult(Number(num1) + Number(num2));
  };

  const handleSubtract = () => {
    setResult(Number(num1) - Number(num2));
  };

  return (
    <div>
      <h1>Calculadora HITO 2</h1>
      <input
        type="number"
        placeholder="Número 1"
        value={num1}
        onChange={e => setNum1(e.target.value)}
        data-testid="num1"
      />
      <input
        type="number"
        placeholder="Número 2"
        value={num2}
        onChange={e => setNum2(e.target.value)}
        data-testid="num2"
      />
      <div>
        <button onClick={handleAdd} data-testid="add-btn">Sumar</button>
        <button onClick={handleSubtract} data-testid="sub-btn">Restar</button>
      </div>
      <h2 data-testid="result">Resultado: {result}</h2>
    </div>
  );
}

export default App;

