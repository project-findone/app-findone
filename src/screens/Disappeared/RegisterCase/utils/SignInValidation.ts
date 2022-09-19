import * as Yup from 'yup';

export const FieldsValidate = async (data: object) => {
  const schema = Yup.object().shape({
    name: Yup.string().required('Este campo é obrigatório'),
    last_name: Yup.string().required('Este campo é obrigatório'),
    age: Yup.string().required('Este campo é obrigatório'),
    cpf: Yup.string().required('Este campo é obrigatório'),
    cep: Yup.string().required('Este campo é obrigatório'),
    state: Yup.string().required('Este campo é obrigatório'),
    city: Yup.string().required('Este campo é obrigatório'),
    caracteristicas: Yup.string().required('Este campo é obrigatório'),
    others: Yup.string().required('Este campo é obrigatório'),
    street: Yup.string().required('Este campo é obrigatório'),
    description: Yup.string().required('Este campo é obrigatório'),
  });

  const validate = await schema.validate(data, { abortEarly: false });
  return validate;
};
