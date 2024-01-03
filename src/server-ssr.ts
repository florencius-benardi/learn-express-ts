import bodyParser from 'body-parser'
import compression from 'compression'
import express, { Request, Response } from 'express'
import next from 'next'
import apiRoutes from './backend/routes/api'
import { createServer } from 'http'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler();

(async () => {
    await app.prepare()

    const server = express()

    server.use(compression())
    server.use(bodyParser.urlencoded({ extended: false }))

    // Backend Route Handler
    server.use('/api', apiRoutes)

    // Next.js handling everything else
    await server.all('*', (req: Request, res: Response) => {
        return handle(req, res)
    })

    server.use((error: any, res: Response) => {
        const { statusCode, message, errors } = error
        res.status(statusCode || 500).json({
            status: false,
            message: message,
            errors
        })
    })

    // Create an HTTP server instance using http.createServer
    const httpServer = createServer(server);

    httpServer.listen(process.env.NODE_PORT, () => {
        console.log('> Ready on http://localhost:' + process.env.NODE_PORT)
    })
})()
