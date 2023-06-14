import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import css from './FormContact.module.css';
import { Lable, BtnAddContact } from './FormContact.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const FormContact = ({ onSubmitData }) => {
  const onSubmit = (values, { resetForm }) => {
    onSubmitData(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      <Form className={css.form}>
        <Lable>
          Name
          <Field
            type="text"
            name="name"
            className={css.input}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Adrian"
            autoFocus
            required
          />
        </Lable>
        <Lable>
          Number
          <Field
            type="tel"
            name="number"
            className={css.input}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="380671234567"
            required
          />
        </Lable>
        <BtnAddContact type="submit">Add contact</BtnAddContact>
      </Form>
    </Formik>
  );
};
