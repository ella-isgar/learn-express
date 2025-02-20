import express, { Express } from "express";
import birds from "./birds";

const app = express();
const port = 8001;

app.use("/birds", birds); // a middleware function that adds the birds router to the app

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
