const key = "ce762116";

const changeForm = document.getElementById("c");
const input = document.getElementById("inp");
const sign = document.getElementById("sign");
const list = document.querySelector(".promo-list");
const notF = document.querySelector(".divo");




const updateUI = (movies) => {
  console.log(movies);
  // input.value = "";
  movies?.Search?.forEach((movie) => {
    console.log(movie);
    list.innerHTML += ` <li class="promo-item">
        <img src="${movie.Poster}" alt="Movie photo" height="400" width="290">
        <h2 class="item-title">
          ${movie.Title}
        </h2>
        <p class="text-year">"Year": <span class="sp">${movie.Year}</span></p>
        <p class="text">Movie</p>
        <a class="item-text" href=${`../page.html` + `?${movie.imdbID}`}>Read More</a>
      </li>`;
  });
};

const notFound = (e) => {
notF.innerHTML = `
<h1 class="ttt"> 
        NOT FOUND
        </h1>

        <p>Error
          : 
          "Request not found!"
          Response: 
          "False"</p>

`
}


const getData = async (name) => {
  const one = "https://www.omdbapi.com/";
  const twen = `?s=${name}&apikey=${key}`;

  const req = await fetch(one + twen);
  const data = await req.json();
  //   loader(false)

  return data;
};

changeForm[`inp`].addEventListener(`input`, () => {
  let inputValue = changeForm[`inp`].value;
  getData(inputValue)
    .then((data) => updateUI(data))
    .catch((err) => notFound(err.massage));
});
