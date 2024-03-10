import express from "express";
import "./config.js";
import "./db-connection.js";
import usersRouter from "./routes/usersRouter.js";
import errorResponder from "./middleware/errorResponder.js";

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

app.use("/users", usersRouter);

app.use(errorResponder);

app.listen(port, () => {
  console.log(`server started on ${port}`);
});
