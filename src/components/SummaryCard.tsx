import { summaryData } from "@/utils/data";
import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";

interface Props {
  item: (typeof summaryData)[0];
}

const SummaryCard = ({ item }: Props) => {
  return (
    <div className="p-7 rounded-[20px] bg-primary-dark/9 flex-1">
      <div className="flex justify-between items-center mb-6">
        <p className="text-[17px] font-bold">{item.title}</p>
        <button className="cursor-pointer">
          <HiDotsHorizontal size={24} />
        </button>
      </div>
      <p className="font-bold text-[34px] mb-1">{item.value}</p>
      <p className="text-primary-dark font-medium text-[13px]">
        {item.subvalue}
      </p>
    </div>
  );
};

export default SummaryCard;
