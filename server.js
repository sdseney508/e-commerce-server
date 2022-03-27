const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//turn on the routes
app.use(routes);

//activated the connection to the server and db
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => { console.log(`App listening on port ${PORT}!`) });
});
