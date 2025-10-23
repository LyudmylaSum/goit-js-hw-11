// key = 52822111-b1008b71650d3ce195bc41da7

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


import  { getImagesByQuery } from './js/pixabay-api.js'
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector(".form");


form.addEventListener('submit', event => {
  event.preventDefault();
  
const query = event.target.elements.query.value.trim();

if (query === '') {
        iziToast.warning({
            message: 'Please enter a search query!',
            position: 'topCenter',
            timeout: 3000,
            backgroundColor: '#FFA000',
      messageColor: 'white',
        });
        return; 
    }
  
clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      if (!data.hits.length) {
        throw new Error(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      }
      createGallery(data.hits);
    })
    .catch(error => {
      iziToast.error({
        message: error.message,
        position: 'topCenter',
        timeout: 3000,
        backgroundColor: '#EF4040',
        messageColor: 'white',
        close: false,
      });
    })
    .finally(() => {
      event.target.elements.query.value = '';
      hideLoader();
    });
});