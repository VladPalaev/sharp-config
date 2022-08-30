# Скрипт sharp для билда Webpack5

## Поставленные задачи
- Оптимизация(сжатие)
	- без потерь
	- более высокое сжатие
- Ресайсинг(modile, tablet, desctop, retina)
- Генерация современных форматов
	- WebP
- Создание плейсхолдеров

## Импорт библиотеки 
```
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
```

## Модуль path

Модуль path предоставляет утилиты для работы с путями к файлам и каталогам.

### Основные методы библиотеки path ###

	`path.basename(path [, ext])`
> path \<string> Путь файла или название файла  
ext \<string> Расширение файла  
returns \<string> Название файла

Метод path.basename() возвращает последнюю часть path , аналогично команде Unix basename, то есть мы можем получить имя файла.

Example:  
```
path.basename('./src/assets/Глава-1.txt');
// return Глава-1.txt
....
path.basename('Глава-1.txt');
// return Глава-1.txt
....
Чтобы вернуть название файла без расширения, нужно его передать аргументом в параметр функции.

path.basename('Глава-1.txt', '.txt');
// return Глава-1
```
Note:  
метод basename() чувствителен к регистру, то есть вызов функции `path.basename('./assets'Глава-1.TXT', 'txt');` вернет `'Глава-1.TXT'`

	`path.extname(path)`  
> path \<string> Путь файла или название файла  
return \<string> Расширение файла

Метод path.extname() возвращает расширение path от последнего вхождения . (точки) до конца строки в последней части path.

Example:
```
path.extname('./src/assets/Глава-1.txt');
// return '.txt'
....
path.extname('Глава-1.txt');
// return '.txt'
....
path.extname('.index');
// return ''
```

	`path.format(pathObject)`
> + pathObject \<object> Объект JS, имеющий следующие свойства
>+ dir \<string> 
>+ root \<string> 
>+ base \<string> 
>+ name \<string> 
>+ ext \<string> 

Метод path.format() возвращает строку пути от объекта. Это противоположно path.parse()  

Note:  
При предоставлении свойств pathObject помните, что существуют комбинации, в которых одно свойство имеет приоритет над другим:

pathObject.root игнорируется , если pathObject.dir предоставляется
pathObject.ext и pathObject.name игнорируются, если pathObject.base существует

Example:
```
const userPath = {
	dir: '/home/user',
	base: 'file.txt',
};

path.format(userPath);
// return /home/user\file.txt
```
Note:  
Стоит обратить внимание, что возращанная строка содержит разные слеши. Чтобы это избежать существует метод [path.normalize()](#test)

<a name="test">
	test
</a>

## Модуль fs (file system)

Модуль fs полностью поддерживает работу файловой системы. Операции в основном делятся на операции с файлами, операции с каталогами, информацию о файлах и потоковую передачу. Метод программирования также поддерживает синхронизацию, асинхронность и Promices.

### Основные методы библиотеки fs ###

`fs.readFile(path, options, callback)`

Прочитать файл. Через callback можно вернуть объект Buffer, соотвественно закодированный файл.
> path - путь до файла  
options - это объект, его можно пропустить. Но так же можно передать кодировку нашего data  
callback - (error, data) => {} error - ошибка; data - это объект Buffer файла. Чтобы его раскодировать, нужно либо передать в options параметр 'utf-8', либо data.toString

Example:
```
fs.readFile(path.resolve(__dirname, 'assets', 'Глава-1-Гарри-Поттер.txt'), (error, data) => {
	if (error) {
		console.error(error);
	} else {
		console.log(data.toString());
	}
});
```
`fs.writeFile("fileName.txt", "data", callback)`
> создание файла

`fs.rename("oldName.txt", "newName.txt", callback)`
> создание файла

`fs.unlink()`
> создание файла

`fs.readFile`
> создание файла

`fs.readdir`
> создание файла

## Использование

### Чтение изображений и вывод метаданных
Метаданные изображения - это текст, встроенный в изображение, который включает такие данные, как тип, ширина, высота, формат и т.д
**пример**
``

`sharp(input: string, options: object);`
> *input* может быть Buffer/Unit8Array, то есть содержать непосредственно данные изображения или содержать файловый путь к изображению
> *options* позже

