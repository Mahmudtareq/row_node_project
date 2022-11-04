/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
// dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder');
const routes = require('../routes');
const { notFoundHandler } = require('../handlers/routeHandlers/notFoundHandler');
// module - scaffolding
const handler = {};
handler.handleReqRes = (req, res) => {
    //  request handling
    //  get the url and parse it
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headersObject = req.headers;
    const requestProperties = {
        parsedUrl,
        method,
        queryStringObject,
        headersObject,
        path,
        trimmedPath,
    };
    const decoder = new StringDecoder('utf-8');
    let realData = '';
    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;
    // chosenHandler(requestProperties, (statusCode, payLoad) => {
    //     statusCode = typeof (statusCode) === 'number' ? statusCode : 500;
    //     payLoad = typeof (payLoad) === 'object' ? payLoad : {};
    //     const payLoadString = JSON.stringify(payLoad);
    //     // return the final response
    //     res.writeHead(statusCode);
    //     res.end(payLoadString);
    // });

    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });
    req.on('end', () => {
        realData += decoder.end();
        // console.log(realData);
        chosenHandler(requestProperties, (statusCode, payLoad) => {
        statusCode = typeof (statusCode) === 'number' ? statusCode : 500;
        payLoad = typeof (payLoad) === 'object' ? payLoad : {};
        const payLoadString = JSON.stringify(payLoad);
        // return the final response
        res.writeHead(statusCode);
        res.end(payLoadString);
    });
    });
    // console.log(headersObject);
    // request handle
    // res.end('Hello world hello');
};
module.exports = handler;
