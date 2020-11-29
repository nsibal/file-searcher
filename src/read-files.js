const fs = require('fs');
const getNestedPathNames = require('./get-nested-path-names.js');

// ---------- readFiles properties ------------------
/*
Input: String
Output: [[String, String]] -> array of sub-arrays with directory and file data
*/
module.exports = async function readFiles (dir) {
  let nestedDir = await getNestedPathNames(dir);
  let txtFiles = nestedDir.filter(filterTxtFile);
	let txtpromises = txtFiles.map(readFile);
	let data = await Promise.all(txtpromises);
	return data;
}

function filterTxtFile (path) {
  return path.match('.txt');
}

function readFile (file) {
  return new Promise((resolve, _) => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) {
        resolve([file, '']);
      } else {
        resolve([file, data]);
      }
    });
  });
}
