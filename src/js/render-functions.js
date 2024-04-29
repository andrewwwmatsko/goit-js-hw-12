const listOfImages = document.querySelector('#images');

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export default function createMarkup(fetchedData) {
  //clear collection
  listOfImages.innerHTML = '';

  //creating markup with fetched data
  const markup = fetchedData.hits
    .map(image => {
      return `<li class="images-image" >
                        <div class="gallery">
         <a href="${image.largeImageURL}">
          <img class="img" src="${image.webformatURL}" alt="${image.tags}" title="${image.tags}"/>
         </a>
                          </div>
                    <ul class="image-details-container">
                        <li>
                            <h2 class="image-heading">Likes</h2>
                            <p class="image-description">${image.likes}</p>
                        </li>
                        <li>
                            <h2 class="image-heading">Views</h2>
                            <p class="image-description">${image.views}</p>
                        </li>
                        <li>
                            <h2 class="image-heading">Comments</h2>
                            <p class="image-description">${image.comments}</p>
                        </li>
                        <li>
                            <h2 class="image-heading">Downloads</h2>
                            <p class="image-description">${image.downloads}</p>
                        </li>
                    </ul>
            </li>`;
    })
    .join('');
  listOfImages.insertAdjacentHTML('beforeend', markup);

  //lightbox lib
  var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'title',
    captionDelay: 350,
  });
  lightbox.refresh();
}
