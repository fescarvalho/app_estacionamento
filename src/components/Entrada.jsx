import React from 'react';
import styles from './Entrada.module.css';
import Input from '../Form/Input';
import useForm from '../Hooks/useForm';
import Button from './Button';
import { PLACA_POST } from '../Api';
import ModalOK from './ModalOK';
import Confirm from './Confirm';

const Entrada = () => {
  const [error, setError] = React.useState(null);

  const [reservation, setReservation] = React.useState(false);

  const placa = useForm('placa');

  async function handleSubmit(event) {
    event.preventDefault();

    if (placa.validate()) {
      const { url, options } = PLACA_POST({
        plate: placa.value,
      });

      try {
        const response = await fetch(url, options);
        const json = await response.json();

        if (json.reservation) setReservation(true);
        if (json.errors.plate.includes('already parked')) {
          setReservation(false);
          alert('Carro ja esta no estacionamento');
        }
      } catch (error) {
        setError(error);
      } finally {
        setError(null);
      }
    }
  }

  return (
    <section className={styles.container + ' animeLeft'}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Número da Placa:" type="text" name="placa" {...placa} />
        {placa.error ? (
          <Button disabled>Cofirmar</Button>
        ) : (
          <Button>Cofirmar</Button>
        )}
        {reservation && <Confirm />}
      </form>
    </section>
  );
};

export default Entrada;
