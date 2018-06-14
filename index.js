const express = require('express');
const path = require('path');
const app = express();

// config
const port = 3000;

// public (static) route
app.use('/', express.static(path.join(__dirname, 'public')));

// starting the app
app.listen(port, () => {
  console.log('listening on *:' + port);
});
