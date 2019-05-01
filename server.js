'use strict'
var app = require('./app');
var port = process.env.PORT || 8000;

app.listen(port, function() {
    console.log(`Server started, listening on port ${port}`)
})