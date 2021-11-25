const argvPa = process.argv;
(function (params) {
  let choise = null;
  if (argvPa && argvPa[2]) {
    choise = Number(argvPa[2])
    console.log(argvPa)
    console.log(choise)
  } else {
    throw new Error('please input a params before you setup')
  }
  let bundleScript = 'bundleFullCode'
  switch (choise) {
    case 1:
      bundleScript = 'bundleFullCode'
      break;
    case 2:
      bundleScript = 'bundleShowAst'
      break;
    case 3:
      bundleScript = 'bundleFullCode'
      break;
    case 4:
      bundleScript = 'bundleFullCode'
      break;
    case 5:
      bundleScript = 'bundleTraverseAstBabelCoreDependencyGraph'
      break;

    default:
      break;
  }
  const { execFile } = require('child_process');

  const child = execFile('node', [`./bundle/${bundleScript}.js`], (error, stdout, stderr) => {
    if (error) {
      throw error;
    }
    console.log(stdout);
  });

})()