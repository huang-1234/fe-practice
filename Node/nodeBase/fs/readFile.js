const { readFile } = require('fs')

readFile('./some.txt','utf8', (err, data)=>{
  if (err) {
    throw err;
  }
  // console.log(data);
})

const options = {
  pathname: './some.txt',
  enCode: 'utf8'
}
const PromsieReadFile = (options, cb) => {
  return new Promise((resolve, reject) => {
    readFile(...options, (err, data) => {
      if (err) reject(err);
      resolve(data)

    })
  })
}

PromsieReadFile(options.pathname, options.enCode,()=>{}).then(
  res=>console.log('res:', res),
  err => console.log(err)
)