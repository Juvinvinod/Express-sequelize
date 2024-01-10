const app = require('./app');
const db = require('./utilities/database');

// import environmental variables from our variables.env file
require('dotenv').config({ path: '.env' });

db();

app.set('port', process.env.PORT);
const server = app.listen(app.get('port'), async () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
