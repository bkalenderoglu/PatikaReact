import * as yup from "yup";

const validations = yup.object().shape({

    /* keys are matching according to "initialValues" keys in useFormik */
    email: yup.string().email('Enter a valid email').required('*required'),
    password: yup.string().min(5).required('*required'),
    passwordConfirm: yup.string().oneOf([yup.ref('password')], 'Passwords are not matching.').required('*required')
  });

export default validations;