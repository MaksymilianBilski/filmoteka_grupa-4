/*działa! wersja w pętli!*/
/*wersja najlepsza*/
const API_KEY = `209b988e1e5a3c54f84bfbe290fdf3e2`;
let getMovie = document.getElementById(`movie-list`);
let totalPages;

async function fetchMovies(API_KEY) {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json().then(data => start(data));
}
fetchMovies(API_KEY);

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
          filmDetails.poster_path
        }>

        <p class="movie-title">${filmDetails.name || filmDetails.title}</p>
        <div id="movie-info">
        <p class="movie-categories">${filmCategories} | </p>
        <p class="year-of-release">${releaseDate}</p>
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

export { fetchMovies, start, fetchDetails, API_KEY, totalPages };
