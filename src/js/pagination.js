// import { page, renderPost, totalPages } from '';
// import { Notify } from 'notiflix';
page = 10;
totalPages = 100;

// leftArrow.addEventListener('click', pageForward);
// rightArrow.addEventListener('click', pageBackward);
const paginationBox = document.querySelector('header');

for (let i = 0; i <= page; i++) {
  if (page > 3 && page < totalPages - 2) {
    for (let i = page+2; i >= page-2; i++) {
      paginationBox.insertAdjacentHTML('afterbegin', `<button>${i}</button>`);
      if (i === 0) return;
    }
  }
}

function pageForward() {
  page = totalPages;
  rightArrow.classList.add('hidden');
  renderPost();
}

function pageBackward() {
  page = 1;
  leftArrow.classList.add('hidden');
  renderPost();
}

export { page };
