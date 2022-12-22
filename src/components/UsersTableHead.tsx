import {
  Box,
  TableCell,
  TableRow,
  TableSortLabel,
  TableHead,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { MouseEvent } from "react";
import { Order, IUser } from "../types";

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof IUser
  ) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof IUser;
  label: string;
  numeric: boolean;
  align: "right" | "left" | "center";
}

const headCells: HeadCell[] = [
  {
    id: "id",
    numeric: true,
    disablePadding: false,
    label: "id",
    align: "left",
  },
  {
    id: "firstName",
    numeric: false,
    disablePadding: false,
    label: "firstName",
    align: "left",
  },
  {
    id: "lastName",
    numeric: false,
    disablePadding: false,
    label: "lastName",
    align: "left",
  },
  {
    id: "email",
    numeric: false,
    disablePadding: false,
    label: "email",
    align: "left",
  },
  {
    id: "access",
    numeric: false,
    disablePadding: false,
    label: "access",
    align: "left",
  },

  {
    id: "birthDate",
    numeric: false,
    disablePadding: false,
    label: "birthDate",
    align: "left",
  },
];

function UsersTableHead(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler =
    (property: keyof IUser) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {/* <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                "aria-label": "select all desserts",
              }}
            />
          </TableCell> */}
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default UsersTableHead;
