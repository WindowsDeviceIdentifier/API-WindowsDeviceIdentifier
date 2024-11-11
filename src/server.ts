import express, { Router } from "express";
import { auth } from "express-oauth2-jwt-bearer";

const app = express();

const router = Router();

const jwtCheck = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_ISSUER,
  tokenSigningAlg: process.env.AUTH0_SIGNING_ALG,
});

app.use(jwtCheck);

router.get("/signup", (req, res, next) => {
  console.log(req);
  res.status(200).json({
    response: "COUCOU",
  });
});

app.use(router);

app.listen(process.env.PORT ?? 8000, () => {
  console.log(
    `Server started on port: http://localhost:${process.env.PORT ?? 8000}`
  );
});
