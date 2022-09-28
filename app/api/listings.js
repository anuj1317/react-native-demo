import axios from 'axios';

const getListings = () =>
  axios.get('https://www.breakingbadapi.com/api/characters');

export default {
  getListings,
};
