import React from 'react';
import Input from '../Form/Input';
import Error from '../helpers/Error';
import Button from '../components/Button';
import { PLACA_HISTORY } from '../Api';

const Historico = () => {
  const [data, setData] = React.useState([]);
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function handleBlur({ target }) {
    if (target.value.length === 0) {
      setError('Insira uma placa');
    } else {
      setError(null);
      setValue(target.value);
    }
  }

  async function historico(e) {
    e.preventDefault();
    const { url, options } = PLACA_HISTORY(value);
    await fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      })
      .catch((err) => setError(err));
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
        <Error error={error} />
        {error ? (
          <Button disabled>Ver Historico</Button>
        ) : (
          <Button onClick={historico}>Ver Historico</Button>
        )}
        <div>
          {' '}
          {data.map((data) => (
            <ul>
              <li key={data.id}>
                <p>{data.time}</p>
                <p>{data.paid === true ? 'pago' : '-'}</p>
              </li>
            </ul>
          ))}
        </div>
      </form>
    </>
  );
};

export default Historico;
