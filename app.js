const img = document.querySelector("img");
const button = document.querySelector("button");
const inputText = document.querySelector("#gifput");

let sendText = "";

function newImage(gif) {
  fetch(
    `  https://api.giphy.com/v1/gifs/translate?api_key=3n1VXMFtLfMuWdnG0X18fngmTgHIoh6n&s=${gif}`,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    });
}

window.onload = newImage("cats");

inputText.addEventListener("change", function onSelect(e) {
  sendText = inputText.value;
});

button.addEventListener("click", (e) => {
  newImage(sendText);
});
