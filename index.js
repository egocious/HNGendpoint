const http= require('http');
const path = require('path');
const fs = require('fs');



const server = http.createServer((req, res) =>{ 
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({
            'slackUsername': 'beingEgo',
            'backend': true, 
            'age': 28, 
            'bio': 'A determined lady, on her way to becoming a full stack web developer'}));
    }
});
const PORT= process.env.PORT || 8080
server.listen(PORT, () => console.log(`Server Up at ${PORT}`));
   
   //response.writeHead(200, {'Content-Type': 'application/json'});
    //response.write(JSON.stringify({
      //  'slackUsername': 'beingEgo',
      //  'backend': true, 
      //  'age': 28, 
      //  'bio': 'A determined lady, on her way to becoming a full stack web developer'}));
  //  return response.end();
//});



