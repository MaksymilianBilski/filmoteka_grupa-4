import { modalHTML, modal, toggleModal } from './modal';
import { Spinner } from 'spin.js';
import {
  queueArray,
  watchedArray,
  addToWatched,
  addToQueue,
} from './add-to-queue-watched';

const libraryButtons = document.querySelectorAll('.btn');
const queueBtn = document.getElementById('btn-queue');
const watchedBtn = document.getElementById('btn-watched');
let savedQueued = localStorage.getItem('queued');
let parsedQueued = JSON.parse(savedQueued);
let savedWatched = localStorage.getItem('watched');
let parsedWatched = JSON.parse(savedWatched);
const getMovie = document.getElementById('movie-list');
let totalPagesStorage;
let queue;
let watched;

//Queue

if (queueBtn !== null) {
  queueBtn.addEventListener('click', () => {
    if (parsedQueued !== null) {
      addMoviesFromLocalstorage(parsedQueued);
      console.log('hurra parsedQueued');
      console.log(parsedQueued);
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
      console.log('hurra parsedWatched');
      console.log(parsedWatched);
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
    //console.log(movie);
    //console.log(typeof releaseDate);

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

/*//modal dla queue
  getMovie
    .addEventListener('click', event => {
      const spinner = new Spinner(opts).spin(getMovie);
      if (event.target.tagName !== 'IMG') {
        return;
      }
      const divOfImg = event.target.parentNode;
      const liOfImg = divOfImg.parentNode;
      const filmId = liOfImg.dataset.film;
      const film = parsedQueued.find(film => film.id === filmId);

      let openModalBtn = document.querySelector(`[data-film="${filmId}"]`);
      console.log(openModalBtn);

      modalHTML(film);
      toggleModal();

      spinner.stop();

      addToWatched(filmDetails);

      addToQueue(filmDetails);

      /*closing modal 
      const closeModalBtn = document.querySelector('[data-modal-close]');

      closeModalBtn.addEventListener('click', () => {
        modal.classList.add('is-hidden');
      });
      document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
          modal.classList.add('is-hidden');
        }
      });
    })
    .catch(error => console.log(error));
});*/
export { totalPagesStorage };
