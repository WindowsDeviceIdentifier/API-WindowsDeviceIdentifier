import express from "express";

const app = express();

const port = 8000;

app.listen(port, () => {
  console.log(
    `Server started on port: http://localhost:${process.env.PORT ?? 8000}`
  );
});
