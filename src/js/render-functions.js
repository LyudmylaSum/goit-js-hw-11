// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryList = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

let lightboxInstance = new SimpleLightbox('.gallery a', {
    captionsData: 'alt', 
    captionDelay: 250, 
    captionPosition: 'bottom',
});


function createGallery() {
    
}