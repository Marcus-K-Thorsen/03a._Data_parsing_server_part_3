import express from 'express';
import csvRouter from './src/endpoints/csvEndpoint.js';
import jsonRouter from './src/endpoints/jsonEndpoint.js';
import txtRouter from './src/endpoints/txtEndpoint.js';
import xmlRouter from './src/endpoints/xmlEndpoint.js';
import yamlRouter from './src/endpoints/yamlEndpoint.js';

const app = express();

app.use('/csv', csvRouter);
app.use('/json', jsonRouter);
app.use('/txt', txtRouter);
app.use('/xml', xmlRouter);
app.use('/yaml', yamlRouter);


app.get("/js", (req, res) => {
    res.send({ data: "Root JavaScript route" });
});



const PORT = 8080;
app.listen(PORT, () => console.log('Server is running on port', PORT));


