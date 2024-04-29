import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { loadMoreBtn } from '../main';

//icon
import icon from '../img/error-icon.svg';

const authKey = '43558017-e13ccc47d2aef7f917b5afe22';

const perPage = 15;
let page = 1;
let currentSearchValue = '';
let totalItems = 0;

export async function fetchImages(searchValue) {
  page = 1;
  currentSearchValue = searchValue;
  const listOfImages = document.querySelector('#images');
  listOfImages.innerHTML = '';

  // loader on
  const loader = document.querySelector('.loader');
  loader.style.display = 'block';

  // options for axios GET request
  const searchParams = new URLSearchParams({
    key: authKey,
    q: searchValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: perPage,
    page,
  });
  const URL = `https://pixabay.com/api/?${searchParams}`;

  //axios lib
  const response = await axios.get(URL);
  return response.data;
}

export async function loadMore() {
  if (!currentSearchValue) {
    return;
  }
  // options for axios GET request
  page += 1;
  const searchParams = new URLSearchParams({
    key: authKey,
    q: currentSearchValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: perPage,
    page,
  });
  const URL = `https://pixabay.com/api/?${searchParams}`;

  //axios get request
  const response = await axios.get(URL);
  let totalItems = response.data.totalHits;
  let totalPages = Math.ceil(totalItems / perPage);

  if (page > totalPages) {
    loadMoreBtn.style.display = 'none';
    return iziToast.show({
      class: 'search-404',
      message: "We're sorry, but you've reached the end of search results.",
      position: 'topRight',
      iconUrl: icon,
      backgroundColor: '#EF4040',
      transitionIn: 'bounceInDown',
      transitionOut: 'fadeOutUp',
      theme: 'dark',
      closeOnClick: true,
    });
  }
  return response.data;
}
