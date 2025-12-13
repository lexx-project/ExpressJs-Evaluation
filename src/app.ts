import express from "express";
import cors from "cors";
import bookRoutes from "./routes/book.route.js"
import morgan from "morgan";
import { errorHandler } from "./middlewares/error.handler.js";


const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
console.log("Books Routes Type:", typeof bookRoutes)

app.use("/api", bookRoutes)

app.use(errorHandler)

export default app