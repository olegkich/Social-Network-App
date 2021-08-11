import express from "express";
import { Express } from "express";
import userRouter from './modules/users/users.routes'
import { SNServer } from "./server";


const app: Express = express();

const server = new SNServer();
server.start(app)

app.use('/users', userRouter)

