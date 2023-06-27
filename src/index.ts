import 'express-async-errors'
import express from "express";
import { AppDataSource } from "./data-source";
import routes from "./routes";

import cors from "cors";
import path from 'path';

AppDataSource.initialize().then( async () => {
  const app = express();
  
  app.use(express.json());
  app.use(cors());
  app.use("/files", express.static(path.resolve(__dirname, "..", "tmp")));
  app.use(routes);
  

  return app.listen(process.env.PORT, ()=> {
    console.log(`localhost:${process.env.PORT}`)
  });
});

