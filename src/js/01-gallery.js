// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const list = document.querySelector('.gallery');

const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

list.innerHTML = galleryItemsMarkup;

function createGalleryItemsMarkup(items) {
  return items
    .map(
      item => `
  <a class = "gallery__link" href="${item.original}">
  <img
    class = "gallery__image"
    src="${item.preview}"
    alt="${item.description}">
  </a>
    `
    )
    .join('');
}

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
