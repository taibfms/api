import * as yup from 'yup';

export const yupCreateTimeInput = yup.object().shape({
  team: yup.string().required(),
});

