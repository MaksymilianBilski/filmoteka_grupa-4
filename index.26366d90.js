!function(){var t,n=90,e=100,o=document.querySelector(".pagination"),a=document.querySelector(".pagination-box"),r=document.querySelector(".arrowLeft"),i=document.querySelector(".arrowRight");a.style.display="flex",r.addEventListener("click",(function(){!function(){n=1,o.innerHTML="";for(var a=5;a>=1;a--)o.insertAdjacentHTML("afterbegin",'<button class="pagination-button">'.concat(a,"</button>"));i.classList.remove("hidden"),r.classList.add("hidden"),t=document.querySelectorAll(".pagination-button");for(var c=0;c<=t.length-1;c++)return o.insertAdjacentHTML("beforeend","<span>...</span>"),void o.insertAdjacentHTML("beforeend","<button>".concat(e,"</button>"))}()})),i.addEventListener("click",(function(){!function(){n=e,o.innerHTML="";for(var a=e;a>=96;a--)o.insertAdjacentHTML("afterbegin",'<button class="pagination-button">'.concat(a,"</button>"));r.classList.remove("hidden"),i.classList.add("hidden"),t=document.querySelectorAll(".pagination-button");for(var c=0;c<=t.length-1;c++)return o.insertAdjacentHTML("afterbegin","<span>...</span>"),void o.insertAdjacentHTML("afterbegin","<button>".concat(1,"</button>"))}()})),function(){for(var t=0;t<=n;t++)if(n>5&&n<96){for(var e=n+2;e>=n-2;e--)o.insertAdjacentHTML("afterbegin",'<button class="pagination-button">'.concat(e,"</button>"));return}}()}();
//# sourceMappingURL=index.26366d90.js.map
