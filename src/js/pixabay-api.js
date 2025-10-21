import axios from "axios";
 

const myKey = '52822111-b1008b71650d3ce195bc41da7';
const urlAdress = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  return axios(urlAdress, {
    params: {
      key: myKey,
      q: query, 
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    }
  })
    .then(result => {
      if (result.data.hits.length === 0) {
            throw new Error("Sorry, there are no images matching your search query. Please try again!");
        }
      // console.log(result.data);
      return result.data
    })
    .catch(error => {
      console.log(error.message);
    });
}
