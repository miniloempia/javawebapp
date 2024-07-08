require('@aikidosec/firewall'); // <-- Include this before any other code or imports

const express = require('express');

const app = express();

// Your other middleware and routes

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
