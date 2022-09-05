function createImageList(list) {
  const ul = document.createElement('ul');
  ul.classList.add('carrousel-track');

  // Iterate through the images and add them to the carrousel
  list.forEach((pic) => {
    const li = document.createElement('li');
    li.classList.add('carrousel-slide');
    const image = new Image();
    image.src = pic;
    li.appendChild(image);
    ul.appendChild(li);
  });

  return ul;
}

export default function carrousel(list) {
  const content = document.createElement('div');
  content.classList.add('carrousel');

  // Create the left button
  const bLeft = document.createElement('button');
  bLeft.classList.add('carrousel-button', 'left-button');
  content.appendChild(bLeft);
  
  // Create the image-holder
  const container = document.createElement('div');
  container.classList.add('carrousel-track-container');
  const ul = createImageList(list);
  content.appendChild(ul);

  // Create the right button
  const bRight = document.createElement('button');
  bRight.classList.add('carrousel-button', 'right-button');
  content.appendChild(bRight);

  return content;
}
