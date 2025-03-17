import { createGalleryCardMarkup, createLightBox } from './js/render-functions';
import { fetchPhotosByQuery } from './js/pixabay-api';
import iziToast from 'izitoast';
import iconError from './img/icon/icon-error.svg';

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
      // додаємо повідомлення про те що такого значення немає
      if (hits.length === 0) {
        iziToast.error({
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please, try again!',
          messageSize: '16px',
          messageColor: '#ffffff',
          timeout: 3000,
          pauseOnHover: true,
          backgroundColor: '#EF4040',
          iconUrl: iconError,
          layout: 2,
        });

        refs.searchForm.reset(); //clear form
        refs.gallery.innerHTML = ''; // чистимо галерею
        return;
      }

      const galleryCardsTemplate = hits
        .map(img => createGalleryCardMarkup(img))
        .join('');
      refs.gallery.innerHTML = galleryCardsTemplate;
      createLightBox();
      refs.searchForm.reset();
    })

    .catch(err => {
      console.log(err);
    });
};

refs.searchForm.addEventListener('submit', onSearchFormSubmit);
