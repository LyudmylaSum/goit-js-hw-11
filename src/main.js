// key = 52822111-b1008b71650d3ce195bc41da7

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


import axios from "axios";


import  { getImagesByQuery } from './js/pixabay-api'
// import from './js/render-functions'

const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery");