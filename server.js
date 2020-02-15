const express = require('express'); 
const morgan = require('morgan'); 
const bodyParser = require('body-parser');
const campsiteRouter = require('./routes/campsiteRouter');
const promotionsRouter = require('./promotionsRouter'); 
const partnerRouter = require('./partnerRouter'); 

const hostname = 'localhost'; 
const port = 3000; 

const app = express();
app.use(morgan('dev')); 

// start exercise 

app.use(bodyParser.json()); 
app.use('/campsites', campsiteRouter);

app.all('/campsites',(req, res, next)=>{
    res.statusCode=200; 
    res.setHeader('Content-Type', 'text/plain');
    next(); 
}); 

app.get('/campsites', (req, res) => {
    res.end('Will send all the campsites to you');
});

app.post('/campsites', (req, res) => {
    res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
});

app.put('/campsites', (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
});

app.delete('/campsites', (req, res) => {
    res.end('Deleting all campsites');
});

app.get('/campsites/:campsiteId', (req, res) => {
    res.end(`Will send details of the campsite: ${req.params.campsiteId} to you`);
});

app.post('/campsites/:campsiteId', (req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /campsites/${req.params.campsiteId}`);
});

app.put('/campsites/:campsiteId', (req, res) => {
    res.write(`Updating the campsite: ${req.params.campsiteId}\n`);
    res.end(`Will update the campsite: ${req.body.name}
        with description: ${req.body.description}`);
});

app.delete('/campsites/:campsiteId', (req, res) => {
    res.end(`Deleting campsite: ${req.params.campsiteId}`);
});

// end exercise

// start task 2a
app.use(bodyParser.json()); 
app.use('/promotions', promotionsRouter);

app.all('/promotions',(req, res, next)=>{
    res.statusCode=200; 
    res.setHeader('Content-Type', 'text/plain');
    next(); 
}); 

app.get('/promotions', (req, res) => {
    res.end('Will send all the campsites to you');
});

app.post('/promotions', (req, res) => {
    res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
});

app.put('/promotions', (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
});

app.delete('/promotions', (req, res) => {
    res.end('Deleting all campsites');
});

app.get('/promotions/:promotionId', (req, res) => {
    res.end(`Will send details of the campsite: ${req.params.campsiteId} to you`);
});

app.post('/promotions/:promotionId', (req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /campsites/${req.params.campsiteId}`);
});

app.put('/promotions/:promotionId', (req, res) => {
    res.write(`Updating the campsite: ${req.params.campsiteId}\n`);
    res.end(`Will update the campsite: ${req.body.name}
        with description: ${req.body.description}`);
});

app.delete('/promotions/:promotionId', (req, res) => {
    res.end(`Deleting campsite: ${req.params.campsiteId}`);
});

// end task 2

// beginning task 3

app.use(bodyParser.json()); 
app.use('/partners', partnerRouter);

app.all('/partners',(req, res, next)=>{
    res.statusCode=200; 
    res.setHeader('Content-Type', 'text/plain');
    next(); 
}); 

app.get('/partners', (req, res) => {
    res.end('Will send all the campsites to you');
});

app.post('/partners', (req, res) => {
    res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
});

app.put('/partners', (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
});

app.delete('/partners', (req, res) => {
    res.end('Deleting all campsites');
});

app.get('/partners/:partnerId', (req, res) => {
    res.end(`Will send details of the campsite: ${req.params.campsiteId} to you`);
});

app.post('/partners/:partnerId', (req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /campsites/${req.params.campsiteId}`);
});

app.put('/partners/:partnerId', (req, res) => {
    res.write(`Updating the campsite: ${req.params.campsiteId}\n`);
    res.end(`Will update the campsite: ${req.body.name}
        with description: ${req.body.description}`);
});

app.delete('/partners/:partnerId', (req, res) => {
    res.end(`Deleting campsite: ${req.params.campsiteId}`);
});

// end task 3


app.use(express.static(__dirname + '/public')); 

app.use((req, res) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});