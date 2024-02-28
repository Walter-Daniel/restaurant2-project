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
import { Product } from "../../interfaces/product";
import { Order } from "../../interfaces/order";
import { User } from "../../interfaces/user";


type FieldKey<T> = keyof T;
type DataObject = Product | Order | User;

export interface Column<T> {
  label: string;
  field: FieldKey<T>;
  align?: "left" | "center" | "right";
}

interface Props<T extends DataObject> {
  data: T[];
  columns: Column<T>[];
}

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

export const ProductsTable = <T extends DataObject>({ data, columns }: Props<T>) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <StyledTableCell key={index}>{column.label}</StyledTableCell>
              ))}
              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, rowIndex) => (
              <StyledTableRow key={rowIndex}>
                {columns.map((column, colIndex) => (
                  <StyledTableCell key={colIndex} align={column.align || 'left'}>
                    {getCellContent(row, column)}
                  </StyledTableCell>
                ))}
                <StyledTableCell align="right">
                  <Stack direction="row" spacing={1}>
                    <ModalComponent children={<ProductsForm />} title='Editar producto' btnName={<CreateIcon />} btnStyle='text' isStyled={styles.update}/>
                    <Button style={styles.delete}><DeleteIcon /></Button>
                  </Stack>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

const getCellContent = <T extends DataObject>(row: T, column: Column<T>): React.ReactNode => {
  const value = row[column.field];

  if (typeof value === 'object' && value !== null) {
    let a = '';
    // Utilizamos Object.entries para obtener las claves y valores del objeto
    Object.entries(value).forEach(([key, val]) => {
      if (key !== '_id') {
        a += val;
      }
    });
    return a;
  } else {
    return String(value);
  }

};