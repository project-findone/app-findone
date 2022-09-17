import * as Yup from 'yup';

export const FieldsValidate = async (data: object) => {
  const schema = Yup.object().shape({
    email: Yup.string().email('Email deve ser válido').required('Email é obrigatório'),
    password: Yup.string().required('Senha é obrigatória'),
  });

  const validate = await schema.validate(data, { abortEarly: false });
  return validate;
};
