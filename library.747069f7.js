let e=document.getElementById("movie-list");fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${"209b988e1e5a3c54f84bfbe290fdf3e2"}`).then((e=>e.json())).then((t=>function(t){let n="",l=t,o=l.results;for(console.log(l.results),i=0;i<o.length;i++)n+=`\n        <li> \n        <div class="movie-container">\n        <img class="movie-image" src=https://image.tmdb.org/t/p/w500/${o[i].poster_path}>\n        <p class="movie-title">${o[i].name||o[i].title}</p>\n        </div>\n        </li>`,console.log(o[i].name||o[i].title);e.innerHTML=n}(t)));
//# sourceMappingURL=library.747069f7.js.map
