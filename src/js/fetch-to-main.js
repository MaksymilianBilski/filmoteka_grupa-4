const API_KEY = `209b988e1e5a3c54f84bfbe290fdf3e2`;
let getMovie = document.getElementById(`movie-list`);
<<<<<<< Updated upstream
function fetchMovies(API_KEY) {
  fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => start(data));
}
fetchMovies(API_KEY);
let options = '';
=======
//for pagination: amount of all pages, and time needed to fetch one page(timeDifference)
let totalPages;
let time1;
let time2;
let timeDifference = 1000;

async function fetchMovies(API_KEY) {
  time1 = new Date().getTime();
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json().then(data => start(data));
  
  time2 = new Date().getTime();
  timeDifference = time2 - time1;
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
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
<<<<<<< Updated upstream
          movieIndex[i].poster_path
        }>
<<<<<<< Updated upstream
        <p class="movie-title">${movieIndex[i].name || movieIndex[i].title}</p>
=======
=======
          filmDetails.poster_path || filmDetails.poster_path
          
        } onerror=img.src=null ;this.src=/images/poster.png>
        
>>>>>>> Stashed changes

        <p class="movie-title">${filmDetails.name || filmDetails.title}</p>
        <div id="movie-info">
        <p class="movie-categories">${filmCategories} </p>
        <p class="year-of-release">|${releaseDate}</p>
=======
          filmDetails.poster_path || filmDetails.poster_path}
          onerror="this.onerror=null;this.src='https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg';" 
        >

        <p class="movie-title">${filmDetails.name || filmDetails.title}</p>
        <div id="movie-info">
        <p class="movie-categories">${filmCategories}</p>
        <p class="year-of-release">|${releaseDate}</p>
        </div>
>>>>>>> Stashed changes
        </div>

>>>>>>> Stashed changes
        </div>
        </li>`;
    console.log(movieIndex[i].name || movieIndex[i].title);
  }
  getMovie.innerHTML = moviez;
}
