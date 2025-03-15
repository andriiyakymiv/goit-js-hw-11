const refs = {
  searchForm: document.querySelector('.form'),
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
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    });
};

refs.searchForm.addEventListener('submit', onSearchFormSubmit);
