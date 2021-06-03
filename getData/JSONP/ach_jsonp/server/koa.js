const Koa = require('koa');
const app = new Koa();
const items = [
  {
    id: 1,
    title: 'jsonp principle'
  },
  {
    id: 2,
    title:'hsq want to learn the jsonp'
  }
];
app.use(async (ctx, next) => {
  if (ctx.path === '/api/jsonp'){
    const { cb, id } = ctx.query;
    const title = items.find(item => item.id == id)['title'];
    // const bodyObj = {
    //   key:ctx.query,
    //   content: `${cb}(${JSON.stringify({ title })})`
    // }
    // const bodyString = JSON.stringify(bodyObj)
    ctx.body = `${cb}(${JSON.stringify({ title })})`;
    return;
  }
});

console.log('listen: http://localhost:8080');
app.listen(8080);