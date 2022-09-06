import carrousel from './carrousel';
import p1 from './assets/1.jpeg';
import p2 from './assets/2.jpeg';
import p3 from './assets/3.jpeg';
import p4 from './assets/4.jpeg';
import './styles/index.scss';

const images = [p1, p2, p3, p4];

function arangeInRow(images, size) {
  images.forEach((image, index) => {
    image.style.left = `${size * index}px`;
  });
}

function slideImage(currentImage, targetImage, track) {
  const amountToMove = targetImage.style.left;
  
  track.style.transform = `translateX(-${amountToMove})`;

  currentImage.classList.remove('current-image');
  targetImage.classList.add('current-image');
}

function activate() {
  const content = document.querySelector('.carrousel');
  const bLeft = content.querySelector('.left-button');
  const bRight = content.querySelector('.right-button');
  const track = content.querySelector('.carrousel-track');
  const images = Array.from(content.querySelectorAll('.carrousel-slide'));
  const indicators = content.querySelectorAll('.carrousel-indicator');
  const width = images[0].getBoundingClientRect().width;
  
  arangeInRow(images, width);
  bRight.addEventListener('click', () => {
    const currentImage = track.querySelector('.current-image');
    const nextImage = currentImage.nextElementSibling;

    slideImage(currentImage, nextImage, track);
  });

  bLeft.addEventListener('click', () => {
    const currentImage = track.querySelector('.current-image');
    const previousImage = currentImage.previousElementSibling;

    slideImage(currentImage, previousImage, track);
  });
}

const body = document.querySelector('body');
body.appendChild(carrousel(images));
activate();
