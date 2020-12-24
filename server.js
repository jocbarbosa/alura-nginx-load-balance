const express = require('express');
const app = express();
const routes = require('./routes');

const env = process.env.NODE_ENV;
if(!env){
	env = 'development'
}
const config = require(`./config/config.${env}.json`);

require('./database')(`mongodb://${config.databaseConfig.host}:27017/${config.databaseConfig.database}`);

const port = process.env.port || 3000;

app.use(routes);

app.listen(port, () =>{
     console.log('Server initialiazed on port ' + port) ;
})