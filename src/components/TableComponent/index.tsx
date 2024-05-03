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
import { User } from "../../interfaces/user";
import { getCellContent } from "../../helpers/getCellContent";
import { Category } from "../../interfaces/category";
import { useState } from "react";
import { SAlert } from "../../helpers/SWAlert";
import { Product } from "../../interfaces/product";
// import { Product } from '../../interfaces/dashboard';


type FieldKey<T> = keyof T;
type DataObject = Product | Order | User | Category;

export interface Column<T> {
  label: string;
  field: FieldKey<T>;
  align?: "left" | "center" | "right";
}

export interface Props<T extends DataObject> {
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

export const TableComponent = <T extends DataObject>({ data, columns }: Props<T>) => {

  const [rowData, setRowData] = useState<DataObject | null>(null);

  const handleRowData = (rowData:DataObject) => {
    setRowData(rowData);
    SAlert({ 
      title: "Deseas eliminar el producto?", 
      text: "Si lo eliminas, ya no tendrás acceso a él.",
      icon: "question",
      confirmBtn: "Confirmar",
      titleConfirm: "Producto eliminado",
      textConfirm: "Producto ha sido eliminado con éxito",
    });
  }

  console.log(rowData, 'producto a editar')
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <StyledTableCell key={index} align={column.label === 'ID' ? 'left' : 'right'}>{column.label}</StyledTableCell>
              ))}
              <StyledTableCell align="right">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, rowIndex) => (
              <StyledTableRow key={rowIndex}>
                {columns.map((column, colIndex) => (
                  <StyledTableCell key={colIndex} align={column.label === 'ID' ? 'left' : 'right'}>
                    {getCellContent(row, column)}
                  </StyledTableCell>
                ))}
                <StyledTableCell align="right">
                  <Stack direction="row" spacing={1} justifyContent='flex-end'>
                    <ModalComponent  title='Editar producto' btnName={<CreateIcon />} btnStyle='text' isStyled={styles.update}>
                    <ProductsForm values={row as Product} />
                    </ModalComponent>
                    <Button style={styles.delete} onClick={() => handleRowData(row)} ><DeleteIcon /></Button>
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