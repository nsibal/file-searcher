const fs = require('fs');
const readFiles = require('./read-files.js');

// ---------- search properties ------------------
/*
async function: search
Input: String, String -> dir and token to search
Output: {dir : [Number]} -> directories with corresponding line numbers
*/
module.exports = async function search (dir, token) {
  let data = await readFiles(dir);
	let obj = new Object();

	data.forEach((dir) => {
		let [file, content] = dir;
		let lines = new Array();

		content.split('\n').forEach((line, lineNumber) => {
			if (line.match(token)) lines.push(lineNumber);
		})

		if (lines.length !== 0) obj[file] = lines;
	});

	return obj;
}
