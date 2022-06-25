import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function CustomTable({ data, columns }) {
  return (
    <Paper>
      <TableContainer sx={{ maxHeight: 490, minWidth: 650 }}>
        <Table aria-label="simple table" stickyHeader>
          <TableHead
            sx={{
              "& th": {
                color: "#fff",
                backgroundColor: "#212121",
                fontWeight: "bold",
              },
            }}
          >
            <TableRow>
              {columns &&
                columns.map((col) => <TableCell>{col.header}</TableCell>)}
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {columns.map((col) => (
                    <TableCell component="th" scope="row">
                      {row[col.field]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default CustomTable;
