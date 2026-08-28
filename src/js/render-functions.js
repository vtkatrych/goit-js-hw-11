const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

export function createGallery(images) {
  const galleryMarkup = images
    .map(({ webformatURL, tags, likes, views, comments, downloads }) => {
      return `<li class="gallery-item">
      <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
      <div class="info">
      <div class="info-item"
      <p>Likes: ${likes}</p>
      </div>
      <div class="info-item"
      <p>Views: ${views}</p>
      </div>
      <div class="info-item"
      <p>Comments: ${comments}</p>
      </div>
      <div class="info-item"
      <p>Downloads: ${downloads}</p>
      </div>
      </div>
    </li>`;
    })

    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  loader.classList.add('is-active');
}

export function hideLoader() {
  loader.classList.remove('is-active');
}
