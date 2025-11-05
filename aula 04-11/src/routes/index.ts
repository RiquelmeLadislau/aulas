import express from "express"
import productsRouter from "./products"
import fliesRouter from "./flies"
import pingRouter from "./ping"

const router = express.Router()

//prefixo de rota
router.use("/products", productsRouter)
router.use("/flies", fliesRouter)
router.use("/ping", pingRouter)

router.get("/", (req, res) => {
  let name:string = "john"
  let age: number = 90
  res.json({ name, age })
});

export default router