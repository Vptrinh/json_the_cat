let breed = process.argv.slice(2);

const request = require('request');

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed[0]}`, (error, response, body, search) => {
  if (response.statusCode !== 200) {
    throw error;
  } else {
    let data = JSON.parse(body);
    if (data[0] === undefined) {
      console.log("Breed cannot be found.");
    } else {
      console.log(data[0].description);
    }
  }
});

