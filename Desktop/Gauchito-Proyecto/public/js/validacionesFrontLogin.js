window.onload = function(){

    let loginForm = document.querySelector ('form')

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault()
    
        let errors = []

        let email = document.querySelector('#email')
        let password = document.querySelector('#password')
    

        // VALIDACIONES EMAIL
        let emailValue = email.value.trim()
        let isEmail = /\S+@\S+\.\S+/.test(emailValue)

        if (emailValue == "") {
            errors.push('El campo email no puede estar vacio!')
            email.classList.add('is-invalid')
        }
        else if (!isEmail){
            errors.push('Ingresa un email válido!')
            email.classList.add('is-invalid')
        }
        else{
            email.classList.add('is-valid')
            email.classList.remove('is-invalid')
        }
    

        //VALIDACIONES PASSWORD
        if (password.value == '') {
            errors.push('Debes ingresar una contraseña entre 6 y 12 caracteres!')
            password.classList.add('is-invalid')
        }

        else{
            password.classList.add('is-valid')
            password.classList.remove('is-invalid')
        }
        


        //ERRORES

        let ulErrors = document.querySelector('.errores');
        ulErrors.classList.add('alert-warning')
        ulErrors.innerHTML = '';
        if (errors.length > 0) {
            for (let i = 0; i < errors.length; i++) {
                ulErrors.innerHTML += `<li > ${errors[i]} </li>`
            }
        }
        else{
            loginForm.submit()
        }

    })
}
    