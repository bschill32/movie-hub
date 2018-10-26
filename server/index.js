const express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    port = 3232

    app.use(bodyParser.json())

    app.listen(port, () => {
        console.log('I hate all the orphans in the whole world', port);
    })