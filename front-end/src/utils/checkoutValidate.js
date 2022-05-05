import CheckoutSchema from './checkoutSchema';

export const validateWithJoi = (schema, object) => {
  const validate = schema.validate(object);
  const { error } = validate;
  if (error) {
    const { details: [{ message }] } = error;
    error.code = 400;
    error.message = message;
    throw error;
  }
  return validate;
};

export const CheckoutValidate = (checkoutBody) => {
  try {
    const validate = validateWithJoi(CheckoutSchema, checkoutBody);
    console.log('========================>>>>>>', validate);
    return false;
  } catch (error) {
    return true;
  }
};
