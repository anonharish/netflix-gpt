const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character:
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]|\\:;"'<>,.?/~`-])[A-Za-z\d!@#$%^&*()_+={}\[\]|\\:;"'<>,.?/~`-]{8,}$/;

// Allows letters, spaces, hyphens, and apostrophes. Minimum 2 characters, maximum 50.

const nameRegex = /^[a-zA-Z' -]{2,50}$/;

export const validateLogInForm = (email, pwd) => {
  if (!emailRegex.test(email)) {
    return "Email Is invalid";
  } else if (!passwordRegex.test(pwd)) {
    return "Password contains atleast 8 characters,one uppercase, lowercase and number";
  } else {
    return null;
  }
};
export const validateSignUpForm = (name, email, pwd) => {
  if (!nameRegex.test(name)) {
    return "Invalid Name";
  } else {
    return validateLogInForm(email, pwd);
  }
};
