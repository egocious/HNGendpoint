const {createServer} = require('http')

const port= process.env.PORT || 8080

const server = createServer((request, response) =>{ 
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.write(JSON.stringify({
        'slackUsername': 'beingEgo',
        'backend': true, 
        'age': 28, 
        'bio': 'A determined lady, on her way to becoming a full stack web developer'}));
    return response.end();
});

server.listen(8080);l





