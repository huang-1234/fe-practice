

const fs = require("fs");
const fileName = `waittingWriteFile`
const content = `hello i am will writed in waittingWriteFile`
fs.writeFile(`./waittingWriteFile.txt`,content, 'utf8', (err1, data) => {
  if(err1){
    throw new Error(err1)
  }
  console.log(data)
})