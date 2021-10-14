//apikeys
const giphy_apikey = "qvLoB4IiXRKxSnDhXowDxCoMHcDNs9nF";

//Cats & Giphy code

const cats_url = "https://catfact.ninja/fact";
const giphy_query = "cats";
const giphy_limit = 20;
const giphy_url = `https://api.giphy.com/v1/gifs/search?api_key=${giphy_apikey}&limit=${giphy_limit}&q=${giphy_query}`;
const fact = document.getElementById("fact");
const gif = document.getElementById("gif");

const getFact = async () => {
  try {
    const response = await fetch(cats_url);
    const result = await response.json();
    console.log(result.fact);
    fact.innerText = result.fact;
  } catch (error) {
    console.log(error);
  }
};

const  getRandomNumber = giphy_limit => {
    return Math.floor(Math.random() * giphy_limit);
  }

const getGif = async () => {
  try {
    const response = await fetch(giphy_url);
    const result = await response.json();
    const gif = document.getElementById("gif");
    gif.src = result.data[getRandomNumber(giphy_limit)].images.downsized_medium.url;   
  } catch (error) {
    console.log(error);
  }
};

const getRandomBackground = () => {
    color = "hsl(" + Math.random() * 360 + ", 100%, 75%)";
    const body = document.getElementById("body");
    body.style.background = color;
  }


const getMedia = () => {
  getFact();
  getGif();
  getRandomBackground();
};

