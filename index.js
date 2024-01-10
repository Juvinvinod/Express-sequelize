const app = require('./app');
// import environmental variables from our variables.env file
require('dotenv').config({ path: '.env' });

app.set('port', process.env.PORT);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});