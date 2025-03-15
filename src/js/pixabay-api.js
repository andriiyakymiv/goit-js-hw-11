const refs = {
  searchForm: document.querySelector('.form'),
};

const onSearchFormSubmit = event => {
  event.preventDefault();
  const query = event.currentTarget.elements.search_text.value;
};

refs.searchForm.addEventListener('submit', onSearchFormSubmit);
