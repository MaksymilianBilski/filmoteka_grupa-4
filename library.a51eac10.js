!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},o=n.parcelRequire3e4d;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,n){a[e]=n},n.parcelRequire3e4d=o),o("ljA1m");var s=o("eZ7d6"),l=o("2TvXO"),i=o("b62ED"),r=o("85mSR"),d=o("ipPc5"),c=document.getElementById("movie-list-library"),u=document.querySelector("[data-modal]");function p(){return(p=e(s)(e(l).mark((function n(t,a){var o,s;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(a));case 2:if((o=e.sent).ok){e.next=5;break}throw new Error(o.statusText);case 5:return e.next=7,o.json();case 7:return s=e.sent,e.abrupt("return",s);case 9:case"end":return e.stop()}}),n)})))).apply(this,arguments)}c.addEventListener("click",(function(e){var n=new(0,i.Spinner)(r.opts).spin(c);if("IMG"===e.target.tagName){var t=e.target.parentNode.parentNode.dataset.film;document.querySelector('[data-film="'.concat(t,'"]'));(function(e,n){return p.apply(this,arguments)})(t,"209b988e1e5a3c54f84bfbe290fdf3e2").then((function(e){var t,a=e.popularity;t=e.genres.map((function(e){return e.name})).join(", "),u.innerHTML="";var o='\n    <div class="modal">\n      <button type="button" class="modal__close-btn" data-modal-close>&#10005</button>\n      <div class="modal__img">\n        <img class="modal__img-picture"\n          src=https://image.tmdb.org/t/p/w500/'.concat(e.poster_path||e.poster_path,'\n          alt="obraz"/>\n      </div>\n      <div class="modal__content">\n        <h2 class="modal__head"></h2>\n        <ul class="modal__list">\n          <li class="modal__item">\n            <span class="modal__votes modal__parameters">Vote / Votes</span>\n            <div class="modal_wrapper">\n              <span class="modal__rating">').concat(e.vote_average.toFixed(1),'</span> /\n              <span class="modal__votes-number">').concat(e.vote_count,'</span>\n            </div>\n          </li>\n          <li class="modal__item">\n            <span class="modal__popularity modal__parameters">Popularity</span>\n            <span class="modal__popularity-total">').concat(a.toFixed(1),'</span>\n          </li>\n          <li class="modal__item">\n            <span class="modal__title modal__parameters">Original Title</span>\n            <span class="modal__title-original">').concat(e.original_title,'</span>\n          </li>\n          <li class="modal__item">\n            <span class="modal__genre modal__parameters">Genre</span>\n            <span class="modal__genre-description">').concat(t,'</span>\n          </li>\n        </ul>\n  \n        <p class="modal__about">About</p>\n        <p class="modal__text">').concat(e.overview,'</p>\n  \n        <div class="modal__button-container">\n          <button class="modal__button-watched modal__buttons" type="button">\n            ADD TO WATCHED\n          </button>\n          <button class="modal__button-queue modal__buttons" type="button">\n            ADD TO QUEUE\n          </button>\n        </div>\n        </div>\n      </div>');u.innerHTML+=o,u.classList.toggle("is-hidden"),n.stop(),(0,d.addToWatched)(e),(0,d.addToQueue)(e),document.querySelector("[data-modal-close]").addEventListener("click",(function(){u.classList.add("is-hidden")})),document.addEventListener("keydown",(function(e){"Escape"===e.key&&u.classList.add("is-hidden")}))})).catch((function(e){return console.log(e)}))}else n.stop()}));var _=o("iU1Pc");document.getElementById("getDetails").addEventListener("click",(function(n){e(_).Report.info("Created by","Maksymilian_Bilski: Team Leader Urszula_Molska:Scrum Master Dariusz_Kusnieruk:Developer Konrad_Wlodarczyk:Developer","Close",(function(){}),{width:"325px",svgSize:"0px"})})),o("ljA1m")}();
//# sourceMappingURL=library.a51eac10.js.map
