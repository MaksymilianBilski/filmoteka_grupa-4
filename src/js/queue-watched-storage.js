import { modalHTML, modal, toggleModal } from './modal';
import { Spinner } from 'spin.js';
import {
  queueArray,
  watchedArray,
  addToWatched,
  addToQueue,
} from './add-to-queue-watched';

const queueBtn = document.getElementById('btn-queue');
const watchedBtn = document.getElementById('btn-watched');
let savedQueued = localStorage.getItem('queued');
let parsedQueued = JSON.parse(savedQueued);
let savedWatched = localStorage.getItem('watched');
let parsedWatched = JSON.parse(savedWatched);
const getMovie = document.getElementById('movie-list');

console.log(queueBtn);
//Queue
queueBtn.addEventListener('click', () => {
  addMoviesFromLocalstorage(parsedQueued);
  console.log('hurra');
  console.log(parsedQueued);
});

//Watched
watchedBtn.addEventListener('click', () => {
  addMoviesFromLocalstorage(parsedWatched);
  console.log('hurra');
  console.log(parsedWatched);
});

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

function addMoviesFromLocalstorage(movies) {
  getMovie.innerHTML = '';
  for (const movie of movies) {
    totalPages = movies.total_pages;
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
