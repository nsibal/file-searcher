const search = require('./search.js');

let path = '../root';
let searchToken = 'World';
search(path, searchToken)
  .then(output => console.log(output));
