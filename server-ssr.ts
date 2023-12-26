import bodyParser from 'body-parser'
import compression from 'compression'
import express, { Request, Response, NextFunction, Errback } from 'express'
import next from 'next'
import apiRoutes from './src/routes/api'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler();

(async () => {
    await app.prepare()

    const server = express()

    server.use(compression())
    server.use(bodyParser.urlencoded({ extended: false }))
    server.use('/api', apiRoutes)
    server.use((error: any, req: Request, res: Response) => {
        const { statusCode, message, errors } = error
        res.status(statusCode || 500).json({
            status: false,
            message: message,
            errors
        })
    })

    // Next.js handling everything else
    server.all('*', (req: Request, res: Response) => {
        return handle(req, res)
    })

    server.listen(3000, () => {
        console.log('> Ready on http://localhost:3000')
    })
})()
