const API_KEY =`209b988e1e5a3c54f84bfbe290fdf3e2`

fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
  .then((response) => response.json())
  .then((data) => console.log(data));

  