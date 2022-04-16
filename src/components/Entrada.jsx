import React from 'react';
import Input from '../Form/Input';
import axios from 'axios';
import Error from '../helpers/Error';
import Button from './Button';
import { PLACA_POST } from '../Api';

const Entrada = () => {
  const [data, setData] = React.useState('');
  const [error, setError] = React.useState(null);

  const types = {
    placa: {
      regex: /^[a-zA-Z]{3}-[0-9]{4}/g,
    },
    message: 'Preencha uma Placa valida : AAA-0000',
  };

  function handleBlur({ target }) {
    if (types === false) return true;
    if (!types.placa.regex.test(target.value)) {
      setError(types.message);
      return false;
    } else {
      setError(null);
      setData(target.value);
      return true;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = PLACA_POST({
      plate: data,
    });
    fetch(url, options).then((response) => console.log(response));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          onBlur={handleBlur}
          label="Número da Placa:"
          type="text"
          name="placa"
        />
        <Error error={error} />
        {error ? (
          <Button disabled> Confirmar Entrada</Button>
        ) : (
          <Button> Confirmar Entrada</Button>
        )}
      </form>
    </div>
  );
};

export default Entrada;
