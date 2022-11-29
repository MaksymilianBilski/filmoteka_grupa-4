import Notiflix from 'notiflix';

const letDetails = document.getElementById(`getDetails`);
console.log(letDetails);
letDetails.addEventListener(`click`, event => {
  Notiflix.Report.info(
    'Created by',
    'Maksymilian_Bilski: Team Leader Urszula_Molska:Scrum Master Dariusz_Kusnieruk:Developer Konrad_Wlodarczyk:Developer',
    'Close',
    function cb() {
      // callback
    },
    {
      width: '325px',
      svgSize: '0px',
    }
  );
});
