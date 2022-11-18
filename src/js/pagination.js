// import { page, renderPost, totalPages } from '';
// import { Notify } from 'notiflix';
let page = 90;
let totalPages = 100;

const pagination = document.querySelector('.pagination');
const paginationBox = document.querySelector('.pagination-box');
const arrowLeft = document.querySelector('.arrowLeft');
const arrowRight = document.querySelector('.arrowRight');
let paginationButtons;
let actualPage;
paginationBox.style.display = 'flex';

arrowLeft.addEventListener('click', () => {
  pageBackward();
});
arrowRight.addEventListener('click', () => {
  pageForward();
});

function middleState() {
  if (page > 5 && page <= totalPages - 5) {
    pagination.insertAdjacentHTML('beforebegin', `<button>${1}</button>`);
    pagination.insertAdjacentHTML('beforebegin', `<span>...</span>`);
    pagination.insertAdjacentHTML('beforeend', `<span>...</span>`);
    pagination.insertAdjacentHTML(
      'beforeend',
      `<button>${totalPages}</button>`
    );
  }
  for (let i = 0; i <= page; i++) {
    if (page > 5 && page < totalPages - 4) {
      for (let i = page + 2; i >= page - 2; i--) {
        pagination.insertAdjacentHTML(
          'afterbegin',
          `<button class="pagination-button">${i}</button>`
        );
      }
      for (let i = 0; i <= pagination.children.length; i++) {
        actualPage = pagination.children[i + 2];
        return;
      }
      return;
    }
    // if (page >= totalPages - 4) {
    //   const paginationBtn = document.querySelector('.pagination-button');
    //   paginationBtn.insertAdjacentHTML('afterbegin', '...');
    // }
  }
}
middleState();

function pageForward() {
  page = totalPages;
  pagination.innerHTML = '';
  for (let i = totalPages; i >= totalPages - 4; i--) {
    pagination.insertAdjacentHTML(
      'afterbegin',
      `<button class="pagination-button">${i}</button>`
    );
  }
  arrowLeft.classList.remove('hidden');
  arrowRight.classList.add('hidden');
  paginationButtons = document.querySelectorAll('.pagination-button');
  for (let i = 0; i <= paginationButtons.length - 1; i++) {
    pagination.insertAdjacentHTML('afterbegin', `<span>...</span>`);
    pagination.insertAdjacentHTML('afterbegin', `<button>${1}</button>`);
    return;
  }
  // renderPost();
}

function pageBackward() {
  page = 1;
  pagination.innerHTML = '';
  for (let i = 5; i >= 1; i--) {
    pagination.insertAdjacentHTML(
      'afterbegin',
      `<button class="pagination-button">${i}</button>`
    );
  }
  arrowRight.classList.remove('hidden');
  arrowLeft.classList.add('hidden');
  paginationButtons = document.querySelectorAll('.pagination-button');
  for (let i = 0; i <= paginationButtons.length - 1; i++) {
    pagination.insertAdjacentHTML('beforeend', `<span>...</span>`);
    pagination.insertAdjacentHTML(
      'beforeend',
      `<button>${totalPages}</button>`
    );
    return;
  }
  // renderPost();
}

// export { page };
