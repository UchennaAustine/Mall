import cors from "cors"
import express, { Application } from "express"

export const appConfigurations =(app:Application)=>{
    //Middlewares(Configurations)
    app.use(express.json())
    app.use(cors())
}

// export default appConfigurations