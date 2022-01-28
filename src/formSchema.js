import * as yup from 'yup';

export default yup.object().shape({
    size:yup.string()
        .oneOf(['small','medium','large','s','m','l','S','M','L','Small','Medium','Large'], 'Size is required'),
    specialOrder:yup.string()
        .required('Instructions required. In none, type N/A'),
    name:yup.string()
        .required('Name is required')
        .min(2, 'name must be at least 2 characters'),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    olives: yup.boolean(),
    anchovies: yup.boolean(),
})