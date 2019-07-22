const Validator = require("validator"),
  isEmpty = require("is-empty");

module.exports = ValidateRegisterInput = userInput => {
  //create errors object to store error messages
  let errors = {};

  //convert empty fields to an empty string so we can use validator on them
  userInput.name = !isEmpty(userInput.name) ? userInput.name : "";
  userInput.company = !isEmpty(userInput.company) ? userInput.company : "";
  userInput.jobTitle = !isEmpty(userInput.jobTitle) ? userInput.jobTitle : "";
  userInput.address = !isEmpty(userInput.address) ? userInput.address : "";
  userInput.mobileNo = !isEmpty(userInput.mobileNo) ? userInput.mobileNo : "";
  userInput.officeNo = !isEmpty(userInput.officeNo) ? userInput.officeNo : "";
  userInput.faxNo = !isEmpty(userInput.faxNo) ? userInput.faxNo : "";
  userInput.email = !isEmpty(userInput.email) ? userInput.email : "";
  userInput.password = !isEmpty(userInput.password) ? userInput.password : "";
  userInput.password2 = !isEmpty(userInput.password2)
    ? userInput.password2
    : "";

  //check name
  if (Validator.isEmpty(userInput.name)) {
    errors.name = "Name field is required";
  }
  //check company
  if (Validator.isEmpty(userInput.company)) {
    errors.company = "company field is required";
  }
  //check job title
  if (Validator.isEmpty(userInput.jobTitle)) {
    errors.jobTitle = "Job Title field is required";
  }
  //check address
  if (Validator.isEmpty(userInput.address)) {
    errors.address = "address field is required";
  }

  //check email
  if (Validator.isEmpty(userInput.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(userInput.email)) {
    errors.email = "Email is invalid";
  }

  //check password fields
  if (Validator.isEmpty(userInput.password)) {
    errors.password = "Password field is required";
  }

  if (Validator.isEmpty(userInput.password2)) {
    errors.password2 = "Confirm password field is required";
  }
  if (!Validator.isLength(userInput.password, { min: 8, max: 30 })) {
    errors.password = "Password must be at least 8 characters";
  }
  if (!Validator.equals(userInput.password, userInput.password2)) {
    errors.password2 = "Passwords must match";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
