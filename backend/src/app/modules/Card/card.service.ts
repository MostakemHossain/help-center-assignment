import { TCard } from "./card.interface";
import { Card } from "./card.model";

const createCard = async (payload: TCard) => {
  const result = await Card.create(payload);
  return result;
};

const getALLCards = async () => {
  const result = await Card.find();
  return result;
};

export const cardService = {
  createCard,
  getALLCards,
};
