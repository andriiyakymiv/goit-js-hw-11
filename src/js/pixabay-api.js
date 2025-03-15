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
};

refs.searchForm.addEventListener('submit', onSearchFormSubmit);
