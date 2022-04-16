import React from 'react';
import Input from '../Form/Input';
import Button from './Button';
import SaidaConfirm from './SaidaConfirm';

import { PLACA_DELETE, PLACA_HISTORY, PLACA_PAGE } from '../Api';

const Saida = () => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);
  const [ativar, setAtivar] = React.useState(false);

  function handleBlur({ target }) {
    console.log(target.value);
    setValue(target.value);
    return value;
  }

  function openModal(e) {
    e.preventDefault();
    setAtivar(!ativar);
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
        <Button onClick={openModal} closeModal={setAtivar}>
          {' '}
          Modal
        </Button>
        <Button onClick={saida}>Saida</Button>
        {ativar && <SaidaConfirm />}
      </form>
    </>
  );
};

export default Saida;
