const quote = document.getElementById("quote");
const author = document.getElementById("author");
const url = "https://type.fit/api/quotes";

function randomNumgen(res) {
  const randomNum = Math.floor(Math.random() * 1643);
  // console.log(randomNum);
  quote.innerText = '"' + res[randomNum].text + '"';
  if (res[randomNum].author == null) {
    author.innerHTML = "<strong>Unknown</strong>";
  } else {
    author.innerHTML = "<strong>By " + res[randomNum].author + "</strong>";
  }
}

// function for loader while fetching data

function loader() {
  const preloader = document.querySelector(".loader");
  preloader.classList.toggle("d-none");
}
// Function For Fetching qoutes From API
async function quotesGenerator() {
  try {
    loader();
    let response = await fetch(url);
    let result = await response.json();
    loader();
    // console.log(result);
    // function for creating random Number for accessing data from response data
    randomNumgen(result);
  } catch (error) {
    console.log(error);
  }
}
quotesGenerator();
