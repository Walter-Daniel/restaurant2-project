import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { Order } from '../../interfaces/order';

import { styled, Paper, TableRow, TableHead, TableContainer, TableBody, Table } from '@mui/material';
import { OrderRow } from '..';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  


export function OrdersTable({ orders }: { orders: Order[] }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <StyledTableCell />
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="right">Products</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Total</StyledTableCell>
            <StyledTableCell align="right">User</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row) => (
            <OrderRow key={row._id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}