var googleMapsClient = require('@google/maps').createClient({
  key: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  Promise: Promise
});

googleMapsClient.geocode({address: '1600 Amphitheatre Parkway, Mountain View, CA'})
  .asPromise()
  .then((response) => {
    console.log(response.json.results);
  })
  .catch((err) => {
    console.log(err);
});