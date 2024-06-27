import { stopCar } from './drive/startEngine';

const url = 'http://127.0.0.1:3000';

export const path = {
  getCars: '/garage',
  getCar: '/garage/:id',
  engine: '/engine',
  winners: '/winners',
  getWinners: '/winners/:id',
};

export const newString = (parametrs: { key: string; value: string }[] = []) =>
  parametrs.length
    ? `?${parametrs.map((item) => `${item.key}=${item.value}`).join('&')}`
    : '';

export const getAllCars = async () => {
  const getResp = await fetch(`${url}${path.getCars}`);
  const getData = await getResp.json();
  return getData;
};

export const getCars = async (parametrs: { key: string; value: string }[]) => {
  const getResp = await fetch(`${url}${path.getCars}${newString(parametrs)}`);
  const getData = await getResp.json();
  const count = Number(getResp.headers.get('X-Total-Count'));
  console.log(getData);
  return { getData, count };
};
export const getCar = async (id: number) => {
  const getResp = await fetch(`${url}${path.getCars}/${id}`);
  const getId = await getResp.json();
  // console.log(getId)
  return getId;
};

export const startCarEngine = async (
  body: { key: string; value: string }[],
) => {
  const getResp = await fetch(`${url}${path.engine}${newString(body)}`, {
    method: 'PATCH',
  });
  if (getResp.ok) {
    const getId = await getResp.json();
    console.log();
    return getId;
  }
  const id = Number(body[0].value);
  stopCar(id);
};

export const createCar = async (body: {
  name: string;
  color: string;
  id: number;
}) => {
  await fetch(`${url}${path.getCars}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then((res) => {
    const x = res.clone().json();
    // console.log(x)
    return x;
  });
  // const get = await getResp.json();
};

export const updateCar = async (
  id: number,
  body: { name: string; color: string; id?: number },
) => {
  const getResp = await fetch(`${url}${path.getCars}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  // console.log(getResp.json())
  const get = await getResp.json();
  return get;
};

export const updateCarParametr = async (
  id: number,
  body: { name: string; color: string; id?: number },
) => {
  const getResp = await fetch(`${url}${path.getCars}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  // console.log(getResp.json())
  const get = await getResp.json();
  return get;
};

export const deleteCar = async (id: number) => {
  await fetch(`${url}${path.getCars}/${id}`, {
    method: 'DELETE',
  }).then((res) => {
    const get = res.clone().json();
    // console.log(get)
    return get;
  });
};

export const createWinner = async (body: {
  id: number;
  wins: number;
  time: number;
}) => {
  await fetch(`${url}${path.winners}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then((res) => {
    const x = res.clone().json();
    // console.log(x)
    return x;
  });
  // const get = await getResp.json();
};

export const updateWinner = async (
  id: number,
  body: { time?: string; wins?: string; id?: number },
) => {
  const getResp = await fetch(`${url}${path.winners}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  // console.log(getResp.json())
  const get = await getResp.json();
  return get;
};

export const getWinner = async (id: number) => {
  const getResp = await fetch(`${url}${path.winners}/${id}`);
  const getId = await getResp.json();
  // console.log(getId)
  return getId;
};

export const getWinners = async (
  parametrs: { key: string; value: string }[],
) => {
  const getResp = await fetch(`${url}${path.winners}${newString(parametrs)}`);
  const getData = await getResp.json();
  const count = Number(getResp.headers.get('X-Total-Count'));
  console.log(getData);
  return { getData, count };
};

export const deleteWinner = async (id: number) => {
  await fetch(`${url}${path.getCars}/${id}`, {
    method: 'DELETE',
  }).then((res) => {
    const get = res.clone().json();
    // console.log(get)
    return get;
  });
};

export const get = async (idCar: number) => {
  const car = await getCar(idCar);
  return car;
};
getAllCars();
