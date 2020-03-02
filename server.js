const connect = require('connect');
const serveStatic = require('serve-static');

let checkout = connect();
checkout.use(serveStatic('./checkout'));
checkout.listen(5032);
console.log('Checkout server: listening on port 5032.');

let iframe = connect();
iframe.use(serveStatic('./pay360'));
iframe.listen(5033);
console.log('Iframe server: listening on port 5033.');