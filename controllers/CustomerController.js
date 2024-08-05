const CustomerModel = require("../models/CustomerModel");
const bcrypt = require("bcrypt");

exports.signUpPost = (req, res) => {
    const { customerName, email, customerMobileNumber, password, doorNumber, city, pincode, district, state } = req.body;

    // Check if customer already exists with the given mobile number
    CustomerModel.findOne({ customerMobileNumber: customerMobileNumber })
        .then(customer => {
            if (customer) {
                // Customer already exists
                res.render('SignUp', {
                    title: "SignUp",
                    errorMessage: "Mobile number already registered. Please use a different number or log in."
                });
            } else {
                // Hash the password
                bcrypt.hash(password, 10)
                    .then(hash => {
                        // Create a new customer record
                        CustomerModel.create({
                            customerName,
                            email,
                            customerMobileNumber,
                            doorNumber,
                            city,
                            pincode,
                            district,
                            state,
                            password: hash
                        })
                        .then(() => res.redirect('/api/v1/login'))
                        .catch(err => {
                            console.error("Error creating customer:", err);
                            res.render('SignUp', {
                                title: "SignUp",
                                errorMessage: "An error occurred while creating your account. Please try again."
                            });
                        });
                    })
                    .catch(error => {
                        console.error("Error hashing password:", error);
                        res.render('SignUp', {
                            title: "SignUp",
                            errorMessage: "An error occurred while processing your password. Please try again."
                        });
                    });
            }
        })
        .catch(err => {
            console.error("Error checking customer existence:", err);
            res.render('SignUp', {
                title: "SignUp",
                errorMessage: "An error occurred during sign-up. Please try again."
            });
        });
};
