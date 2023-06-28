import express, { Request, Response, Router } from "express"
import { stockProducts, viewAllProducts, viewSingleProduct } from "../Controller/MallController"

export const router = Router()

router.get("/Mall", (req: Request, res:Response)=>{
    return res.status(200).json({
        message: "Welcome To Our Extinguished Mall 🚞🚞🛵"
    })
})
router.get("/viewAllProducts",viewAllProducts)
router.get("/viewSingleProduct/:productID",viewSingleProduct)
router.post("/stockproducts",stockProducts)