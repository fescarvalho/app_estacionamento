export const API_URL = 'https://parking-lot-to-pfz.herokuapp.com';

export function PLACA_POST(body) {
  return {
    url: API_URL + '/parking',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function PLACA_HISTORY(placa) {
  return {
    url: API_URL + '/parking/' + placa,
    options: {
      method: 'GET',
    },
  };
}

export function PLACA_DELETE(placa) {
  return {
    url: API_URL + '/parking/' + placa + '/out',
    options: {
      method: 'POST',
    },
  };
}

export function PLACA_PAGE(placa) {
  return {
    url: API_URL + '/parking/' + placa + '/pay',
    options: {
      method: 'POST',
    },
  };
}
