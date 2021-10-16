const fs = require('fs')
// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// const parsedData = JSON.parse( bookJSON);
// console.log('parsed data is..!!', parsedData.author);

//  fs.writeFileSync('myjsonData.JSON', bookJSON);

const dataBuffer = fs.readFileSync('myjsonData.JSON');
console.log(dataBuffer); // display the data in binary files

//converting the data into String
const myData = dataBuffer.toString();
console.log(myData);

//parsing the data into object
const data = JSON.parse(myData);
console.log(data.author);
