const queueBtn = document.querySelector('.btn-queue');
const watchedBtn = document.querySelector('.btn-watched');

let queueArray = [];
let watchedArray = [];

// obrałem to w funkcje, bo przed otworzeniem modala, button jeszcze nie istnieje i wywala błąd
function test() {
  if (watchedBtn !== null) {
    watchedBtn.addEventListener('click', () => {
      let movieID = 101010;
      watchedArray.push(movieID);
      console.log('dupaduap');

      localStorage.setItem('wached', JSON.stringify(watchedArray));
    });
  } else return;
}
test();

function addToWatched() {}
