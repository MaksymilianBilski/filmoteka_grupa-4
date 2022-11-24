const API_KEY = `209b988e1e5a3c54f84bfbe290fdf3e2`;
let getMovie = document.getElementById(`movie-list`);
function fetchMovies(API_KEY) {
  fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => start(data));
}
fetchMovies(API_KEY);
let options = '';

function start(fetchMovies) {
  let moviez = '';
  let movies = fetchMovies;
  movieIndex = movies.results;
  console.log(movies.results);
  for (i = 0; i < movieIndex.length; i++) {
    moviez += `
        <li> 
        <div class="movie-container">
        <img class="movie-image" src=https://image.tmdb.org/t/p/w500/${
          movieIndex[i].poster_path
        }>
<<<<<<< Updated upstream
        <p class="movie-title">${movieIndex[i].name || movieIndex[i].title}</p>
=======

        <p class="movie-title">${filmDetails.name || filmDetails.title}</p>
        <div id="movie-info">
        <p class="movie-categories">${filmCategories} </p>
        <p class="year-of-release">|${releaseDate}</p>
        </div>

>>>>>>> Stashed changes
        </div>
        </li>`;
    console.log(movieIndex[i].name || movieIndex[i].title);
  }
  getMovie.innerHTML = moviez;
}
