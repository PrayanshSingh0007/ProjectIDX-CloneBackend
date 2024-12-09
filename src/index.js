import express from 'express';
import cors from 'cors';
import {  PORT } from './config/server.Config.js';


const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.listen(PORT, () => {
    console.log(`Server running on port ${port}`);
});

app.get('/ping', (req, res) => {
    return res.json({ message: 'pong' });
});

