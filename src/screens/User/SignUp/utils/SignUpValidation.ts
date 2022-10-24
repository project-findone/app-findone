import * as Yup from 'yup';

export const FieldsValidate = async (data: object) => {
  const schema = Yup.object().shape({
    name: Yup.string().required('Campo é obrigatório'),
    lastname: Yup.string().required('Campo é obrigatório'),
    personCPF: Yup.string().required('Campo é obrigatório'),
    phoneNumber: Yup.string().required('Campo é obrigatório'),
    birthDate: Yup.string().required('Campo é obrigatório'),
    personCEP: Yup.string().required('Campo é obrigatório').min(6),
    gender: Yup.string().required('Campo é obrigatório'),
    email: Yup.string().email('Email deve ser válido').required('Email é obrigatório'),
    password: Yup.string().required('Senha é obrigatória'),
    confirmPass: Yup.string().required('Campo é obrigatório'),
  });

  const validate = await schema.validate(data, { abortEarly: false });
  return validate;
};
