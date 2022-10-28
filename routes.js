const fs = require('fs');

const routeHandler = (req, res) => {
    //console.log(req.url,req.method,req.headers);
    //process.exit();
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html><form action="/message" method="POST"> <input type="text" name="message"/> <input type="text" name="address"/>  <button type="submit">send</button>  </form></html>');
        res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302; //302 status code for redirection
                res.setHeader('Location', '/'); //this is use to redirect to another page
                return res.end();
            });
        });
    }
    // res.setHeader('Content-Type', 'text/html');
    // res.write('<html><head><title>My first page</title></head><body><h1>Hello from server!</h1></body></html>');
    // res.end();
};

// module.exports = {
//     handler : routeHandler,
//     text_t : "sddawda",
// };

// module.exports.handler = routeHandler;
// module.exports.text_t = "dawda";

exports.handler = routeHandler;
exports.text_t = "dafsdg";
