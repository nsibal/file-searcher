const fs = require('fs');

// ---------- getPathNames properties ------------------
/*
Input: String
Output: [String] -> contains directory names eg. 'dir/file.txt'
*/
module.exports = function getPathNames (dir) {
	return new Promise((resolve, _) => {
    fs.readdir(dir, (err, files) => {
      if (err) {
        resolve([]);
      } else {
        resolve(files.map(file => `${dir}/${file}`));
      }
    });
  });
}
