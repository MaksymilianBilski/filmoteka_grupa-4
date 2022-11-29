import { Notify } from 'notiflix/build/notiflix-notify-aio';

let watchedArray = [];
let queueArray = [];

/*to queue*/
const addToQueue = filmDetails => {
  const queueBtn = document.querySelector('.modal__button-queue');
  let savedQueued = localStorage.getItem('queued');
  let parsedQueued = JSON.parse(savedQueued);

  queueBtn.addEventListener('click', () => {
    if (parsedQueued === null || undefined) {
      queueArray.push(filmDetails);
      localStorage.setItem('queued', JSON.stringify(queueArray));
    }
    if (parsedQueued !== null) {
      queueArray = parsedQueued;
      if (parsedQueued.find(film => film.id === filmDetails.id)) {
        return Notify.info('This film is already in queue');
      } else {
        queueArray.push(filmDetails);
        localStorage.setItem('queued', JSON.stringify(queueArray));
      }
    }
    savedQueued = localStorage.getItem('queued');
    parsedQueued = JSON.parse(savedQueued);
  });
};

/*to watched*/
const addToWatched = filmDetails => {
  const watchedBtn = document.querySelector('.modal__button-watched');
  let savedWatched = localStorage.getItem('watched');
  let parsedWatched = JSON.parse(savedWatched);

  watchedBtn.addEventListener('click', () => {
    if (parsedWatched === null || undefined) {
      watchedArray.push(filmDetails);
      localStorage.setItem('watched', JSON.stringify(watchedArray));
    }
    if (parsedWatched !== null) {
      watchedArray = parsedWatched;
      if (parsedWatched.find(film => film.id === filmDetails.id)) {
        return Notify.info('This film is already in watched');
      } else {
        watchedArray.push(filmDetails);
        localStorage.setItem('watched', JSON.stringify(watchedArray));
      }
    }
    savedWatched = localStorage.getItem('watched');
    parsedWatched = JSON.parse(savedWatched);
  });
};

export { queueArray, watchedArray, addToWatched, addToQueue };
