import { API_KEY, getMovie, fetchDetails } from './fetch-to-main';
import { Spinner } from 'spin.js';
import { opts } from './asynchronic-loader-opts';
import {
  queueArray,
  watchedArray,
  addToWatched,
  addToQueue,
} from './add-to-queue-watched';
//modal//

const modal = document.querySelector('[data-modal]');

function toggleModal() {
  modal.classList.toggle('is-hidden');
}

getMovie.addEventListener('click', event => {
  const spinner = new Spinner(opts).spin(getMovie);
  if (event.target.tagName !== 'IMG') {
    return;
  }
  const divOfImg = event.target.parentNode;
  const liOfImg = divOfImg.parentNode;
  const filmId = liOfImg.dataset.film;

  let openModalBtn = document.querySelector(`[data-film="${filmId}"]`);
  console.log(openModalBtn);

  fetchDetails(filmId, API_KEY)
    .then(filmDetails => {
      console.log(filmDetails);
      let filmCategories = '';
      const popularity = filmDetails.popularity;
      const tableOfCategories = filmDetails.genres;
      const categories = tableOfCategories.map(category => category.name);
      filmCategories = categories.join(', ');
      console.log(popularity);
      modal.innerHTML = '';
      let markup = `
    <div class="modal">
      <button type="button" class="modal__close-btn" data-modal-close>&#10005</button>
      <div class="modal__img">
        <img class="modal__img-picture"
          src=https://image.tmdb.org/t/p/w500/${
            filmDetails.poster_path || filmDetails.poster_path
          }
          alt="obraz"/>
      </div>
      <div class="modal__content">
        <h2 class="modal__head"></h2>
        <ul class="modal__list">
          <li class="modal__item">
            <span class="modal__votes modal__parameters">Vote / Votes</span>
            <div class="modal_wrapper">
              <span class="modal__rating">${filmDetails.vote_average.toFixed(
                1
              )}</span> /
              <span class="modal__votes-number">${filmDetails.vote_count}</span>
            </div>
          </li>
          <li class="modal__item">
            <span class="modal__popularity modal__parameters">Popularity</span>
            <span class="modal__popularity-total">${popularity.toFixed(
              1
            )}</span>
          </li>
          <li class="modal__item">
            <span class="modal__title modal__parameters">Original Title</span>
            <span class="modal__title-original">${
              filmDetails.original_title
            }</span>
          </li>
          <li class="modal__item">
            <span class="modal__genre modal__parameters">Genre</span>
            <span class="modal__genre-description">${filmCategories}</span>
          </li>
        </ul>
  
        <p class="modal__about">About</p>
        <p class="modal__text">${filmDetails.overview}</p>
  
        <div class="modal__button-container">
          <button class="modal__button-watched modal__buttons" type="button">
            ADD TO WATCHED
          </button>
          <button class="modal__button-queue modal__buttons" type="button">
            ADD TO QUEUE
          </button>
        </div>
        </div>
      </div>`;
      modal.innerHTML += markup;
      toggleModal();

      spinner.stop();

      addToWatched(filmDetails);

      addToQueue(filmDetails);

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
});
