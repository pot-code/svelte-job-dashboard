const jsonServer = require('json-server');
const db = require('./db');
const routes = require('./routes.json');

const server = jsonServer.create();
const router = jsonServer.router(db());
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(jsonServer.rewriter(routes));
server.use(router);
server.listen(port, () => {
  console.log('JSON Server is running');
});
