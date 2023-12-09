export default function validation(input) {
    const errors = {};
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const regexPassword = new RegExp("[0-9]");

    //*email
    if (!input.email.length) errors.email = "Ingresar email";
    else {
        if (!regexEmail.test(input.email)) {
            errors.email = "Ingresar email válido";
        }
        if (input.email.length > 35) {
            errors.email = "Menor a 35 caracteres";
        }
    }

    //*password
    if (!input.password.length) errors.password = "Ingresar pasword";
    else {
        if (!regexPassword.test(input.password)) {
            errors.password = "Mínimo 1 número";
        }
        if (input.password.length < 6) {
            errors.password = "Mínimo 6 caracteres";
        }
        if (input.password.length > 10) {
            errors.password = "Máximo 10 caracteres";
        }
    }

    return errors;
}

// console.log(
//     validation({
//         email: "a@a.co",
//         password: "a114fg9w2t1",
//     })
// );
