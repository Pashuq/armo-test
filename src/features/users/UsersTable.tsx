import { useState } from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
} from "@mui/material";

import { Order, IUser } from "../../types/index";
import UsersTableHead from "./UsersTableHead";
import { UseTableSort } from "../../hooks/UseTableSort";
import { UseTransformDateNumberToString } from "../../hooks/UseTransformDateNumberToString";

interface IUserTableProps {
  rows: IUser[];
}

export default function UsersTable({ rows }: IUserTableProps) {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof IUser>("firstName");
  const [page, setPage] = useState(0);
  const rowsPerPage = 10;

  const { getComparator, stableSort } = UseTableSort();

  const transformBirthDate = UseTransformDateNumberToString();

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof IUser
  ) => {
    console.log(property);
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"medium"}
          >
            <UsersTableHead
              numSelected={0}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />

            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      <TableCell align="left">Edit</TableCell>
                      <TableCell align="left">{row.id}</TableCell>
                      <TableCell component="th" id={labelId} scope="row">
                        {row.firstName}
                      </TableCell>
                      <TableCell align="left">{row.lastName}</TableCell>
                      <TableCell align="left">{row.email}</TableCell>
                      <TableCell align="left">{row.access}</TableCell>
                      <TableCell align="left">
                        {transformBirthDate(row.birthDate)}
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[]}
        />
      </Paper>
    </Box>
  );
}
