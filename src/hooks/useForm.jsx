import { useState } from 'react';
import { validateEmail } from '../utils';

export const useForm = (initialState = {}, validatedFields = []) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState(validatedFields);

  const resetValues = () => {
    setValues(initialState);
  };

  const handleSubmit = (onSubmit) => {
    if (!verificationErrors()) {
      onSubmit();
      resetValues();
    }
  };

  const verificationErrors = () => {
    let validation = false;

    if (Object.keys(errors).length > 0) {
      Object.values(errors).forEach((el) => {
        if (el === true) validation = el;
      });
    }

    return validation;
  };

  const validation = (key) => {
    const validation = { ...errors };
    const keysArr = Object.keys(validatedFields);
    const index = keysArr.indexOf(key);

    if (keysArr.length > 0 && index >= 0) {
      switch (key) {
        case 'email':
          validateEmail(values[key])
            ? (validation[key] = false)
            : (validation[key] = true);
          break;

        case 'password':
          values[key].length > 5
            ? (validation[key] = false)
            : (validation[key] = true);
          break;

        default:
          validation[key] = !values[key];
          break;
      }
    }
    return validation;
  };

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });

    setErrors(validation(target.name));
  };

  return [values, handleInputChange, handleSubmit, errors];
};
