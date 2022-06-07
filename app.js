const img = document.querySelector("img");
const button = document.querySelector("button");

function newImage() {
  fetch(
    "  https://api.giphy.com/v1/gifs/translate?api_key=3n1VXMFtLfMuWdnG0X18fngmTgHIoh6n&s=cats",
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    });
}

window.onload = newImage();

button.addEventListener("click", (e) => {
  newImage();
});
