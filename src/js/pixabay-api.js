const fetchPhotosByQuery = query => {
  fetch(
    `https://pixabay.com/api/?key=49359014-7397220ae93b07f148b4c236e
      &q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
  );
};
