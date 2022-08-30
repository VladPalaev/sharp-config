const path = require('path');
const fs = require('fs');

const directoryText = path.resolve(__dirname, 'assets', 'Глава-1.txt');
const directoryAssets = path.resolve(__dirname, 'assets');


const userPath = {
	dir: '/home/user',
	base: 'file.txt',
};

console.log(path.format(userPath));
