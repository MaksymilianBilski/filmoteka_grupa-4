import { Spinner } from 'spin.js';

const libraryButtons = document.querySelectorAll('.btn');
const queueBtn = document.getElementById('btn-queue');
const watchedBtn = document.getElementById('btn-watched');
let savedQueued = localStorage.getItem('queued');
let parsedQueued = JSON.parse(savedQueued);
let savedWatched = localStorage.getItem('watched');
let parsedWatched = JSON.parse(savedWatched);
const getMovie = document.getElementById('movie-list-library');
let totalPagesStorage;
let queue;
let watched;

//Queue

if (queueBtn !== null) {
  queueBtn.addEventListener('click', () => {
    if (parsedQueued !== null) {
      addMoviesFromLocalstorage(parsedQueued);
    }
    if (parsedQueued === null || undefined) {
      getMovie.innerHTML = '';
    }
  });
}

//Watched
if (watchedBtn !== null) {
  watchedBtn.addEventListener('click', () => {
    if (parsedWatched === null || undefined) {
      getMovie.innerHTML = '';
    } else if (parsedWatched !== null || undefined) {
      addMoviesFromLocalstorage(parsedWatched);

    }
  });
}

//buttons styling
if (libraryButtons[1] !== undefined && libraryButtons[0] !== undefined) {
  libraryButtons[0].addEventListener('click', () => {
    libraryButtons[0].classList.remove('btn-white');
    libraryButtons[0].classList.add('btn-active');
    libraryButtons[0].classList.add('btn-orange');
    libraryButtons[1].classList.remove('btn-orange');
    libraryButtons[1].classList.remove('btn-active');
    libraryButtons[1].classList.add('btn-white');
  });

  libraryButtons[1].addEventListener('click', () => {
    libraryButtons[1].classList.remove('btn-white');
    libraryButtons[1].classList.add('btn-active');
    libraryButtons[1].classList.add('btn-orange');
    libraryButtons[0].classList.remove('btn-orange');
    libraryButtons[0].classList.remove('btn-active');
    libraryButtons[0].classList.add('btn-white');
  });
}

function addMoviesFromLocalstorage(movies) {
  getMovie.innerHTML = '';
  for (const movie of movies) {
    totalPagesStorage = (movies.length / 20).toFixed(0);
    let filmCategories = '';

    const tableOfCategories = movie.genres;
    const categories = tableOfCategories.map(category => category.name);
    filmCategories = categories.join(', ');
    /*zmiana formatu daty*/
    const date = new Date(movie.release_date);
    const releaseDate = date.getFullYear();
    getMovie.insertAdjacentHTML(
      'afterbegin',
      `<li data-modal-open data-film="${
        movie.id
      }"  style="list-style-type:none;">
        <div class="movie-container">
        <img class="movie-image" src=https://image.tmdb.org/t/p/w500/${
          movie.poster_path || movie.poster_path
        }>

        <p class="movie-title">${movie.name || movie.title}</p>
        <div id="movie-info">
        <p class="movie-categories">${filmCategories} | </p>
        <p class="year-of-release">${releaseDate}</p>
        </li>`
    );
  }
}
