import * as yup from 'yup';

export const doctorValidationSchema = yup.object().shape({
  name: yup.string().required(),
  clinic_id: yup.string().nullable(),
});
