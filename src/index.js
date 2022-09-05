import carrousel from './carrousel';
import p1 from './assets/1.jpeg';
import p2 from './assets/2.jpeg';
import p3 from './assets/3.jpeg';
import p4 from './assets/4.jpeg';
import './styles/index.scss';

const images = [p1, p2, p3, p4];

const body = document.querySelector('body');
body.appendChild(carrousel(images));
