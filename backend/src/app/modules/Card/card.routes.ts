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
router.get("/cards", cardController.getALLCard);
router.get("/cards/:title", cardController.getSingleCard);
router.put(
  "/cards/:id",
  validateRequest(cardValidation.updateCardValidationSchema),
  cardController.updateACard
);
router.delete("/cards/:id", cardController.deleteACard);

export const cardRoutes = router;
