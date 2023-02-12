
import * as express from 'express'
import { Request, Response, Express } from 'express'
const app: Express = express()

app.get('/status', (req: Request, res: Response) => res.status(200).json({ status: req.headers }))

app.get('/', (req: Request, res: Response) => res.status(200).json({ status: 200 }))

app.listen(3000, () => console.log('Example app listening on port 3000!'))