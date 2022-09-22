// imported the file-system module
const fs = require ('fs');

//created read and write streams
const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/blog4.txt');

//
// readStream.on('data', (chunk) => {
//     console.log('------NEW CHUNK-------');
//     console.log(chunk.toString());
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// })

//piping(does pretty much the same as the above code)
readStream.pipe(writeStream);