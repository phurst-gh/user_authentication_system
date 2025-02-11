const passport = require("passport");

exports.login = (req, res, next) => {
  console.log("login");
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res
        .status(500)
        .json({ message: `Error with authentication ${message}.` });
    }

    if (!user) {
      // User should be attachted, authentication failed
      return res.status(401).json({ message: "Authentication failed" });
    }

    // Auth successful, req.login establishs a session and logs the user in
    req.login(user, (loginErr) => {
      if (loginErr) {
        return res
          .status(500)
          .json({ message: `Error with login ${loginErr}.` });
      }

      if (user) {
        return res.status(200).json({ user });
      }
    });
  })(req, res, next);
};

exports.logout = (req, res, next) => {
  console.log('logout backend');
  req.logout((err) => {
    if (err) {
      console.log('logout backend error true', err);
      return res.status(500).json({ error: "Failed to log out" });
    }
    console.log('logout backend no error');

    req.session = null;
    res.clearCookie("connect.sid");
    res.status(200);
    res.send();
  });
};

exports.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return res.status(200).json({ authenticated: true });
  }
  return res.status(401).json({ authenticated: false });
};
