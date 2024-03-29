"use client";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { roboto } from "@/lib/Fontss";
// import LoadingError from "../Loader/LoadingError";

export default function TableComp({
  rows,
  columns,
  title,
  setSelID,
  setEditItemModal,
  setEditCompanyModal,
}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const HandleDoubleClick = (e) => {
    if (e.detail === 2) {
      setSelID(e.target.id);
      // console.log(e.target.name);
      if (title === "ITEM INFO") setEditItemModal(true);
      if (title === "COMPANIES INFO") setEditCompanyModal(true);
    }
  };
  return rows.length == 0 ? (
    <div>Error Occured!</div>
  ) : (
    // <LoadingError />
    <div className="mt-0 flex justify-center flex-col w-full transition-all duration-500 ease-in-out">
      <div
        className={`relative bg-[#000] !py-[25px] text-xl flex items-center rounded-t-lg pl-10 text-white justify-center font-[raleway] font-[700] text-[1.4rem] select-none !text-[1.4rem] py-[8px] px-[0px] ${roboto.className}`}
      >
        {title.toUpperCase()}
      </div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer
          className={`border-[2px] border-[black] border-t-white`}
          sx={{ maxHeight: 550, borderRadius: "0px 0px 10px 10px" }}
        >
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column, index) => (
                  <TableCell
                    key={index}
                    align={column.align}
                    className={`select-none`}
                    style={{
                      minWidth: column.minWidth,
                      backgroundColor: "#000",
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                      fontFamily: "'Raleway', sans-serif",
                    }}
                  >
                    <div className={`${roboto.className}`}>{column.label}</div>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.length &&
                rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    return (
                      <TableRow
                        id={row._id}
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={index}
                        style={{ cursor: "pointer" }}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          const c_id = row["_id"];
                          return (
                            <TableCell
                              id={c_id}
                              onClick={HandleDoubleClick}
                              className={
                                column.id === "contact"
                                  ? "font-[georgia] select-none"
                                  : "font-[raleway] select-none"
                              }
                              key={column.id}
                              align={column.align}
                              style={{ fontWeight: "700", fontSize: "0.95rem" }}
                            >
                              <div className={`${roboto.className}`}>
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </div>
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 20, 50]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
