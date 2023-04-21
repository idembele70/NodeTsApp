import { Router } from 'express'
import bookRoutes from './books.routes'
const router = Router()

router.use("/api/data/", bookRoutes)

export default router