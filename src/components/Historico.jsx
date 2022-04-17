import React from 'react';
import useForm from '../Hooks/useForm';
import Input from '../Form/Input';
import styles from './Historico.module.css';

import Button from '../components/Button';
import { PLACA_HISTORY } from '../Api';

const Historico = () => {
  const [data, setData] = React.useState([]);
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  const placa = useForm('placa');

  async function historico(e) {
    e.preventDefault();
    const { url, options } = PLACA_HISTORY(placa.value);

    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
  }

  return (
    <>
      <form className={styles.form}>
        <Input label="Número da Placa:" type="text" name="placa" {...placa} />

        {error ? (
          <Button disabled>Ver Historico</Button>
        ) : (
          <Button onClick={historico}>Ver Historico</Button>
        )}
        <div>
          {' '}
          {data.map((data) => (
            <ul className={styles.ul}>
              <li className={styles.li} key={data.id}>
                <div className={styles.container}>
                  <p className={styles.title}>Tempo:</p>
                  <p className={styles.value}>{data.time}</p>
                </div>
                <div>
                  <p className={styles.title}> Situação: </p>
                  <p className={styles.value}>
                    {data.paid === true ? 'PAGO' : 'NÃO PAGO'}
                  </p>
                </div>
              </li>
            </ul>
          ))}
        </div>
      </form>
    </>
  );
};

export default Historico;
