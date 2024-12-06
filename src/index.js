import express from 'express';
import { port } from './config/serverConfig.js';


const app = express();

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    }); 