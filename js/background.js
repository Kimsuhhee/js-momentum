const images = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg",
  "image5.jpg",
  "image6.jpg",
];

const randNum = Math.floor(Math.random() * images.length);
const img = document.createElement("img");
img.src = `images/${images[randNum]}`;
document.body.appendChild(img);
