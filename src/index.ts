import express from "express";
import bookRouter from "./routes/book.route.js";
import categoryRouter from "./routes/category.route.js";

import { requestLogger } from "./middlewares/log.middleware.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(requestLogger);
app.use("/books", bookRouter);
app.use("/category", categoryRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
