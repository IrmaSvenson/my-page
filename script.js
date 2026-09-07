function showImg() {
  const image = document.getElementById("img");
  image.src =
    "image2.jpg";
}

function hideImg() {
  const image = document.getElementById("img");
  image.src =
    "image1.jpg";
}

function init() {
  const image = document.getElementById("img");
  image.addEventListener("mouseover", showImg);
  image.addEventListener("mouseout", hideImg);
}

window.addEventListener("DOMContentLoaded", init);
