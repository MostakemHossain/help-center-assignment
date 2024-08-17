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

const getSingleCard = async (title: string) => {
  const result = await Card.findOne({
    title: title,
  });
  return result;
};

export const cardService = {
  createCard,
  getALLCards,
  getSingleCard,
};
