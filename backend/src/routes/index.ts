import express from "express";
import { cardRoutes } from "../app/modules/Card/card.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/",
    route: cardRoutes,
  },
];

moduleRoutes.forEach((e) => router.use(e.path, e.route));

export default router;
