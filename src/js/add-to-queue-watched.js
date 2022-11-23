const queueBtn = document.querySelector(".btn-queue");
const watchedBtn = document.querySelector(".btn-watched");
let queueArray=[];
let watchedArray=[]; 

watchedBtn.addEventListener('click',() =>{  
    let movieID=101010;
    watchedArray.push(movieID);
console.log("dupaduap");
    
    localStorage.setItem('wached', JSON.stringify(watchedArray))})



  

function addToWatched() {
}
