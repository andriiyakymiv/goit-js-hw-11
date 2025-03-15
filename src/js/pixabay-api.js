export const fetchPhotosByQuery = query => {
  return fetch(
    `https://pixabay.com/api/?key=49359014-7397220ae93b07f148b4c236e&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then(response => {
    // перевірка на помилку
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};
