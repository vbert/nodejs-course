const http = require('http');
const port = 3000;

const requestListener = function(request, response) {
  console.log(request.url);

  if (request.url === '/kontakt') {
    response.write('<h1>Kontakt</h1>');
    return response.end();
  }
  if (request.url === '/') {
    response.write('<h1>Strona glowna</h1>');
    return response.end();
  }
  response.write('<h1>404</h1>');
  return response.end();
}

const server = http.createServer(requestListener);
server.listen(3000, () => {
  console.log(`Server listen on: http://localhost:${port}`);
});
