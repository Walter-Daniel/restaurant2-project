import * as yup from "yup";

const namePattern = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

export const productValidation = yup.object({
    name: yup.string()
        .trim()
        .required('Campo requerido')
        .matches(namePattern, 'Este campo solo puede contener letras y espacios')
        .min(5, 'El campo debe tener un min. de 5 caracteres')
        .max(30, 'El campo debe tener un max. de 30 caracteres'),
    description: yup.string()
        .trim()
        .required('Campo requerido')
        .matches(namePattern, 'Este campo solo puede contener letras y espacios')
        .min(5, 'El campo debe tener un min. de 5 caracteres')
        .max(30, 'El campo debe tener un max. de 30 caracteres'),
    price: yup.number().required("El precio es obligatorio"),
    category: yup.string()
        .trim()
        .required('Campo requerido')
        .matches(namePattern, 'Este campo solo puede contener letras y espacios')
        .min(5, 'El campo debe tener un min. de 5 caracteres')
        .max(30, 'El campo debe tener un max. de 30 caracteres'),
    active: yup.boolean(),
    promotion: yup.boolean(),
    image: yup.string()
        .trim()
        .required('Campo requerido')
        .max(40, 'El campo debe tener un max. de 30 caracteres'),
  });