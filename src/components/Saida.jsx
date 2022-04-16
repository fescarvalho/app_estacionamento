import React from 'react';
import Input from '../Form/Input';
import Button from './Button';
import { Link } from 'react-router-dom';
import { PLACA_DELETE, PLACA_HISTORY, PLACA_PAGE } from '../Api';

const Saida = () => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function handleBlur({ target }) {
    console.log(target.value);
    setValue(target.value);
  }

  async function historio(e) {
    e.preventDefault();
    const { url, options } = PLACA_HISTORY(value);
    await fetch(url, options)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  async function saida(e) {
    e.preventDefault();
    const { url, options } = PLACA_DELETE(value);
    await fetch(url, options).then((response) => response.text);
  }
  async function pagamento(e) {
    e.preventDefault();
    const { url, options } = PLACA_PAGE(value);
    await fetch(url, options).then((response) => response.text);
  }

  return (
    <>
      <form>
        <Input
          onBlur={handleBlur}
          label="Número da Placa:"
          type="text"
          name="placa"
        />
        <Button onClick={pagamento}>Pagamento</Button>
        <Button onClick={saida}>Saida</Button>

        <Button onClick={historio}> Ver Historico</Button>
      </form>
    </>
  );
};

export default Saida;
