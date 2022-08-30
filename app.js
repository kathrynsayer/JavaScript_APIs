"use strict";
console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const GIPHY_URL = "https://api.giphy.com/v1/gifs/translate";
const GIPHY_KEY = "x9aS8zVp9Nnq4LrTGUcuS2QnLa0BsGeU";

let feedbackEle = document.querySelector("#feedback");
let searchInput = document.querySelector("#searchWord");
let searchButton = document.querySelector("#submitSearch");
let gifEle = document.querySelector("#imageContainer > img");


searchButton.addEventListener("click", (event) => {

    fetch(`${GIPHY_URL}?api_key=${GIPHY_KEY}&s=${searchInput.value}`)
    .then((res) => res.json())
    .then((body) => {
    gifEle.src = body.data.images.original.url;
})
    .catch((err) => {
        console.error(err);
        feedbackEle.textContent = err.message;
    });

});
