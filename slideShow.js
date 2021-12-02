'use strict'

const images = [
  { 'id': 1, 'url':'./imagens/Pamela e Vinícius 082-2.jpg' },
  { 'id': 2, 'url':'./imagens/Pamela e Vinícius 052-2.jpg' },
  { 'id': 3, 'url':'./imagens/Pamela e Vinícius 211-2.jpg' },
  { 'id': 4, 'url':'./imagens/Pamela e Vinícius 232-2.jpg' },
  { 'id': 5, 'url':'./imagens/Pamela e Vinícius 392.jpg' },
  { 'id': 6, 'url':'./imagens/Pamela e Vinícius 263.jpg' },
  { 'id': 7, 'url':'./imagens/Pamela e Vinícius 394-2.jpg' },
  { 'id': 8, 'url':'./imagens/Pamela e Vinícius 405.jpg' },
  { 'id': 9, 'url':'./imagens/Pamela e Vinícius 368.jpg' },
  { 'id': 10, 'url':'./imagens/Pamela e Vinícius 430.jpg' },
  { 'id': 11, 'url':'./imagens/Pamela e Vinícius 297.jpg' },
  { 'id': 12, 'url':'./imagens/Pamela e Vinícius 303.jpg' },
  { 'id': 13, 'url':'./imagens/Pamela e Vinícius 223.jpg' },
  { 'id': 14, 'url':'./imagens/Pam & Sogro.jpeg' },
  { 'id': 15, 'url':'./imagens/Vini & Pam.jpeg' },
  { 'id': 16, 'url':'./imagens/Vini & Pam 2.jpeg' },
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container) => {
  images.forEach( image => {
    container.innerHTML += `
      <div class='item'>
        <img src='${image.url}'
      </div>`
  })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
  containerItems.appendChild(items[0]);
  items = document.querySelectorAll('.item');
}
const next = () => {
  const lastItem = items[items.length - 1];
  containerItems.insertBefore( lastItem, items[0] );
  items = document.querySelectorAll('.item');
} 

document.querySelector('#previous').addEventListener('click', next);
document.querySelector('#next').addEventListener('click', previous);