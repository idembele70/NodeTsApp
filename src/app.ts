// Followed this video : https://www.youtube.com/watch?v=KgnJNJk9-to&t=271s

import { NextFunction } from 'connect';
import express, { Request, Response } from 'express'
import helmet from 'helmet'
import router from './routes';
const app = express()
// enable params body in JSON
app.use(express.json())
app.use(router)
// inspiration : https://stackoverflow.com/a/70696895/14516628

app.use(helmet())
app.listen(3000, () => {
  console.log("App is listening at http://localhost:3000")
})