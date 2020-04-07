import * as functions from 'firebase-functions';
const express = require('express');
const api = require('./api');
const v1 = api.v1;

const app = express();

// Handle root path
app.get('/', (req: any, res: any) => {
    res.json({ message: 'Siyasat API', versions: [{ version: 'v1', status: 'available' }] });
});

// Handle documentation request
app.get('/docs', (req:any, res: any) => {
    res.redirect('https://developer.siyasat.org');
});

// v1
app.get('/v1', v1.home.get);
app.get('/v1/organizations', v1.organizations.get);

// Handle 404
app.use((req:any, res:any, next:any) => {
    res.status(404).json({ message: "Endpoint not found or invalid" });
});

exports.app = functions.https.onRequest(app);