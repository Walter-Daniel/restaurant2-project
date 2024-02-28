import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Stack } from "@mui/material";

//iconos
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import { ModalComponent } from "../ModalComponent";
import { ProductsForm } from "../ProductsForm";
import { Order } from "../../interfaces/order";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const styles = {
  update: {
    borderRadius: "50%",
    minWidth: "10px",
    width: "35px",
    height: "35px",
    backgroundColor: "#06d6a0",
    color: "#fff",
  },
  delete: {
    borderRadius: "50%",
    minWidth: "10px",
    width: "35px",
    height: "35px",
    backgroundColor: "#db092a",
    color: "#fff",
  },
};

export const OrdersTable = ({ data }: { data: Order[] }) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>Products</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
              <StyledTableCell>Total</StyledTableCell>
              <StyledTableCell>User</StyledTableCell>
              <StyledTableCell>Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
                  {
                    data.map((el) =>(
                      <StyledTableRow>   
                        <StyledTableCell>{el._id}</StyledTableCell>
                        <StyledTableCell>
                            {
                                el.products.map(el => (
                                    <>
                                        <span>{el.productId.name}</span><br />
                                        <span>Cantidad: {el.quantity}</span><br />
                                    </>
                                ))
                            }
                        </StyledTableCell>
                        <StyledTableCell>{el.status}</StyledTableCell>
                        <StyledTableCell>{el.total}</StyledTableCell>
                        <StyledTableCell>{el.user._id}</StyledTableCell>
                        <StyledTableCell align="right">
                          <Stack direction="row" spacing={1}>
                            <ModalComponent children={<ProductsForm />} title='Editar producto' btnName={<CreateIcon />} btnStyle='text' isStyled={styles.update}/>
                            <Button style={styles.delete}><DeleteIcon /></Button>
                          </Stack>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))
                  }
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

