import { NextFunction } from 'connect';
import express, { Request, Response } from 'express'
const app = express()
// enable params body in JSON
app.use(express.json())

// inspiration : https://stackoverflow.com/a/70696895/14516628
interface ParamsProps {
  bookId: string;
  authorId: string;
}
const handleGetBookOne = (req: Request<ParamsProps>, res: Response, next: NextFunction) => {
  console.log(req.params)
  next()
}
const handleGetBookTwo = (req: Request<ParamsProps>, res: Response) => {
  console.log("Second handler")
  return res.send(req.params)
}

const middleware = ({ name }: { name: string }) => (req: Request<any, any, { name: string }, { name: string }>, res: Response, next: NextFunction) => {
  req.body.name = name
  next()
}
app.use(middleware({ name: "totoio" }))
app.get(
  "/api/books/:bookId/:authorId", (req: Request<ParamsProps, any, { name: string }>, res: Response) => {
    console.log(req.body.name)
    return res.send(req.params)
  }
)
app.listen(3000, () => {
  console.log("App is listening at http://localhost:3000")
})