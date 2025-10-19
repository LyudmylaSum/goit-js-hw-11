import axios from "axios";

export default getImagesByQuery();

getImagesByQuery();

function getImagesByQuery() {
  axios('https://pixabay.com/api/?key=52822111-b1008b71650d3ce195bc41da7')
    .then(result => {
      console.log(result.data);
    })
    .catch(error => {
      console.log(error.message);
    });
}
