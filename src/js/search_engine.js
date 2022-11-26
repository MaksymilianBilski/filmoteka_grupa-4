import { async } from 'regenerator-runtime';
import {
  fetchMovies,
  start,
  fetchDetails,
  getMovie,
  API_KEY,
  totalPages,
  timeDifference,
} from './fetch-to-main';
import { Spinner } from 'spin.js';

const API_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
const input = document.getElementById('form-input');
const searchForm = document.getElementById('search-form');
let SEACRH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`



searchForm.addEventListener('input', event => {
  event.preventDefault();
  let searchValue = input.value.toLowerCase()
  if (getMovie.children.length > 1) {
    getMovie.innerHTML = '';
  }
  if (searchValue && searchValue !=='') {
    fetch(SEACRH_URL+searchValue)
    .then(data => {
      return data.json()
    })
    .then(movies => {
      start(movies)
    })
    searchValue=''
  }
  fetchMovies(API_KEY)
});

