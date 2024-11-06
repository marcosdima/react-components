import axios from 'axios';
const baseUrl = 'https://nominatim.openstreetmap.org/search?';

const getLocation = async (adress) => {
  const { data } = await axios.get(baseUrl + `q=${adress}&format=json`);
  return data;
};

export { getLocation };
