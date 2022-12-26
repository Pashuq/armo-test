import { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Tooltip,
} from "@mui/material";

import { Order, IUser } from "../../types/index";
import UsersTableHead from "./UsersTableHead";
import { UseTableSort } from "../../hooks/UseTableSort";
import { UseTransformDateNumberToString } from "../../hooks/UseTransformDateNumberToString";
import { Delete, Edit } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux-hooks";
import { deleteUserById } from "./asyncUsersActions";

interface IUserTableProps {
  rows: IUser[];
}

export default function UsersTable({ rows }: IUserTableProps) {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof IUser>("firstName");
  const [page, setPage] = useState(0);
  const rowsPerPage = 10;

  const dispatch = useAppDispatch();

  const { getComparator, stableSort } = UseTableSort();

  const transformBirthDate = UseTransformDateNumberToString();

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof IUser
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleDeleteUser = (id: number) => {
    dispatch(deleteUserById({ id: String(id) }));
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
                      <TableCell align="center">
                        <Box
                          sx={{
                            display: "flex",
                            gap: "1em",
                            justifyContent: "center",
                          }}
                        >
                          <ButtonGroup
                            variant="outlined"
                            aria-label="outlined button group"
                          ></ButtonGroup>
                          <Tooltip title="Delete">
                            <Button
                              onClick={() => {
                                handleDeleteUser(row.id);
                              }}
                            >
                              <Delete
                                sx={{
                                  cursor: "pointer",
                                  height: "20px",
                                  width: "20px",
                                }}
                              />
                            </Button>
                          </Tooltip>
                          <Tooltip title="Edit">
                            <Link to={`/user/${row.id}`}>
                              <Button>
                                <Edit
                                  sx={{
                                    cursor: "pointer",
                                    height: "20px",
                                    width: "20px",
                                  }}
                                />
                              </Button>
                            </Link>
                          </Tooltip>
                        </Box>
                      </TableCell>
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
