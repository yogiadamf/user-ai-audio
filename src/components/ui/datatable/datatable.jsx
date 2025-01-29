import { flexRender } from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import Nodata from "@/components/custom/Nodata";
import PropTypes from "prop-types";
import { DataTableColumnHeader } from "./datatable-column-header";
import { DataTablePagination } from "./datatable-pagination";

const getCommonPinningStyles = (column) => {
  const isPinned = column.getIsPinned();
  const isLastLeftPinnedColumn =
    isPinned === "left" && column.getIsLastColumn("left");
  const isFirstRightPinnedColumn =
    isPinned === "right" && column.getIsFirstColumn("right");

  return {
    boxShadow: isLastLeftPinnedColumn
      ? "-4px 0 4px -4px gray inset"
      : isFirstRightPinnedColumn
      ? "4px 0 4px -4px gray inset"
      : undefined,
    left: isPinned === "left" ? `${column.getStart("left")}px` : undefined,
    right: isPinned === "right" ? `${column.getAfter("right")}px` : undefined,
    opacity: isPinned ? 0.95 : 1,
    position: isPinned ? "sticky" : "relative",
    width: column.getSize(),
    zIndex: isPinned ? 1 : 0,
  };
};

export function Datatable({ table, children, className, ...props }) {
  return (
    <div className={cn("w-full space-y-3", className)} {...props}>
      {children}
      <div className="relative w-full overflow-x-scroll rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const { column } = header;
                  return (
                    <TableHead
                      key={header.id}
                      colSpan={header.colSpan}
                      style={{ ...getCommonPinningStyles(column) }}
                    >
                      <div className="flex w-full items-center justify-between">
                        <div className="whitespace-nowrap">
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}{" "}
                        </div>
                        {!header.isPlaceholder && header.column.getCanPin() && (
                          <DataTableColumnHeader
                            column={column}
                            pinLeft={() => header.column.pin("left")}
                            noPin={() => header.column.pin(false)}
                          />
                        )}
                        {header.column.getCanResize() && (
                          <div
                            {...{
                              onDoubleClick: () => header.column.resetSize(),
                              onMouseDown: header.getResizeHandler(),
                              onTouchStart: header.getResizeHandler(),
                              className:
                                "absolute top-0 right-0 h-full w-2 cursor-ew-resize select-none touch-none",
                            }}
                          >
                            <div className="absolute -ri top-[13px] w-[2px] h-1/3 bg-[#d4d4d5] dark:bg-[#565f6c]"></div>
                          </div>
                        )}
                      </div>
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    const { column } = cell;
                    return (
                      <TableCell
                        key={cell.id}
                        style={{ ...getCommonPinningStyles(column) }}
                        className="bg-card"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={table.getAllColumns().length}
                  className="h-28 text-center"
                >
                  <Nodata text="No result found" />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination table={table} />
    </div>
  );
}

Datatable.propTypes = {
  table: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string,
};
