export const confermation = (email, password, userName) => {
  const error = {};
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) {
    error.email = "email is invalid";
  }
  if (!isPasswordValid) {
    error.password =
      "password is invalid : Minimum eight characters, at least one capital letter and one number ";
  }
  if (userName == null) {
  } else if (userName.length == 0) {
    error.userName = "name required";
  }

  return error;
};
