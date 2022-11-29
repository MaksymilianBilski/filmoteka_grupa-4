import { async } from 'regenerator-runtime';
import { Spinner } from 'spin.js';
import Notiflix from 'notiflix';
import { opts } from './asynchronic-loader-opts';
const API_KEY = `209b988e1e5a3c54f84bfbe290fdf3e2`;
let getMovie = document.getElementById(`movie-list`);
//for pagination: amount of all pages, and time needed to fetch one page(timeDifference)
let totalPages;
let time1;
let time2;
let timeDifference = 1000;
fetchMovies(API_KEY);
async function fetchMovies(API_KEY) {
  time1 = new Date().getTime();
  const spinner = new Spinner(opts).spin(getMovie);
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json().then(data => {
    start(data);
  });
  spinner.stop();
  time2 = new Date().getTime();
  timeDifference = time2 - time1;
}
function start(movies) {
  for (const movie of movies.results) {
    totalPages = movies.total_pages;
    let filmCategories = '';
    fetchDetails(movie.id, API_KEY).then(filmDetails => {
      /*tablica kategorii filmów*/
      const tableOfCategories = filmDetails.genres;
      const categories = tableOfCategories.map(category => category.name);
      filmCategories = categories.join(', ');
      /*zmiana formatu daty*/
      const date = new Date(filmDetails.release_date);
      const releaseDate = date.getFullYear();
      // console.log(filmDetails);
      // console.log(typeof releaseDate);
      getMovie.insertAdjacentHTML(
        'afterbegin',
        `<li data-film="${filmDetails.id}" style="list-style-type:none;">
        <div class="movie-container">
        <img class="movie-image" src=https://image.tmdb.org/t/p/w500/${
          filmDetails.poster_path || filmDetails.poster_path
        }
        onerror="this.onerror=null;this.src='https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg';"
        >
        <p class="movie-title">${filmDetails.name || filmDetails.title}</p>
        <div id="movie-info">
        <p class="movie-categories">${filmCategories || 'No category info'} </p>
        <p class="year-of-release">|${releaseDate || 'Unknown'}</p>
        </div>
        </div>
        </li>`
      );
    });
  }
}
async function fetchDetails(filmId, API_KEY) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${filmId}?api_key=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const filmDetails = await response.json();
  return filmDetails;
}
export {
  fetchMovies,
  start,
  fetchDetails,
  getMovie,
  API_KEY,
  totalPages,
  timeDifference,
};

const letDetails = document.getElementById(`getDetails`)
console.log(letDetails);
letDetails.addEventListener(`click`, event=>{
  Notiflix.Report.info(
    'Created by',
    'Maksymilian_Bilski: Team Leader Urszula_Molska:Scrum Master Dariusz_Kusnieruk:Developer Konrad_Wlodarczyk:Developer',
    'Close',
    function cb() {
      // callback
    },
    {
      width: '325px',
      svgSize: '0px',
    },
  );
})

