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
import {
  searchEnginePagination,
  startState,
  stylesAndListeners,
  pagination,
} from './pagination';
import { Spinner } from 'spin.js';
import { opts } from './asynchronic-loader-opts';

const API_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
const input = document.getElementById('form-input');
let SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;
let totalSearchedPages;
let search;
const formError = document.querySelector('.header-form-error');
const searchForm = document.getElementById('search-form');

async function searcher(page) {
  search = true;
  formError.innerHTML = '';
  const spinner = new Spinner(opts).spin(getMovie);
  if (getMovie.children.length > 0) {
    getMovie.innerHTML = '';
  }
  let searchValue = input.value.toLowerCase();
  if (searchValue === '') {
    fetchMovies(API_KEY);
    pagination.innerHTML = '';
    startState(totalPages);
    stylesAndListeners();
    search = false;
  }
  if (searchValue && searchValue !== '') {
    fetch(SEARCH_URL + searchValue + page)
      .then(data => {
        return data.json();
      })
      .then(movies => {
        if (movies.results.length === 0) {
          error = formError.innerText =
            'Search result not successful. Enter the correct movie name and try again.';
          setTimeout(() => {
            formError.innerText = '';
          }, 3000);
        }
        start(movies);
        searchEnginePagination();
        totalSearchedPages = movies.total_pages;
      })
      .catch(error => {
        console.log(error);
      });
    searchValue = '';
    spinner.stop();
    return;
  }
}

if (searchForm !== null) {
  searchForm.addEventListener('submit', e => {
    e.preventDefault();
    searcher('');
  });
}

export { totalSearchedPages, search, searcher, input };
