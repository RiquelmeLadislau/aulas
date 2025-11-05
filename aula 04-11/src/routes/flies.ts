import  Express, { Router }  from "express"

const router = Express.Router()

router.get("/:from/:to",(req,res)=>{
  const { from, to }= req.params
  res.json({
    flies:{
      from: from.toLocaleUpperCase(),
      to: to.toUpperCase(),
      price: 500
    }
  })
})

export default router