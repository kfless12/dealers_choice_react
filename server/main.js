const PORT = process.env.PORT || 8080
const server = require('./index')
const sync = require('./db/index')

const init = async () => {
  try {
      sync();
    server.listen(PORT, () => console.log(`

          Listening on port ${PORT}

          http://localhost:${PORT}/

      `));
  } catch (err) {
    console.log(`There was an error starting up!`, err);
  }
}

init();