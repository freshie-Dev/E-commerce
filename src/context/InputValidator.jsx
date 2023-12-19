import { createContext } from "react";
import { React, useState } from "react";
import { useContext } from "react";

import UserContextProvider from "./UserContext";

import validator from 'validator';

const ValidatorContext = createContext();
const ValidationProvider = ({ children }) => {

    const { user, errorInfo, setErrorInfo } = UserContextProvider();
    const [wrongInput, setWrongInput] = useState({
        username: true,
        password: true,
        confirmPassword: true,
        phone: true,
    });

    // const [confirmPass, setConfirmPass] = useState("");
    const [country, setCountry] = useState("+92");

    const [verification, setVerification] = useState({
        username: false,
        password: false,
        confirmPassword: false,
        type: false,
        phone: false
    });




    const printSomething = (message) => {
        const isLengthValid = validator.isLength(message, { min: 3 });
        return (isLengthValid)
    };
    //! 1: Validation functions for different types of input fields.
    const validateUsername = (username) => {
        // Username conditions
        const isAlphaNumeric = validator.isAlphanumeric(username, 'en-US', { ignore: '_.-@' });
        const isLengthValid = validator.isLength(username, { min: 3 });
        const isEmpty = username.trim() === '';
        // const isUnique = /* Your logic to check if the username is unique */;

        const errors = [];

        if (!isAlphaNumeric) {
            errors.push("Username can only contain '_', '-', '@' special characters.");
        }
        if (!isLengthValid) {
            errors.push("Username must be at least 3 characters long.");
        }

        // if (!isUnique) {
        //     errors.push("Username must be unique.");
        // }

        return {
            // isValid: isAlphaNumeric && isUnique,
            isValid: isAlphaNumeric && isLengthValid && !isEmpty,
            errors: errors
        };
    };
    const validatePassword = (password) => {
        // Password conditions
        const isLengthValid = validator.isLength(password, { min: 6 });
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        const hasNumber = /\d/.test(password);

        const errors = [];

        if (!isLengthValid) {
            errors.push("Password must be at least 6 characters long.");
        }

        if (!hasUpperCase) {
            errors.push("Password must contain at least one uppercase letter.");
        }

        if (!hasLowerCase) {
            errors.push("Password must contain at least one lowercase letter.");
        }

        if (!hasSpecialChar) {
            errors.push("Password must contain at least one special character.");
        }

        if (!hasNumber) {
            errors.push("Password must contain at least one number.");
        }

        return {
            isValid: isLengthValid && hasUpperCase && hasLowerCase && hasSpecialChar && hasNumber,
            errors: errors
        };
    };
    const validateConfirmPassword = (password, confirmPassword) => {
        // Confirm password condition
        const isMatch = validator.equals(password, confirmPassword);
        const isEmpty = confirmPassword.trim() === '';

        const errors = [];

        if (!isMatch) {
            errors.push("Passwords do not match.");
        }
        if(isEmpty) {
            errors.push("Confirm password cannot be empty.");
        }

        return {
            isValid: isMatch && !isEmpty,
            errors: errors
        };
    };
    const validatePhoneNumber = (country, phoneNumber) => {

        // Selecting rejex according to the country
        let regex;
        let errors = [];
        let error;
        switch (country) {
            case '+92': //("+92", "3345760775");//Pakistan
                regex = /^\+92-?3[0-9]{2}-?[0-9]{7}$/;
                error = (
                    <div className=" inline">
                        Phone number format: <br />
                        3XX-XXXXXXX
                    </div>
                );
                break;
            case '+1': //("+1-123-456-7890");//USA
                regex = /^\+1-?[0-9]{3}-?[0-9]{3}-?[0-9]{4}$/;
                break;
            case '+44': //("+44-7012-345-678");//United Kingdom
                regex = /^(\+44|0)7[0-9]{9}$/;
                break;
            case '+86': //("+86-130-1234-5678");// China
                regex = /^(\+86|0)?1[3-9][0-9]{9}$/;
                break;
            case '+966': //("+966-512-345-678");// Saudi Arabia
                regex = /^(\+966|0)?5[0-9]{8}$/;
                break;
            case '+971': //("+971-50-123-4567");// Dubai (United Arab Emirates)
                regex = /^(\+971|0)?5[0-9]{8}$/;
                break;
            // Add more cases for other country codes

            default:
                // Default to a generic regex if the country code is not recognized
                regex = /^.*/;
                break;
        }
        const fullPhoneNumber = country.concat(phoneNumber)
        const isMatch = regex.test(fullPhoneNumber);

        if (!isMatch) {
            errors.push(error)
        }


        return {
            isValid: isMatch,
            errors: errors
        }

    };
    const validateType = (type) => {
        const errors = [];
        const isEmpty = type.trim() === ''; 

        if(isEmpty) {
            errors.push("Select you account type")
        }

        return {
            isValid:!isEmpty,
            errors: errors
        }
    }

    //! 2: Select the required validation function.
    const validate = (name, value) => {
        var result;
        if (name === "username") {
            result = validateUsername(value);
        } else if (name === "password") {
            result = validatePassword(value);
        } else if (name === "confirmPassword") {
            result = validateConfirmPassword(user.password, user.confirmPassword);
        } else if (name === "phone") {
            result = validatePhoneNumber(country, value);
        } else if (name === "type") {
            result = validateType(value);
        }
        return result;
    };

    //! 3: Verify the Input from the selected validation function.
    const verifyInput = (name, value) => {
        // console.log(name, value)
        let verificationResult = validate(name, value)
        // console.log(verificationResult)
        if (verificationResult) {
            setVerification(prevVerification => {
                if (!verificationResult.isValid) {
                    setWrongInput(prevValue => { return { ...prevValue, [name]: true } });
                } else {
                    setWrongInput(prevValue => { return { ...prevValue, [name]: false } });
                }
                return { ...prevVerification, [name]: verificationResult };
            });
            // console.log(name, value)
            if (!errorInfo.name) {
                setErrorInfo(prevValue => {
                    return {
                    ...prevValue,
                        [name]: true
                    }
                });
            }
            if (name === "password") {
                verifyInput("confirmPassword", value)
            }
        }
    };

    return (
        <ValidatorContext.Provider value={
            {
                printSomething,
                verifyInput,
                verification,
                wrongInput,
                country, setCountry,
            }
        }>
            {children}
        </ValidatorContext.Provider>
    )
};
const ValidationContextProvider = () => {
    return (useContext(ValidatorContext))
};


export { ValidationProvider };
export default ValidationContextProvider;


























