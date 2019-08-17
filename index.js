const server = require("./api/server.js");
const port = process.env.PORT; // Node process

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
