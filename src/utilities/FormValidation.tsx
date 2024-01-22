import * as yup from 'yup';

const namePattern = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
const passwordPattern =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const email = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export const loginValidate = yup.object().shape({
    email: yup.string()
              .trim()
              .required('El correo es requerido')
              .email('El email no es válido')
              .matches(email, 'El email no es válido'),
    password: yup.string().trim().required('La contraseña es requerida').min(4, "El mínimo debe ser 4 carácteres").max(9, "El máximo debe ser de 9 carácteres")
});

export const registerValidate = yup.object().shape({            
    displayName: yup.string()
                  .trim()
                  .required('Campo requerido')
                  .matches(namePattern, 'Este campo solo puede contener letras y espacios')
                  .min(5, 'El campo debe tener un min. de 5 caracteres')
                  .max(30, 'El campo debe tener un max. de 30 caracteres'),               
    email: yup.string()
                  .trim()
                  .required('Campo requerido')
                  .email('El email no es válido')
                  .matches(email, 'El email no es válido')
                  .max(30, 'El email debe tener un max. de 30 carácteres'),               
    password: yup.string()
                  .trim()
                  .required('Campo requerido')
                  .min(6, 'La contraseña debe tener un min. 6 caracteres')
                  .max(12, 'La contraseña debe tener un max. de 12 caracteres')
                  .matches(passwordPattern, 'La contraseña debe contener por lo menos una letra mayúscula, una minúscula, un número y un caracter especial.'),
    password2: yup.string()
                  .required('Campo requerido')
                  .oneOf([yup.ref('password')], 'Las contraseñas no coinciden'),
  }).required();