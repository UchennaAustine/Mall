import cors from "cors"
import express, { Application } from "express"
import { router } from "../Router/MallRouter"

export const appConfigurations =(app:Application)=>{
    //Middlewares(Configurations)
    app.use(express.json())
    app.use(cors())
    app.use("/api", router)
}

// export default appConfigurations