const img = document.querySelector("img");
const button = document.querySelector("button");
const inputText = document.querySelector("#gifput");

let sendText = "";

async function getCats(gif) {
  const response = await fetch(
    `  https://api.giphy.com/v1/gifs/translate?api_key=3n1VXMFtLfMuWdnG0X18fngmTgHIoh6n&s=${gif}`,
    { mode: "cors" }
  );
  const catData = await response.json();
  img.src = catData.data.images.original.url;
}

window.onload = getCats("cats");

inputText.addEventListener("change", function onSelect(e) {
  sendText = inputText.value;
});

button.addEventListener("click", (e) => {
  getCats(sendText);
});
