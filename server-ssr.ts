import express, { Request, Response } from 'express';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

(async () => {
    await app.prepare();

    const server = express();

    // Your Express.js routes
    server.get('/api/test', (req: Request, res: Response) => {
        res.json({ message: 'Hello from Express.js!' });
    });

    // Next.js handling everything else
    server.all('*', (req: Request, res: Response) => {
        return handle(req, res);
    });

    server.listen(3000, () => {
        console.log('> Ready on http://localhost:3000');
    });
})();
