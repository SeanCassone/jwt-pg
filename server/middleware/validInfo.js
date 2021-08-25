module.exports = function (req, res, next) {
  const { email, name, password } = req.body;

  function validEmail(userEmail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
  }

  if (req.path === "/register") {
    // check for empty values
    if (![email, name, password].every(Boolean)) {
      return res.status(401).json("Missing Credentials");
      //check if email is valid
    } else if (!validEmail(email)) {
      return res.status(401).json("Invalid Email");
    }
  } else if (req.path === "/login") {
    // check for empty values
    if (![email, password].every(Boolean)) {
      return res.status(401).json("Missing Credentials");
      //check if email is valid
    } else if (!validEmail(email)) {
      return res.json("Invalid Email");
    }
  }

  next();
};
