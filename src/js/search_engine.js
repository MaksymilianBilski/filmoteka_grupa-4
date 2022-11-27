// import { async } from 'regenerator-runtime';
// import {
//   fetchMovies,
//   start,
//   fetchDetails,
//   getMovie,
//   API_KEY,
//   totalPages,
//   timeDifference,
// } from './fetch-to-main';
// import { Spinner } from 'spin.js';
// import { opts } from './asynchronic-loader-opts';

// const API_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
// const input = document.getElementById('form-input');
// const searchForm = document.getElementById('search-form');

// let SEACRH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;
// let totalSearchedPages

// searchForm.addEventListener('submit', event => {
//   const spinner = new Spinner(opts).spin(getMovie);
//   if (getMovie.children.length > 0) {
//     getMovie.innerHTML = '';
//   }
//   event.preventDefault();
//   let searchValue = input.value.toLowerCase();
//   if (searchValue === '') {
//     fetchMovies(API_KEY);
//   }
//   if (searchValue && searchValue !== '') {
//     fetch(SEACRH_URL + searchValue)
//       .then(data => {
//         return data.json();
//       })
//       .then(movies => {
//         start(movies);
//       });
//     searchValue = '';
//     spinner.stop();
//   }
// });

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
import { searchEnginePagination } from './pagination';
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
  searchEnginePagination();
  const spinner = new Spinner(opts).spin(getMovie);
  if (getMovie.children.length > 0) {
    getMovie.innerHTML = '';
  }
  // event.preventDefault();
  let searchValue = input.value.toLowerCase();
  if (searchValue === '') {
    fetchMovies(API_KEY);
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
        }
        start(movies);
        totalSearchedPages = movies.total_pages;
      })
      .catch(error => {
        console.log(error);
      });
    searchValue = '';
    spinner.stop();

    // const response = await fetch(SEARCH_URL + searchValue + page);
    // if (!response.ok) {
    //   const formError = document.querySelector('.header-form-error');
    //   formError.innerText =
    //     'Search result not successful. Enter the correct movie name and try again.';
    //   setTimeout(() => {
    //     formError.innerText = '';
    //   }, 3000);
    searchValue = '';
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
