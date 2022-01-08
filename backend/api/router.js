import { Router } from "express"

import controller from "./controller.js"

const router = new Router()

router.post('/getList', controller.getList)
router.post('/setList', controller.setList)

export default router