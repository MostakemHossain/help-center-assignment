import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { cardController } from "./card.controller";
import { cardValidation } from "./card.validation";

const router = express.Router();

router.post(
  "/cards",
  validateRequest(cardValidation.createCardValidationSchema),
  cardController.createCard
);

export const cardRoutes = router;
