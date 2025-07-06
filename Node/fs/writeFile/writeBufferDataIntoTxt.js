const  { writeFile } = require("fs")
const { Buffer } = require("buffer")

// const data = new Uint8Array(Buffer.from('Hello Node.js'));
const data = `hello `
writeFile('message.txt', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});