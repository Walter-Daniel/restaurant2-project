import { useState } from 'react';
import { Order } from '../../interfaces/order';
import { Box, Button, Collapse, IconButton, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import { ModalComponent, ProductsForm } from '..';


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

export function OrderRow({row}: { row: Order }) {

    const [open, setOpen] = useState(false);

    const [dataRow, setDataRow] = useState<Order | null>(null);

    const handleRowData = (rowData:Order) => {
      setDataRow(rowData)
    }

    console.log(dataRow)
  
    return (
      <>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row._id}
          </TableCell>
          <TableCell align="right">
              {
                  row.products.map(el => (
                      <Typography variant='body2' key={row._id + el.productId._id}>
                          {el.productId.name}
                      </Typography>
                  ))
              }
          </TableCell>
          <TableCell align="right">{row.status}</TableCell>
          <TableCell align="right">{row.total}</TableCell>
          <TableCell align="right">{row.user.fullName}</TableCell>
          <TableCell align="right">
            <Stack direction="row" spacing={1} justifyContent={'end'}>
              <ModalComponent children={<ProductsForm />} title='Editar producto' btnName={<CreateIcon />} btnStyle='text' isStyled={styles.update}/>
              <Button style={styles.delete} onClick={() => handleRowData(row)}><DeleteIcon /></Button>
            </Stack>
        </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Detalle de la Orden
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>ProductID</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell align="right">Amount</TableCell>
                      <TableCell align="right">Total price ($)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.products.map((product) => (
                      <TableRow key={product.productId._id}>
                        <TableCell component="th" scope="row">
                          {product._id}
                        </TableCell>
                        <TableCell>{product.productId.name}</TableCell>
                        <TableCell align="right">{product.quantity}</TableCell>
                        <TableCell align="right">
                          Precio individual
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    );
  }