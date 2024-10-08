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
  const result = await cardService.getALLCards(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Cards retrieved Successfully",
    success: true,
    data: result,
  });
});
const getSingleCard = catchAsync(async (req: Request, res: Response) => {
  const result = await cardService.getSingleCard(req.params.title);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Card retrieved Successfully",
    success: true,
    data: result,
  });
});
const updateACard = catchAsync(async (req: Request, res: Response) => {
  const result = await cardService.updateACard(req.params.id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Card Updated Successfully",
    success: true,
    data: result,
  });
});
const deleteACard = catchAsync(async (req: Request, res: Response) => {
  const result = await cardService.deleteACard(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Card deleted Successfully",
    success: true,
    data: result,
  });
});

export const cardController = {
  createCard,
  getALLCard,
  getSingleCard,
  updateACard,
  deleteACard,
};
