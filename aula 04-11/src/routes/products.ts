import  Express  from "express"

const router = Express.Router()

router.get("/:id", (req,res)=>{
  console.log(req.params)
  res.json({ name: "Keyboard",price:90})
})

router.post("/", (req,res)=>{
  res.json({ produtos:[]})
})

export default router