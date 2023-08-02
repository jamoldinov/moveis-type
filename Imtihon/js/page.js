const key = "ce762116";


const qurey = window.location.search
const id = qurey.slice(1);



const changeForm = document.getElementById("c");
const input = document.getElementById("inp");
const desc = document.getElementById("desc");
const imdbID = document.getElementById("imdbID");
const list = document.querySelector(".promo-list");
const notF = document.querySelector(".divo");

imdbID.textContent = id
const updateUI = (movie) => {
    console.log(movie);
    desc.innerHTML = `
    <img
            src="${movie.Poster}"
            alt="Movei Image"
            class="pg-img"
          />
          <div class="desc-little">
            <h3 class="little-title">Title: <span>${movie.Title}</span></h3>
            <p class="little-year">Released: <span>${movie.Released}</span></p>
            <p class="little-year">Runtime: <span>${movie.Runtime}</span></p>
            <p class="little-year">
              Genre: <span>${movie.Genre}</span>
            </p>
            <p class="little-year">Director: <span>${movie.Director}</span></p>
            <p class="little-year">
              Writer: <span>${movie.Writer}</span>
            </p>
            <p class="little-year">Language: <span>${movie.Language}</span></p>
            <p class="little-year">
              Country: <span>${movie.Country}</span>
            </p>
            <p class="little-year">imdbRating: <span>${movie.imdbRating}</span></p>
            <p class="little-year">BoxOffice: <span>${movie.BoxOffice}</span></p>
            <p class="little-year">
              Plot:
              <span
                >${movie.Plot}.</span
              >
            </p>
          </div>
    
    `;
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


const getData = async () => {
  const one = "https://www.omdbapi.com/";
  const twen = `?i=${id}&apikey=${key}`;

  const req = await fetch(one + twen);
  const data = await req.json();
  //   loader(false)
console.log(data);
  return data;
};
getData()
  .then((data) => console.log(data))
  .catch((err) => notFound(err.massage));

// changeForm[`inp`].addEventListener(`input`, () => {
//   let inputValue = changeForm[`inp`].value;
// });
