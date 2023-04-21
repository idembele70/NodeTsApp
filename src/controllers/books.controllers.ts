import { Request, Response } from "express"

const getBooks = async (req: Request, res: Response) => {
  console.log("inside")
  return res.send(req.params)
}

export {
  getBooks
}