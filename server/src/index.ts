import express, { Request, Response } from 'express';

const app = express();
const port: number = 8080;

// define a route handler for the default home page
app.get('/', (req: Request, res: Response) => {
    res.send('Hello worldjlgjjl!');
});

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
