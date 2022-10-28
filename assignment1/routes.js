const routeHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html> <head> <title> first assignment </title></head> <body> <h1> Hello there! </h1> <br> <form action="/create-user" method="POST"> <input type="text" name="username"/> <button type="submit">send</button> </form></body> </html>');
        res.end();
    }
    if (url === '/users') {
        res.write('<html> <head> <title> first assignment </title></head> <body> <h1> list of users :  </h1> <br> <ul> <li>Max</li> <li>Pam</li> <li>Lee</li> <li>Leo</li> </ul> </body> </html>');
        res.end();
    }
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const user_data = parsedBody.split('=')[1];
            console.log(user_data);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }
};

exports.handler = routeHandler;