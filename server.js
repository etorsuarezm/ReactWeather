const express = require('express');

// Create App
const app = express();
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next) { // Middleware
    if (req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname + req.url); // Because open weather API
    } else {
        next();
    }
});

app.use(express.static('public'));

app.listen(PORT, function() {
    console.log('Express server is up on port ' + PORT);
});