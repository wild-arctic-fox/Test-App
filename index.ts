
import * as express from 'express'
import { Request, Response, Express } from 'express'
const app: Express = express()

app.get('/status', (req: Request, res: Response) => res.status(200).json({ status: 'oki typescript' }))

app.listen(3000, () => console.log('Example app listening on port 3000!'))