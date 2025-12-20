import express from "express";
import cors from "cors";
import bookRoutes from "./routes/book.route.js";
import authRoutes from "./routes/auth.route.js";
import categoryRoutes from "./routes/category.route.js";
import morgan from "morgan";
import { errorHandler } from "./middlewares/error.handler.js";
import { requestLogger } from "./middlewares/log.middleware.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(requestLogger);

app.use("/api", authRoutes);
app.use("/books", bookRoutes);
app.use("/category", categoryRoutes);

app.use(errorHandler);

export default app;
