const images = ["Tower1.jpg", "Asakusa.jpg", "Atami.jpg"]; // 이미지 배열 선언

const imageContainer = document.querySelector(".image-container");
const changeImageButton = document.getElementById("changeImageButton");
const screenshotImage1 = document.querySelector("img[src='Screenshot1.jpg']");
const screenshotImage2 = document.querySelector("img[src='Screenshot2.jpg']");

let currentIndex = 0;

changeImageButton.addEventListener("click", function() {
  currentIndex = (currentIndex + 1) % images.length; // 배열의 길이를 활용하여 인덱스 순환

  const imageUrl = images[currentIndex];
  const imageElement = document.createElement("img");
  imageElement.src = imageUrl;
  imageElement.alt = "Tower image";
  imageElement.style.width = "350px";
  imageElement.style.height = "350px";

  while (imageContainer.firstChild) {
    imageContainer.firstChild.remove();
  }

  imageContainer.appendChild(imageElement);
});

function goToSite(url) {
  window.location.href = url; // 링크 주소로 이동
}
