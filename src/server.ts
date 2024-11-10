import express, { Router } from "express";

const app = express();

const router = Router();

router.get("coucou", (req, res, next) => {
  res.status(200).json({
    response: "COUCOU",
  });
});

app.listen(process.env.PORT ?? 8000, () => {
  console.log(
    `Server started on port: http://localhost:${process.env.PORT ?? 8000}`
  );
});
