import { baseApi } from "./baseApi";

export const cardApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllCards: build.query({
      query: (arg: Record<string, any>) => ({
        url: `/cards`,
        method: "GET",
        params: arg,
      }),
    }),
  }),
});

export const { useGetAllCardsQuery } = cardApi;
