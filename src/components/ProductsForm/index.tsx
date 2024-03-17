import { useFormik } from "formik";
import { productValidation } from "../../utilities/ProductValidation";
import {
  TextField,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Button,
  Select,
  FormControl,
  InputLabel,
  Typography,
} from "@mui/material";
import { useCategories, useProductsMutation } from "../../hooks";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';



interface Props  {
  _id?: string;
  name: string,
  detail: string,
  price: number,
  category: string,
  active: boolean,
  promo: boolean,
}

export const ProductsForm: React.FC = () => {

  const { isError, isLoading, data } = useCategories();
  const productMutation = useProductsMutation();

  const formik = useFormik({
    initialValues: {
      name: 'Prueba',
      detail: 'HOLA ASLJDLKASJ',
      price: 3000,
      category:'',
      active: false,
      promo: false,
      // image: File,
    },
    validationSchema: productValidation,
    onSubmit: (values:Props, {resetForm}) => {
      // dispatch(fetchProducts(values));
      productMutation.mutate(values)
      resetForm();
    },
  });

  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TextField
              label="Nombre"
              name="name"
              variant="outlined"
              margin="normal"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={!!formik.errors.name && formik.touched.name}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              label="Descripción"
              name="detail"
              variant="outlined"
              margin="normal"
              value={formik.values.detail}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              multiline
              rows={4}
            />
            <TextField
              label="Precio"
              name="price"
              type="number"
              variant="outlined"
              margin="normal"
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={!!formik.errors.price && formik.touched.price}
              helperText={formik.touched.price && formik.errors.price}
            />
           {isLoading && <Typography>Cargando...</Typography>}
           {isError && <Typography>Error al cargar categorías</Typography>}
           {data && (
             <FormControl sx={{ margin:'1rem 0' }}>
              <InputLabel id="category">Categoría</InputLabel>
              <Select
                labelId="category"
                id="demo-simple-select"
                label="Categoría"
                name="category"
                // defaultValue="sandwich"
                value={formik.values.category}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                {
                  data.map(item => (
                    <MenuItem key={item._id} value={item._id}>
                      {item.name}
                    </MenuItem>
                  ))
                }
                
              </Select>
            </FormControl>
           )}
            <FormControlLabel
              control={<Checkbox name="active" />}
              label="Activo"
              checked={formik.values.active}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <FormControlLabel
              control={<Checkbox name="promo"/>}
              label="Promoción"
              checked={formik.values.promo}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
            htmlFor="image-upload"
            sx={{ backgroundColor:'black', margin:'1rem 0' }}
            fullWidth
          >
            Seleccionar imagen
          <input
            accept="image/*"
            id="image-upload"
            type="file"
            hidden
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          </Button>
          <Button variant="contained" type="submit" fullWidth>
            Enviar
          </Button>
        </form>
    </div>
  );
};

