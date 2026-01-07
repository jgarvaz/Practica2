import { useState } from "react";

function App() {
  const [resultado, setResultado] = useState(null);

  const sumar = () => {
    setResultado(2 + 40);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>HITO 2 - React + Jest</h1>

      <p>
        Operación: <strong>2 + 3</strong>
      </p>

      <button onClick={sumar}>Calcular</button>

      {resultado !== null && (
        <p data-testid="resultado">
          Resultado: <strong>{resultado}</strong>
        </p>
      )}
    </div>
  );
}

export default App;

