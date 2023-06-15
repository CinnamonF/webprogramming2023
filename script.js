function changeFontSize() {
  const pageContentElement = document.getElementById('pageContent');
  const currentFontSize = parseInt(window.getComputedStyle(pageContentElement).fontSize);
  const newFontSize = currentFontSize + 2;
  pageContentElement.style.fontSize = newFontSize + 'px';
}

function rotateElement() {
  const pageTitleElement = document.getElementById('pageTitle');
  pageTitleElement.classList.toggle('rotated');
}

function changeImage() {
  const imageElement = document.getElementById('image');
  if (imageElement.src.endsWith('wolf.png')) {
    imageElement.src = 'cat.png';
  } else {
    imageElement.src = 'wolf.png';
  }
}

document.getElementById('changeFontSizeButton').addEventListener('click', changeFontSize);
document.getElementById('rotateButton').addEventListener('click', rotateElement);
document.getElementById('changeImageButton').addEventListener('click', changeImage);
