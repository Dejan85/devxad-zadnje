//
// ─── USER REGISTRATION VALIDATOR ────────────────────────────────────────────────
//
exports.userRegisterValidator = (req, res, next) => {
  // NAME IS NOT NULL AND BETWEEN 3-20 CHARACTERS
  req
    .check("name", "Name is required")
    .notEmpty()
    .isLength({
      min: 3,
      max: 20
    })
    .withMessage("Name must be between 3 to 20 character ");

  // LASTNAME IS NOT NULL AND BETWEEN 3-20 CHARACTERS
  req
    .check("lastname", "Lastname is required")
    .notEmpty()
    .isLength({
      min: 3,
      max: 20
    })
    .withMessage("Lastname must be between 3 to 20 character ");

  // CHECK FOR EMAIL
  req
    .check("email", "Email is required")
    .notEmpty()
    .matches(/.+\@.+\..+/)
    .withMessage("Email must contain @");

  // CHECK FOR PASSWORD
  req
    .check("password", "Password is required")
    .notEmpty()
    .isLength({
      min: 6
    })
    .withMessage("Password must contain at least 6 characters")
    .isLength({
      max: 20
    })
    .withMessage("Password can contain max 20 characters")
    .custom(() => {
      if (req.body.password === req.body.confirmPassword) {
        return true;
      } else {
        return false;
      }
    })
    .withMessage("Passwords don't match.");

  // CHECK FOR ERRORS
  const errors = req.validationErrors();

  // if error show the first one as they happen
  if (errors) {
    const firstError = errors.map(error => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }

  // proceed to next middleware
  next();
};

//
// ─── USER LOGIN VALIDATOR ─────────────────────────────────────────────────────────────────
//
exports.userLoginValidator = (req, res, next) => {
  req.check("email", "Email is required.").notEmpty();
  req.check("password", "Password is require.").notEmpty();

  const error = req.validationErrors();

  if (error) {
    const firstError = error.map(err => err.msg)[0];
    return res.status(400).json({ error: firstError });
  }

  // proceed to next middleware
  next();
};
