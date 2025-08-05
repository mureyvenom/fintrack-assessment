import { SortingState } from "@/utils/types";
import { Table } from "@tanstack/react-table";
import React from "react";
import { flexRender } from "@tanstack/react-table";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import useCheckMobileScreen from "@/hooks/useCheckMobileScreen";

interface Props {
  table: Table<unknown>;
  sorting?: SortingState;
  setSorting?: (sorting: SortingState) => void;
}

const TableComponent = ({ table, sorting = [], setSorting }: Props) => {
  const isMobile = useCheckMobileScreen();

  return (
    <div className="relative overflow-x-auto">
      <table className="md:table-fixed w-full text-sm text-left  text-foreground-text">
        <thead className="text-foreground-text">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header, index) => (
                <th
                  scope="col"
                  key={header.id}
                  style={{
                    width: index === 0 && !isMobile ? "40%" : undefined,
                    minWidth: isMobile ? 125 : undefined,
                  }}
                >
                  <div
                    onClick={() => {
                      if (setSorting) {
                        if (header?.id === sorting?.[0]?.id) {
                          setSorting([
                            {
                              id: header.id,
                              desc: !(sorting?.[0]?.desc || false),
                            },
                          ]);
                        } else {
                          setSorting([
                            {
                              id: header.id,
                              desc: true,
                            },
                          ]);
                        }
                      }
                    }}
                    className="flex py-3 items-center px-6 border-b-border-color/10 cursor-pointer"
                    style={{
                      borderBottomWidth: 1.5,
                      marginRight: 16,
                    }}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {header?.id === sorting?.[0]?.id && (
                      <div className="cursor-pointer ml-2">
                        {sorting?.[0]?.desc ? (
                          <FaCaretDown size={20} />
                        ) : (
                          <FaCaretUp size={20} />
                        )}
                      </div>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table?.getRowModel()?.rows?.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell, index) =>
                index === 0 ? (
                  <th
                    key={cell.id}
                    scope="row"
                    className=""
                    style={{
                      width: index === 0 && !isMobile ? "40%" : undefined,
                      minWidth: isMobile ? 190 : undefined,
                      verticalAlign: "bottom",
                    }}
                  >
                    <div
                      className="px-6 mr-2 py-4 border-b-border-color/10 font-normal text-[15px]"
                      style={{
                        borderBottomWidth: 1.5,
                        marginRight: 16,
                      }}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </div>
                  </th>
                ) : (
                  <td
                    key={cell.id}
                    className=""
                    style={{
                      minWidth: isMobile ? 140 : undefined,
                      verticalAlign: "bottom",
                    }}
                  >
                    <div
                      className="px-6 mr-2 py-4 border-b-border-color/10"
                      style={{
                        borderBottomWidth: 1.5,
                        marginRight: 16,
                      }}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </div>
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
