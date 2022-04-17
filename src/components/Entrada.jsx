import React from 'react';
import styles from './Entrada.module.css';
import Input from '../Form/Input';
import useForm from '../Hooks/useForm';
import Button from './Button';
import { PLACA_POST } from '../Api';
import Confirm from './Confirm';

const Entrada = () => {
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const [active, setActive] = React.useState(null);
  const placa = useForm('placa');

  async function handleSubmit(event) {
    event.preventDefault();

    if (!placa.validate()) {
      const { url, options } = PLACA_POST({
        plate: placa.value,
      });

      try {
        setLoading(true);
        setActive(true);
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json);

        setLoading(false);
        setActive(false);
      } catch (error) {
        setError(error);
      } finally {
        setError(null);
        setLoading(false);
        setActive(true);
      }
    }
  }

  return (
    <div styles={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Número da Placa:" type="text" name="placa" {...placa} />
        {active === true ? (
          <Button disabled>Carro Guardado</Button>
        ) : (
          <Button>Confirmar</Button>
        )}
      </form>
    </div>
  );
};

export default Entrada;
