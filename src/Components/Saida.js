import React from 'react';
import Input from '../Form/Input';
import Button from './Button';
import '../../src/App.css'
import styles from './Saida.module.css';
import useForm from '../Hooks/useForm';
import { PLACA_DELETE, PLACA_PAGE } from '../Api';
import { toast } from 'react-toastify';

const Saida = () => {
  const [error, setError] = React.useState(null);
  const [paid, setPaid] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const placa = useForm('placa');

  async function saida(e) {
    e.preventDefault();
    if (placa.validate()) {
      setError(null);
      setLoading(true);
      const { url, options } = PLACA_DELETE(placa.value);
      const response = await fetch(url, options);
      const text = await response.text();
      setLoading(false);

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
      setLoading(true);
      const { url, options } = PLACA_PAGE(placa.value);
      const response = await fetch(url, options);
      setLoading(false);
     
      if (response.ok) {
        setPaid(true);
        setError(null);
        toast.success('Pagamento efetuado com sucesso! 💰');
      }

      const text = await response.text();
     
      
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
      <div>
          <h1 className='titles'>Saida/Pagamentos</h1>
        </div>
        <Input
          label="Por favor, digite a Placa do Veiculo:"
          type="text"
          name="placa"
          {...placa}
        />
        {placa.error || loading ? (
          <Button disabled styles={styles.button}>
            Aguarde...
          </Button>
        ) : (
          <Button styles={styles.button} onClick={pagamento}>
            Pagamento
          </Button>
        )}
        {placa.error || error || loading ? (
          <Button disabled onClick={saida}>
            Aguarde...
          </Button>
        ) : (
          <Button onClick={saida}>Saida</Button>
        )}
      </form>
    </>
  );
};

export default Saida;
