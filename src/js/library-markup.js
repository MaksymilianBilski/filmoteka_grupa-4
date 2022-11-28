const watchedBtn = document.getElementById('btn-watched');
const queueBtn = document.getElementById('btn-queue');

function changeActiveQueueBtn() {
  queueBtn.classList.replace('btn-orange', 'btn-white');
  queueBtn.classList.remove('btn-active');

  watchedBtn.classList.replace('btn-white', 'btn-orange');
  watchedBtn.classList.add('btn-active');
}

function changeActiveWachedBtn() {
  queueBtn.classList.replace('btn-orange', 'btn-white');
  queueBtn.classList.remove('btn-active');

  watchedBtn.classList.replace('btn-white', 'btn-orange');
  watchedBtn.classList.add('btn-active');
}


if (watchedBtn !== null) {
  watchedBtn.addEventListener('click', changeActiveWachedBtn());
}
if (queueBtn !== null) {
  queueBtn.addEventListener('click', changeActiveQueueBtn());
}

