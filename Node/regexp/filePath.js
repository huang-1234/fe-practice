// const cssMRegExp = new RegExp(/^[\w-]*\.(?:m|module)\.(c|sc)ss$/);
const cssMRegExp = new RegExp(/\.(m|module)\.(c|s[ca])ss$/)
const scssReg = new RegExp(/\.s[ac]ss$/i);
const files = [
  'aaa.m.scss',
  'aaa.m.sass',
  'bbb.module.scss',
  'cc.m.css',
  'c.css',
  'b.scss',
  'b.js'
]

files.forEach(fp => {
  console.log('scssReg:', fp);
  console.log(cssMRegExp.test(fp));
  console.log(scssReg.test(fp))
})