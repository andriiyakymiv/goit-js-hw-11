import { createGalleryCardMarkup } from './js/render-functions';

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
  fetch(
    `https://pixabay.com/api/?key=49359014-7397220ae93b07f148b4c236e&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
  )
    //   ---------------------
    .then(response => {
      // перевірка на помилку
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    // ----------------------------
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
