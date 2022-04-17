import React from 'react';
import Input from '../Form/Input';
import Button from './Button';
import styles from './Saida.module.css';
import useForm from '../Hooks/useForm';

import { PLACA_DELETE, PLACA_HISTORY, PLACA_PAGE } from '../Api';

const Saida = () => {
  const [pago, setPago] = React.useState(null);
  const [error, setError] = React.useState(null);
  const placa = useForm('placa');

  async function saida(e) {
    e.preventDefault();
    if (pago === true) {
      const { url, options } = PLACA_DELETE(placa.value);
      const response = await fetch(url, options);
      const text = await response.text();
      console.log('Saiu');
    } else {
      setError('Por favor, realiza o pagamento');
    }
  }

  async function pagamento(e) {
    e.preventDefault();
    const { url, options } = PLACA_PAGE(placa.value);
    const response = await fetch(url, options);
    const text = await response.text();
    setPago(true);
    console.log('Pagou');
  }

  return (
    <>
      <form className={styles.form}>
        <Input label="Número da Placa:" type="text" name="placa" {...placa} />
        <Button onClick={pagamento}>Pagamento</Button>
        <Button onClick={saida}>Saida</Button>
      </form>
    </>
  );
};

export default Saida;
