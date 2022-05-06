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
    validateWithJoi(CheckoutSchema, checkoutBody);
    return false;
  } catch (error) {
    return true;
  }
};
