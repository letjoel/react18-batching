import { useState } from "react";

const Batching = () => {
  const [valorSumado, setValorSumado] = useState(0);
  const [valorRestado, setValorRestado] = useState(0);

  const handleClick = () => {
    setValorRestado(valorRestado - 1);
    setValorSumado(valorSumado + 1);
  };

  console.log("Renderizado", valorSumado, valorRestado);

  return (
    <>
      <button onClick={handleClick}>Batching</button>
      <p>{valorSumado}</p>
      <p>{valorRestado}</p>
    </>
  );
};

export default Batching;
