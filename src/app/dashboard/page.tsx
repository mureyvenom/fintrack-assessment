"use client";
import React, { useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaCaretDown } from "react-icons/fa";
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  Table,
} from "@tanstack/react-table";
import Avatar from "@/components/Avatar";
import { dummyAvatars, summaryData, dummyTableData } from "@/utils/data";
import SummaryCard from "@/components/SummaryCard";
import { SortingState, Transaction } from "@/utils/types";
import TableComponent from "@/components/Table";

const Dashboard = () => {
  const tabs = ["Overview", "Transactions"];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [sorting, setSorting] = useState<SortingState>([
    {
      id: "date",
      desc: true, // sort by name in descending order by default
    },
  ]);

  const columnHelper = createColumnHelper<Transaction>();

  const columns = [
    columnHelper.accessor("date", {
      header: "Date",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("remark", {
      header: "Remark",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("amount", {
      header: "Amount",
      cell: (info) =>
        info.getValue() > 0
          ? `$${info?.getValue()}`
          : `-$${info?.getValue()?.toString().replaceAll("-", "")}`,
    }),
    columnHelper.accessor("currency", {
      header: "Currency",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("type", {
      header: "Type",
      cell: (info) => (
        <div className="flex">
          <div className="rounded-2xl px-2 py-1 gap-x-2 flex items-center font-medium bg-primary/9">
            <div
              className={`h-[6px] w-[6px] rounded-2xl ${
                info.getValue() === "Credit" ? "bg-success" : "bg-danger"
              }`}
            />
            {info.getValue()}
          </div>
        </div>
      ),
    }),
  ];

  const table = useReactTable({
    data: dummyTableData as Transaction[],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
    onSortingChange: setSorting,
  });

  return (
    <div className="text-foreground-text">
      <div className="my-7 flex flex-row  md:px-12 px-5 justify-between items-center">
        <div className="flex md:flex-row flex-col md:items-center gap-x-4">
          <div className="flex items-center gap-x-1 cursor-pointer">
            <h4 className="md:text-[34px] text-2xl font-bold md:leading-[40px]">
              Wallet Ledger
            </h4>
            <FaCaretDown size={24} />
          </div>
          <div className="flex">
            <div className="rounded-2xl px-2 py-1 gap-x-2 flex items-center font-medium bg-primary/9">
              <div className="h-[6px] w-[6px] rounded-2xl bg-success" />
              Active
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-3">
          <button className="h-[36px] px-4 rounded-2xl cursor-pointer bg-primary-dark font-medium">
            Share
          </button>
          <button className="h-[36px] w-[36px] justify-center flex items-center rounded-2xl border-[1.5px] cursor-pointer border-primary-dark/20">
            <HiDotsHorizontal size={24} />
          </button>
        </div>
      </div>
      <div className="md:px-12 px-5  mb-7 flex flex-row items-center gap-x-3">
        <div className="flex flex-row items-center">
          {dummyAvatars.map((x) => (
            <div
              key={x}
              className={`rounded-full border-2 border-background-color ${
                x > 0 ? "-ml-4" : ""
              }`}
            >
              <Avatar size={32} source="/images/avatar.png" />
            </div>
          ))}
        </div>
        <p className="text-[15px] text-border-color/62">
          Ava, Liam, Noah +12 others
        </p>
      </div>
      <div className="md:px-12 px-5 mb-7">
        <div className="border-b-[1.5px] border-b-border-color/10 flex items-center">
          {tabs.map((t) => (
            <button
              onClick={() => setActiveTab(t)}
              key={t}
              className={`cursor-pointer px-7 py-3 border-b-[1.5px] text-[15px] transition-all duration-200 font-medium ${
                t === activeTab
                  ? "text-primary border-b-primary"
                  : "text-border-color/62 border-b-transparent"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
      <div className="md:px-12 px-5 mb-7">
        <div>
          <h5 className="font-bold text-xl mb-4">Summary</h5>
          <div className="flex md:flex-row flex-col items-start gap-7">
            {summaryData.map((s) => (
              <div key={s.title} className="md:flex-1 md:w-auto w-full">
                <SummaryCard item={s} />
              </div>
            ))}
          </div>
        </div>
        <div></div>
      </div>
      <div className="md:px-12 px-5 mb-7">
        <TableComponent
          table={table as Table<unknown>}
          setSorting={setSorting}
          sorting={sorting}
        />
      </div>
    </div>
  );
};

export default Dashboard;
