"use client";
import { useGetAllCardsQuery } from "@/redux/api/cardApi";
import { useDebounced } from "@/redux/hooks";
import { useState } from "react";
import CardInfo from "./Cards/CardInfo";

const HelpCenter = () => {
  const query: Record<string, any> = {};
  const [searchTerm, setSearchTerm] = useState<string>("");

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = searchTerm;
  }

  const { data, isLoading } = useGetAllCardsQuery({ ...query });
  return (
    <div className="flex flex-col items-center justify-center mb-20">
      <div className="bg-[#DADBF0] p-20 w-full flex flex-col items-center justify-center mb-20">
        <h1 className="text-6xl font-bold mb-6">How can we help?</h1>
        <div className="relative w-full max-w-md mb-28">
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 border h-12 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-56 gap-y-10">
          {!isLoading ? (
            data?.data?.map((card: any) => (
              <CardInfo key={card._id} item={card} />
            ))
          ) : (
            <h1 className="text-4xl text-red-500 font-bold">Loading....</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
