import React from 'react';
import Input from '../Form/Input';
import Button from './Button';
import styles from './Saida.module.css';
import useForm from '../Hooks/useForm';
import { PLACA_DELETE, PLACA_PAGE } from '../Api';

const Saida = () => {
  const [error, setError] = React.useState(null);
  const [paid, setPaid] = React.useState(false);
  const placa = useForm('placa');

  async function saida(e) {
    e.preventDefault();
    if (placa.validate()) {
      const { url, options } = PLACA_DELETE(placa.value);
      const response = await fetch(url, options);
      const text = await response.text();

      if (text.includes('not paid')) {
        alert('Nao pode sair, falta pagamento');
        setError(true);
      } else {
        setError(null);
        alert('carro saiu');
      }
    } else {
      setError(null);
    }
    return true;
  }

  async function pagamento(e) {
    e.preventDefault();
    if (placa.validate()) {
      const { url, options } = PLACA_PAGE(placa.value);
      const response = await fetch(url, options);

      if (response.ok) {
        setPaid(true);
        setError(null);
        alert('PAGO');
      }

      const text = await response.text();
      console.log(text);
      if (text.includes('not found')) {
        alert('Carro nao existe ou ja foi pago');
        setPaid(true);
      }
    } else {
      setError(error);
      setPaid(false);
      return false;
    }
  }

  return (
    <>
      <form className={styles.form + ' animeLeft'}>
        <Input label="Número da Placa:" type="text" name="placa" {...placa} />
        {placa.error ? (
          <Button disabled styles={styles.button}>
            Pagamento
          </Button>
        ) : (
          <Button styles={styles.button} onClick={pagamento}>
            Pagamento
          </Button>
        )}
        {placa.error || error ? (
          <Button disabled onClick={saida}>
            Saida
          </Button>
        ) : (
          <Button onClick={saida}>Saida</Button>
        )}
      </form>
    </>
  );
};

export default Saida;
