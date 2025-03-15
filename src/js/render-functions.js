export const createGalleryCardMarkup = ({
  webformatURL: linkSmallImg,
  largeImageURL: linkLargeImg,
  tags: descriptionImg,
  likes,
  views,
  comments,
  downloads,
}) => {
  return `
    <li class="gallery-card">
        <img class="gallery-images" src="${linkSmallImg}" alt="${descriptionImg}">
        <img class="gallery-images" src="${linkLargeImg}" alt="${descriptionImg}">
        <ul class="gallery-info">
          <li class="gallery-info-item">
            <p class="gallery-info-title">Likes</p>
            <p class="gallery-info-value">${likes}</p>
          </li>
          <li class="gallery-info-item">
            <p class="gallery-info-title">Views</p>
            <p class="gallery-info-value">${views}</p>
          </li>
          <li class="gallery-info-item">
            <p class="gallery-info-title">Comments</p>
            <p class="gallery-info-value">${comments}</p>
          </li>
          <li class="gallery-info-item">
            <p class="gallery-info-title">Downloads</p>
            <p class="gallery-info-value">${downloads}</p>
          </li>
        </ul>
      </li>
    `;
};
