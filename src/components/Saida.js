import React from 'react';
import Input from '../Form/Input';
import Button from './Button';
import styles from './Saida.module.css';
import useForm from '../Hooks/useForm';
import { PLACA_DELETE, PLACA_PAGE } from '../Api';
import { toast } from 'react-toastify';

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
        toast.error('Efetue o pagamento para liberação do veiculo! 🛑');
        setError(true);
      } else {
        setError(null);
        toast.success('Carro liberado com sucesso! 🏃‍♂️');
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
        toast.success('Pagamento efetuado com sucesso! 💰');
      }

      const text = await response.text();
      console.log(text);
      if (text.includes('not found')) {
        toast.warning(
          'Veiculo não se encontra no estacionamento, ou já foi pago 🛑',
        );
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
        <Input
          label="Por favor, digite a Placa do Veiculo:"
          type="text"
          name="placa"
          {...placa}
        />
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
