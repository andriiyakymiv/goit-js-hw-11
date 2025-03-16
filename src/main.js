import { createGalleryCardMarkup } from './js/render-functions';
import { fetchPhotosByQuery } from './js/pixabay-api';

const refs = {
  searchForm: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
};

const onSearchFormSubmit = event => {
  event.preventDefault();
  const query = event.currentTarget.elements.search_text.value.trim();
  if (query === '') {
    alert('Enter text in the search field');
    return;
  }
  fetchPhotosByQuery(query)
    .then(({ hits }) => {
      if (hits.length === 0) {
        alert('Add box'); // додаємо повідомлення про те що такого значення немає
        refs.searchForm.reset(); //clear form
        refs.gallery.innerHTML = ''; // чистимо галерею
        return;
      }

      const galleryCardsTemplate = hits
        .map(img => createGalleryCardMarkup(img))
        .join('');
      refs.gallery.innerHTML = galleryCardsTemplate;
    })

    .catch(err => {
      console.log(err);
    });
};

refs.searchForm.addEventListener('submit', onSearchFormSubmit);
