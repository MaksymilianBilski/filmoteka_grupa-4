// import { page, renderPost, totalPages } from '';
// import { Notify } from 'notiflix';
page = 90;
totalPages = 100;

// leftArrow.addEventListener('click', pageForward);
// rightArrow.addEventListener('click', pageBackward);
const paginationBox = document.querySelector('.pagination');

for (let i = 0; i <= page; i++) {
  if (page > 5 && page < totalPages - 4) {
    for (let i = page + 2; i >= page - 2; i--) {
      paginationBox.insertAdjacentHTML(
        'afterbegin',
        `<button class="middlePagination">${i}</button>`
      );
    }
    return;
  }
  if (page >= totalPages - 4) {
    const middlePagination = document.querySelector('.middlePagination');
    middlePagination.insertAdjacentHTML('afterbegin', '...');
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

// export { page };
