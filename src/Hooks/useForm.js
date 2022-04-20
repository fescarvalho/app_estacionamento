import React from 'react';

const types = {
  placa: {
    regex: /^[A-Z]{3}-[0-9]{4}/g,
    message: 'Preencha uma Placa valida : AAA-0000',
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function validate(value) {
    if (value.length === 0) {
      setError('O campo não pode estar vazio');
      return false;
    }

    if (types[type].regex.test(value)) {
      setError(null);
      return true;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
