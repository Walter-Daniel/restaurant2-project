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
} from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


const currencies = [
  {
    value: 'pizzas',
    label: 'Pizzas',
  },
  {
    value: 'sandwich',
    label: 'Sandwich',
  },
  {
    value: 'empanadas',
    label: 'Empanadas',
  },
]


export const ProductsForm: React.FC = () => {

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      price: '',
      category: 'sandwich',
      active: false,
      promotion: false,
      image: File,
    },
    validationSchema: productValidation,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
              name="description"
              variant="outlined"
              margin="normal"
              value={formik.values.description}
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
            <FormControl sx={{ margin:'1rem 0' }}>
              <InputLabel id="category">Categoría</InputLabel>
              <Select
                labelId="category"
                id="demo-simple-select"
                label="Categoría"
                name="category"
                defaultValue="sandwich"
                value={formik.values.category}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControlLabel
              control={<Checkbox name="active" />}
              label="Activo"
              checked={formik.values.active}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <FormControlLabel
              control={<Checkbox name="promotion" />}
              label="Promoción"
              checked={formik.values.promotion}
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

