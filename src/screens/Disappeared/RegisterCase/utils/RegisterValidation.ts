import * as Yup from 'yup';

type Props = {
  disappeared: {
    name: string;
    lastname: string;
    age: number;
    birthDate: Date;
    personCPF: string;
    gender: string;
    personCEP: string;
    state: string;
    city: string;
    personKinship: string;
    description: string;
  },
  case: {
    state: string;
    city: string,
    district: string,
    street: string,
    description: string,
    latitude: string,
    longitude: string
  },
  characteristics: number[],
  passCheck: boolean,
  skin?: string,
  haircolor?: string,
  eye?: string,
  hair?: string,
};

export const DisappearedValidate = async (data: Props, parent: string) => {
  console.log(parent);
  let schema;
  if (parent === 'Parente') {
    schema = Yup.object().shape({
      disappeared: Yup.object().shape({
        name: Yup.string().required('Este campo é obrigatório'),
        lastname: Yup.string().required('Este campo é obrigatório'),
        age: Yup.number().required('Obrigatório'),
        gender: Yup.string().required('Este campo é obrigatório'),
        birthDate: Yup.string().required('Este campo é obrigatório'),
        personCPF: Yup.number().required('Este campo é obrigatório'),
        personCEP: Yup.number().required('Este campo é obrigatório'),
        state: Yup.string().required('Campo obrigatório'),
        city: Yup.string().required('Este campo é obrigatório'),
      }),
      case: Yup.object().shape({
        state: Yup.string().required('Campo obrigatório'),
        city: Yup.string().required('Este campo é obrigatório'),
        district: Yup.string().required('Este campo é obrigatório'),
        street: Yup.string().required('Este campo é obrigatório'),
      }),
    });
  } else if (parent === 'Amigo') {
    schema = Yup.object().shape({
      disappeared: Yup.object().shape({
        name: Yup.string().required('Este campo é obrigatório'),
        lastname: Yup.string().required('Este campo é obrigatório'),
        age: Yup.number().required('Obrigatório'),
        gender: Yup.string().required('Este campo é obrigatório'),
        personCEP: Yup.number().required('Este campo é obrigatório'),
        state: Yup.string().required('Campo obrigatório'),
        city: Yup.string().required('Este campo é obrigatório'),
      }),
      case: Yup.object().shape({
        state: Yup.string().required('Campo obrigatório'),
        city: Yup.string().required('Este campo é obrigatório'),
        district: Yup.string().required('Este campo é obrigatório'),
        street: Yup.string().required('Este campo é obrigatório'),
      }),
    });
  }

  const validate = await schema?.validate(data, { abortEarly: false });
  return validate;
};
