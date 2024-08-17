import { TCard } from "./card.interface";
import { Card } from "./card.model";

const createCard = async (payload: TCard) => {
  const result = await Card.create(payload);
  return result;
};

const getALLCards = async (query: Record<string, unknown>) => {
  let searchTerm = "";
  if (query?.searchTerm) {
    searchTerm = query?.searchTerm as string;
  }
  const result = await Card.find({
    $or: ["title", "description"].map((field) => ({
      [field]: { $regex: searchTerm, $options: "i" },
    })),
  });
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
