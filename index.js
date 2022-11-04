/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */

// dependencies
const http = require('http');
// const url = require('url');
// const { StringDecoder } = require('string_decoder');
const { handleReqRes } = require('./helpers/handleReqRes');

// app object -module scaffolding
const app = {};

// configuration
app.config = {
    port: 3000,
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`Listing to port ${app.config.port}`);
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
