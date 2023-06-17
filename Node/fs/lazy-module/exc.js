const fs = require('fs')
const path = require('path')
const routerContent = fs.readFileSync('./index.js', 'utf-8');


const matchRoutes = routerContent.match(/[^{]+(?=})/g) || [];
const MODULE = '/content/distribution, /content/distribution/major-manage, /content/distribution/major-authorize';
const pathRegExp = new RegExp(`('|"|\`)(${MODULE.split(',').map((m) => m.trim()).join('|')})('|"|\`)`);

// 异步创建目录
fs.mkdirSync(path.resolve(__dirname, './nan'), err => {
  if (err) throw err
  fs.writeFileSync('./nan/allRouter.js', routerContent);
  fs.writeFileSync('./nan/select.js', JSON.stringify(matchRoutes));
})

const needRenderRoutes = matchRoutes
  .filter(text => pathRegExp.test(text))
  .map(item => `{${item}}`)
  .join();

const renderExc = `import loadable from '@loadable/component'; export const routes = [${needRenderRoutes}]`;

console.log('renderExc', renderExc)


