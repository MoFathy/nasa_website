var http = require('http');

const app = require('./app');
const { loadPlanetsData } = require('./models/planets.model');
const PORT = process.env.PORT || 5000;

async function startServer(){
    await loadPlanetsData();
    http.createServer(app).listen(PORT,() => console.log(`Example app listening on port ${PORT}!`));
}

startServer();

