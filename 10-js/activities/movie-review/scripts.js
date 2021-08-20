const inputTitle = document.querySelector('#title');
const inputYear = document.querySelector('#year');
const inputReview = document.querySelector('#review');
const btnSubmit = document.querySelector('#btnSubmit');
const btnDisplay = document.querySelector('#btnDisplay');
const movieReviewDisplay = document.querySelector('#movieReviewDisplay');

let movieReviews = [];
const addMovieReview = e => {
  e.preventDefault();
  let movieReview = {
    id: Date.now(),
    title: inputTitle.value,
    year: inputYear.value,
    review: inputReview.value,
  };

  movieReviews.push(movieReview);
  document.querySelector('form').reset();
  console.table(movieReviews);

  // let displayMovie = document.querySelector('#movieReviewDisplay');
  // displayMovie.innerHTML = JSON.stringify(movieReviews, null, 2);
  localStorage.setItem('movieReviews', JSON.stringify(movieReviews));
};

document.addEventListener('DOMContentLoaded', () => {
  btnSubmit.addEventListener('click', addMovieReview);
  btnDisplay.addEventListener('click', displayMovieReview);
});

const displayMovieReview = e => {
  e.preventDefault();
  let arr1 = new Array();
  arr1 = JSON.parse(localStorage.getItem('movieReviews'));
  // alert(arr1.length);

  let table = movieReviewDisplay;
  // for (let i = 0; i < arr1.length; i++) {
  for (let i in arr1) {
    let row = table.insertRow();
    let td1 = row.insertCell();
    let td2 = row.insertCell();
    let td3 = row.insertCell();
    let td4 = row.insertCell();

    td1.innerHTML = arr1[i].id;
    td2.innerHTML = arr1[i].title;
    td3.innerHTML = arr1[i].year;
    td4.innerHTML = arr1[i].review;
  }

  // localStorage.clear();
  // movieReviews.length = 0;
};
