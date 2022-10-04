import cors from 'cors'
import express, { json } from 'express'
import { router } from '../routes'

const app = express()

app.use(json())
app.use(cors({
    origin: "*"
    
}))
app.use(router)





export { app }
