require('@aikidosec/firewall'); // <-- Include this before any other code or imports

const express = require('express');

const app = express();

const routes = require('./routes');

app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
