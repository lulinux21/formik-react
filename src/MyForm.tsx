import React from 'react';
import { withFormik, FormikProps } from 'formik';
import { ContactFormValues } from './model/Contact';

// Defina a interface para os dados do formulário
export interface FormValues {
  contact: ContactFormValues;
}
// Defina a interface para as props do componente
interface OtherProps {
  contactData?: ContactFormValues;
  handleSubmit: (values: FormValues) => void; // Certifique-se de que a assinatura de handleSubmit esteja alinhada com FormData
}

// Defina o componente de formulário
const MyForm: React.FC<FormikProps<FormValues> & OtherProps> = ({
  values,
  setFieldValue,
  handleChange,
  handleSubmit,
  handleBlur,
  isSubmitting,
}) => (
  <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        onChange={(e) => {
          handleChange(e);
          setFieldValue("contact.name", e.target.value)
        }}
        onBlur={handleBlur}
        value={values.contact.name}
      />
    </div>
    <div>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        onChange={(e) => {
          handleChange(e);
          setFieldValue("contact.email", e.target.value)
        }}
        onBlur={handleBlur}
        value={values.contact.email}
      />
    </div>
    <div>
      <label htmlFor="message">Message:</label>
      <textarea
        name="message"
        onChange={(e) => {
          handleChange(e);
          setFieldValue("contact.message", e.target.value)
        }}
        onBlur={handleBlur}
        value={values.contact.message}
      />
    </div>
    <button type="submit" disabled={isSubmitting}>
      Submit
    </button>
  </form>
);

// Utilize withFormik para configurar o comportamento do formulário
const MyFormWithFormik = withFormik<OtherProps, FormValues>({
  mapPropsToValues: ({ contactData }) => {
    return {
      contact: contactData || { name: '', email: '', message: '' },
    };
  },
  handleSubmit: (values, { props, setSubmitting }) => {
    props.handleSubmit(values);
    setSubmitting(false);
  },
})(MyForm);

export default MyFormWithFormik;
