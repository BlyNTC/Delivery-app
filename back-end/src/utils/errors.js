// inspirado na aula do Roz tribo 14-C

const validateWithJoi = (schema, object) => {
  const { error } = schema.validate(object);
  if (error) {
    const { details: [{ message }] } = error;
    error.code = 400;
    error.message = message;
    throw error;
  }
};

const throwError = (code, message) => {
  const error = new Error();
  error.message = message;
  error.code = code;
  console.log('THROWERROR MESSAGE', error.message);
  throw error;
};

module.exports = {
  validateWithJoi,
  throwError,
};