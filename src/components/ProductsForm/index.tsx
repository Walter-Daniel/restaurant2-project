import { useFormik } from 'formik';
import { productValidation } from '../../utilities/ProductValidation';
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
} from '@mui/material';
import { useCategories, 
  // useProductsMutation 
} from '../../hooks';

interface ProducsLike  {
  _id?: string;
  name: string,
  detail: string,
  price: number,
  category: string,
  active: boolean,
  promo: boolean,
  image: string;
}

interface Props {
  values?: ProducsLike
}

export const ProductsForm: React.FC<Props> = ({values}) => {

  const { isError, isLoading, data } = useCategories();
  // const productMutation = useProductsMutation();

  const formik = useFormik({
    initialValues: {
      name: values ? values.name : '',
      detail: values ? values.detail : '',
      price: values ? values.price : 0,
      category: values ? values.category : '63516f6fc5a32a62d410b13c',
      active: values ? values.active : false,
      promo: values ? values.promo : false,
      image: values ? values.image: ''
    },
    validationSchema: productValidation,
    onSubmit: (values) => {  
      console.log(values)  
      // productMutation.mutate(values)
      // resetForm();
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
              error={!!formik.errors.detail && formik.touched.detail}
              helperText={formik.touched.detail && formik.errors.detail}
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
           <TextField
              label="Imagen"
              name="image"
              variant="outlined"
              margin="normal"
              value={formik.values.image}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={!!formik.errors.image && formik.touched.image}
              helperText={formik.touched.image && formik.errors.image}
            />
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
          <Button variant="contained" type="submit" fullWidth>
            Enviar
          </Button>
        </form>
    </div>
  );
};

