import express, { Application } from "express";
import dbase from "./Config/Database";
import { appConfigurations } from "./src/app";

const Port: number = 3782;

const app: Application = express();

const Server = async () => {
  try {
    appConfigurations(app)
    dbase()
    await app.listen(Port, () => {
      console.log(`Server is actively listening on Port: ${Port}`);
    });
  } catch (error:any) {
    console.log(error.message);
  }
};

//Server Initialization
Server();
