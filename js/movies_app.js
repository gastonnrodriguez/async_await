//Movies code
//http://www.omdbapi.com/?s=batman&type=movie&apikey=6055c7b
const movies_apikey = "6055c7b";
const movies_type = "movie";
const movies_url = `http://www.omdbapi.com/?apikey=${movies_apikey}&type=${movies_type}&s=`;

const query = document.getElementById("query");

query.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    getMovies();
  }
});

const emptyDeck = () => {
  let deck = document.querySelectorAll("div.movieCard");
  console.log(`DECK ${deck}`);
  if (deck.length>0) {
    deck.forEach((card) => {
      card.remove();
      console.log('borrado');
    });
  }

  let errors = document.querySelectorAll("h1.error");
  if(errors.length>0){
      errors.forEach((error)=>{
          error.remove();
      });
  }

};
const getError = (msg) => {
  const message = document.createElement("h1");
  message.classList.add("error");
  message.innerText = msg;
  moviesDeck.appendChild(message);
};

const getMovies = async () => {
  try {
    
    const response = await fetch(movies_url + query.value);
    const result = await response.json();
    const moviesDeck = document.getElementById("moviesDeck");
    if (result.Response === "False") {
      getError(result.Error);
    } else
    emptyDeck();
      result.Search.forEach((movie) => {
        //creating card
        const card = document.createElement("div");
        card.classList.add("movieCard");
        //adding poster
        const poster = document.createElement("img");
        poster.src = movie.Poster;
        card.appendChild(poster);
        //Adding Title and Year
        const cardText = document.createElement("div");
        cardText.classList.add("info");
        const title = document.createElement("h2");
        const year = document.createElement("h4");
        title.innerHTML = movie.Title;
        year.innerHTML = movie.Year;
        cardText.appendChild(title);
        cardText.appendChild(year);
        card.appendChild(cardText);
        //adding movie card to deck
        moviesDeck.appendChild(card);
      });
  } catch (error) {
    console.log(error);
    getError(error);
  }
};
