import * as Yup from 'yup';

export const DisappearedValidate = async (data: object) => {
  const schema = Yup.object().shape({
    name: Yup.string().required('Este campo é obrigatório'),
    lastname: Yup.string().required('Este campo é obrigatório'),
    age: Yup.number().required('Este campo é obrigatório'),
    gender: Yup.string().required('Este campo é obrigatório'),
    personCPF: Yup.number().required('Este campo é obrigatório'),
    personCEP: Yup.string().required('Este campo é obrigatório'),
    state: Yup.string().required('Este campo é obrigatório'),
    city: Yup.string().required('Este campo é obrigatório'),
  });

  const validate = await schema.validate(data, { abortEarly: false });
  return validate;
};

export const CaseValidate = async (data: object) => {
  const schema = Yup.object().shape({
    state: Yup.string().required('Este campo é obrigatório'),
    city: Yup.string().required('Este campo é obrigatório'),
    street: Yup.string().required('Este campo é obrigatório'),
  });

  const validate = await schema.validate(data, { abortEarly: false });
  return validate;
};
