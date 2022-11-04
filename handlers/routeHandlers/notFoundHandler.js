/* eslint-disable prettier/prettier */
// module scaffolding
const handler = {};
handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, {
        message: 'Your request url not found',
    });
};
module.exports = handler;
