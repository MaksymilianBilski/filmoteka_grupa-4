let queueArray = [];
let watchedArray = [];

/*to queue*/
const addToQueue = filmDetails => {
  const queueBtn = document.querySelector('.modal__button-queue');
  queueBtn.addEventListener('click', () => {
    queueArray.push(filmDetails);
    localStorage.setItem('qued', JSON.stringify(queueArray));
    console.log('added to queue');
    console.log(queueArray);
  });
};
/*to watched*/
const addToWatched = filmDetails => {
  const watchedBtn = document.querySelector('.modal__button-watched');
  watchedBtn.addEventListener('click', () => {
    watchedArray.push(filmDetails);
    localStorage.setItem('watched', JSON.stringify(watchedArray));
    console.log('added to watched');
    console.log(watchedArray);
  });
};
export { queueArray, watchedArray, addToWatched, addToQueue };
