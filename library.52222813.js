let e=document.getElementById("movie-list");fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${"209b988e1e5a3c54f84bfbe290fdf3e2"}`).then((e=>e.json())).then((t=>function(t){let n="",i=t,l=i.results;console.log(i.results);for(let e=0;e<l.length;e++)n+=`\n        <li> \n        <div class="movie-container">\n        <img class="movie-image" src=https://image.tmdb.org/t/p/w500/${l[e].poster_path}>\n        <p class="movie-title">${l[e].name||l[e].title}</p>\n        </div>\n        </li>`,console.log(l[e].name||l[e].title);e.innerHTML=n}(t)));
//# sourceMappingURL=library.52222813.js.map
