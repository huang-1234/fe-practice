let pReadFile = function (filePath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filePath, 'utf-8', function (err, data) {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  })
}