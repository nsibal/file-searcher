const fs = require('fs');
const getPathNames = require('./get-path-names.js');

// ---------- getNestedPathNames properties ------------------
/*
Input: String
Output: [String] -> contains all possible directory names
*/
module.exports = async function getNestedPathNames (dir) {
  let dirNames = await getPathNames(dir);

	if (dirNames.length === 0) return [];

	let nestedPathPromises = dirNames.map(dir => getNestedPathNames(dir));
	let nestedPath = await Promise.all(nestedPathPromises);

	return generateFlatList(dirNames, nestedPath);
}

function generateFlatList (dirNames, nestedPath) {
  let nestedPathNames = new Array();

	dirNames.forEach(dir => nestedPathNames.push(dir));

	for (let path of nestedPath) {
		path.forEach(loc => nestedPathNames.push(loc));
	}

	return nestedPathNames;
}
