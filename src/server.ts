import express from "express";

const app = express();

app.listen(process.env.PORT ?? 8000, () => {
  console.log(
    `Server started on port: http://localhost:${process.env.PORT ?? 8000}`
  );
});
