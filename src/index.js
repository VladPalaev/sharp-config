const path = require('path');
const fs = require('fs');
const sharp = require('sharp');


const directoryUploads = path.resolve(__dirname, 'uploads');
const listImages = fs.readdirSync(directoryUploads);

console.log(listImages);

const test = sharp(`${directoryUploads}/${listImages[0]}`)
	.toBuffer()

console.log(test.then(console.log));




// const directoryFrom = path.resolve(__dirname, 'src', 'uploads');
// const directoryTo = path.resolve(__dirname, 'src', 'img');

// fs.readdirSync(directoryFrom).forEach(file => {
// 	const exp = file.slice(file.indexOf('.'));
// 	const nameFile = file.slice(0, file.indexOf(exp));
// 	sharp(`${directoryFrom}/${file}`)
// 	.resize(200) // width, height
// 	.toFile(`${directoryTo}/${nameFile}-mobile320${exp}`)
// });

/*1- Подумать как ширину картинок привязать к брекпоинтам css
2- Очищать от старых картинок в папке img , после запуска скрипта
3- Нужно сжать еще картинки
4- генерировать webp avif
5- генерировать svg sprite
6-группировать media queries -----------done
*/
// const resultListImg = fs.readdirSync(directoryTo)
// const listImg = fs.readdirSync(directoryFrom).filter(item => !resultListImg.includes(item));




// const promises = [];

// for (let fileName of listImg) {
// 	promises.push(
// 		sharp(`${directoryFrom}/${fileName}`)
// 		.clone()
// 		.jpeg({ quality: 100})
// 		.toFile(`${directoryTo}/${fileName}`)
// 	)

// 	promises.push(
// 		sharp(`${directoryFrom}/${fileName}`)
// 		.clone()
// 		.resize({ width: 500 })
// 		.jpeg({ quality: 80 })
// 		.toFile(`${directoryTo}/${fileName.slice(0, fileName.lastIndexOf('.'))}-opmiz500.jpeg`)
// 	);

// 	promises.push(
// 		sharp(`${directoryFrom}/${listImg[0]}`)
// 		.clone()
// 		.resize({ width: 500 })
// 		.webp({ quality: 80 })
// 		.toFile(`${directoryTo}/${fileName.slice(0, fileName.lastIndexOf('.'))}-opmiz500.webp`)

// 	);
// }


// Promise.all(promises)
// 	.then(res => console.log('Done', res))
// 	.catch(err => {
// 		console.error(err)
// 	})

