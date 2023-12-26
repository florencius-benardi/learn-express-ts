import express, { Request, Response } from 'express';

let Router = express.Router();

Router.route('/test').get((req: Request, res: Response) => {
    res.json({ message: 'Hello from Express.js!' });
})

Router.route('/benda').get((req: Request, res: Response) => {
    res.json({ message: 'Hello from Benda' });
})

export default Router