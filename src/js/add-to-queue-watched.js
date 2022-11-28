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
      console.log('added to queue');
    }
    if (parsedQueued !== null) {
      queueArray = parsedQueued;
      if (parsedQueued.find(film => film.id === filmDetails.id)) {
        return Notify.info('This film is already in queue');
      } else {
        queueArray.push(filmDetails);
        localStorage.setItem('queued', JSON.stringify(queueArray));
        console.log('added to queue');
        //console.log(queueArray);
      }
    }
    savedQueued = localStorage.getItem('queued');
    parsedQueued = JSON.parse(savedQueued);
    console.log('updated local storage');
    console.log(parsedQueued);
    //console.log(queueArray);
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
      console.log('added to watched');
    }
    if (parsedWatched !== null) {
      watchedArray = parsedWatched;
      if (parsedWatched.find(film => film.id === filmDetails.id)) {
        return Notify.info('This film is already in watched');
      } else {
        watchedArray.push(filmDetails);
        localStorage.setItem('watched', JSON.stringify(watchedArray));
        console.log('added to watched');
        //console.log(watchedArray);
      }
    }
    savedWatched = localStorage.getItem('watched');
    parsedWatched = JSON.parse(savedWatched);
    console.log('updated local storage');
    console.log(parsedWatched);
    //console.log(watchedArray);
  });
};

export { queueArray, watchedArray, addToWatched, addToQueue };
