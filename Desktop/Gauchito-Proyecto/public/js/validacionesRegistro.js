window.onload = function(){

    let registerForm = document.querySelector ('form')
    
    registerForm.name.focus()

    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault()
    
    let errors = []

        let name = document.querySelector('#name')
        let email = document.querySelector('#email')
        let password = document.querySelector('#password')
        let inputImg = document.querySelector('#inputImg')
    
        // VALIDACIONES NOMBRE

        if (name.value == '') {
            errors.push('El campo nombre no puede estar vacio!')
            name.classList.add('is-invalid')
            name.classList.remove('is-valid')
        }
        else if (name.value.length < 3){
            errors.push('El nombre no puede tener menos de 3 caracteres!')
            name.classList.add('is-invalid')
            name.classList.remove('is-valid')
        }
        else{
            name.classList.add('is-valid')
            name.classList.remove('is-invalid')
        }

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

        else if (password.value.length < 6 || password.value.length > 12){
            errors.push('El password debe tener entre 6 y 12 caracteres!')
            password.classList.add('is-invalid')
        }
        else{
            password.classList.add('is-valid')
            password.classList.remove('is-invalid')
        }


        //VALIDACIONES IMAGEN
        let imagenValue = inputImg.value.trim()
        let validExtensions = ['jpg','png','jpeg','gif'];
        let extImagen = imagenValue.split(".").pop()



            if (imagenValue !== "" && validExtensions.includes(extImagen) ) {
                inputImg.classList.add('is-valid')
                password.classList.remove('is-invalid')
            }
            else{
                errors.push("Adjunte una imagen con formato: " + validExtensions)
                inputImg.classList.add('is-invalid')
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

            Swal.fire(
                'Excelente!',
                'Registro completo!',
                'success'
            )

            registerForm.submit()
        }

    })
    }