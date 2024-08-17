import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { cardService } from "./card.service";

const createCard = catchAsync(async (req: Request, res: Response) => {
  const result = await cardService.createCard(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    message: "Card Created Successfully",
    success: true,
    data: result,
  });
});
const getALLCard = catchAsync(async (req: Request, res: Response) => {
  const result = await cardService.getALLCards();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Cards retrieved Successfully",
    success: true,
    data: result,
  });
});

export const cardController = {
  createCard,
  getALLCard,
};
