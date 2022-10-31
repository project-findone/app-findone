import * as Yup from 'yup';

export const FieldsValidate = async (data: object) => {
  const schema = Yup.object().shape({
    name: Yup.string().required('Este campo é obrigatório'),
    lastname: Yup.string().required('Este campo é obrigatório'),
    age: Yup.number().required('Este campo é obrigatório'),
    gender: Yup.string().required('Este campo é obrigatório'),
    cpf: Yup.number().required('Este campo é obrigatório'),
    cep: Yup.string().required('Este campo é obrigatório'),
    state: Yup.string().required('Este campo é obrigatório'),
    city: Yup.string().required('Este campo é obrigatório'),
    street: Yup.string().required('Este campo é obrigatório'),
  });

  const validate = await schema.validate(data, { abortEarly: false });
  return validate;
};
