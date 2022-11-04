/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */

// dependencies
const http = require('http');
// const url = require('url');
// const { StringDecoder } = require('string_decoder');
const { handleReqRes } = require('./helpers/handleReqRes');
const environment = require('./helpers/environments');
const data = require('./lib/data');

// app object -module scaffolding
const app = {};
// testing file system
// data.create('test', 'newFile', { name: 'Bangladesh', language: 'Bengal' }, (err) => {
//     console.log('error was ', err);
// });
data.read('test', 'newFile', (err, result) => {
    console.log(err, result);
});

// configuration
// app.config = {
//     port: 3000,
// };

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, () => {
        console.log(`Listing to port ${environment.port}`);
    });
};

// handle request response
app.handleReqRes = handleReqRes;
// app.handleReqRes = (req, res) => {
//     //  request handling
//     //  get the url and parse it
//     const parsedUrl = url.parse(req.url, true);
//     const path = parsedUrl.pathname;
//     const trimmedPath = path.replace(/^\/+|\/+$/g, '');
//     const method = req.method.toLowerCase();
//     const queryStringObject = parsedUrl.query;
//     const headersObject = req.headers;
//     const decoder = new StringDecoder('utf-8');
//     let realData = '';

//     req.on('data', (buffer) => {
//         realData += decoder.write(buffer);
//     });
//     req.on('end', () => {
//         realData += decoder.end();
//         console.log(realData);
//         res.end('Hello world hello');
//     });
//     // console.log(headersObject);
//     // request handle
//     // res.end('Hello world hello');
// };

// start server
app.createServer();
