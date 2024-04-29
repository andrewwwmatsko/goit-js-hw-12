import axios from 'axios';

let page = 1;
let currentSearchValue;

export default async function fetchImages(searchValue) {
  currentSearchValue = searchValue;
  const listOfImages = document.querySelector('#images');
  listOfImages.innerHTML = '';

  // loader on
  const loader = document.querySelector('.loader');
  loader.style.display = 'block';

  // options for axios GET request
  const authKey = '43558017-e13ccc47d2aef7f917b5afe22';
  const searchParams = new URLSearchParams({
    key: authKey,
    q: searchValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page,
  });
  const URL = `https://pixabay.com/api/?${searchParams}`;

  console.log(page);
  //axios lib
  const response = await axios.get(URL);
  return response.data;
}
