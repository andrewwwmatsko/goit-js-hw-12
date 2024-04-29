import { fetchImages, loadMore } from './js/pixabay-api';
import createMarkup from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

//icon
import icon from './img/error-icon.svg';

const form = document.querySelector('.form');
export const loadMoreBtn = document.querySelector('.load-more-btn');
let currentKeyword = '';

form.addEventListener('submit', e => {
  //show loader
  const loader = document.querySelector('.loader');
  loader.style.display = 'block';

  //prevent default events on the form
  e.preventDefault();

  //trimming a search value
  const inputValue = e.currentTarget.elements.search.value.trim();
  if (!inputValue) {
    loader.style.display = 'none';
    return;
  }
  currentKeyword = inputValue;
  //fetch (axios)
  fetchImages(inputValue)
    .then(data => {
      if (data.total === 0) {
        const images = document.querySelector('#images');
        images.innerHTML = '';

        iziToast.show({
          class: 'search-404',
          message:
            'Sorry, there are no images matching your search query. Please, try again!',
          position: 'topRight',
          iconUrl: icon,
          backgroundColor: '#EF4040',
          transitionIn: 'bounceInDown',
          transitionOut: 'fadeOutUp',
          theme: 'dark',
          closeOnClick: true,
        });

        //loader off
        loader.style.display = 'none';
        return;
      }

      //creating markup
      createMarkup(data);
      loader.style.display = 'none';
      loadMoreBtn.style.display = 'block';
    })
    .catch(error => {
      loader.style.display = 'none';
      console.log(error.message);
    });
  form.reset();
});

loadMoreBtn.addEventListener('click', async () => {
  //show loader
  const loader = document.querySelector('.loader');
  loader.style.display = 'block';
  loadMoreBtn.style.display = 'none';
  await loadMore()
    .then(data => {
      if (!data) {
        loader.style.display = 'none';
        return;
      }
      createMarkup(data);
      loader.style.display = 'none';
      loadMoreBtn.style.display = 'block';
    })
    .catch(error => {
      console.log(error);
      loader.style.display = 'none';
    });
});
