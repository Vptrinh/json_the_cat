// let breed = process.argv.slice(2);

const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = (`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`);
  request(url, (error, response, body) => {
    if (error) {
    //send back the error
      callback(error, null);
    }
    // if (response.statusCode !== 200) {
    //   return callback(`Server response: ${response.statusCode}`, null);
    // }
    let data = JSON.parse(body);
    // console.log(data);
    const breed = data[0];
    if (breed) {
      callback(null, breed.description)
    } else {
      callback ('Breed not found', null);
    }
    
    // if (data[0] === undefined) {
    //   console.log("Breed cannot be found.");
    // }
      // return callback(null, data[0].description);
  })
}; 

module.exports = { fetchBreedDescription };

