// controllers/AuthController.js

exports.getLogin = (req, res,next) => {
 res.render("Login", {title:"index"});
};
exports.postLogin = (req, res,next) => {
  res.redirect('/api/v1/home');
};
  
  // Example of setting errors in your login route (when errors occur)
//   exports.postLogin = (req, res) => {
//     const errors = {};
//     if (!req.body.email.endsWith('@gmail.com')) {
//       errors.email = 'Email must end with @gmail.com';
//     }
//     if (!/[a-z]/.test(req.body.password) || !/[A-Z]/.test(req.body.password) || !/[0-9]/.test(req.body.password) || !/[\W_]/.test(req.body.password)) {
//       errors.password = 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.';
//     }
  
//     if (Object.keys(errors).length > 0) {
//       req.session.errors = errors;
//       return res.redirect('/login');
//     }
//     // Handle successful login here
//     res.redirect('/dashboard');
//   };

exports.getSignUp=(req,res)=>{
    res.render("SignUp",{title:"signUp"})
  };
  
  