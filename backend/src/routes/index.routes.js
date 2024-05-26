import { Router } from "express";
import carstRouter from "./car.routes.js";
import productRouter from "./products.routes.js";
import messageRoute from "./message.routes.js";
import sessionRoute from "./session.routes.js";
import { verificationSession } from "../middlewares/sessionMiddleware.js";
import { userMiddleware } from "../middlewares/userMiddleware.js";

const indexRouter = Router();

//routes
indexRouter.use("/carts",userMiddleware,carstRouter);//solo los usuario van a poder agregar productos o modificar su carrito
indexRouter.use("/products",verificationSession,productRouter)//verificamos que se haya iniciado session
indexRouter.use("/message",messageRoute);
indexRouter.use("/",sessionRoute);

export default indexRouter