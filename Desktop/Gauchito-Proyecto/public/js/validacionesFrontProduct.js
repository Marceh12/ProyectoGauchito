window.onload = function(){

    let productForm = document.querySelector ('form')
    

    productForm.addEventListener('submit', async (e) => {
        e.preventDefault()
    
    let errors = []

        let name = document.querySelector('#name')
        let description = document.querySelector('#description')
        let price = document.querySelector('#price')
        let productImage = document.querySelector('#productImage')
        let stock = document.querySelector('#stock')
    
        // VALIDACIONES NOMBRE

        if (name.value == '') {
            errors.push('El campo nombre no puede estar vacio!')
            name.classList.add('is-invalid')
            name.classList.remove('is-valid')
        }
        else if (name.value.length < 4 || name.value.length > 40){
            errors.push('Debes ingresar un nombre entre 4 y 40 caracteres')
            name.classList.add('is-invalid')
            name.classList.remove('is-valid')
        }
        else{
            name.classList.add('is-valid')
            name.classList.remove('is-invalid')
        }

        // VALIDACIONES DESCRIPCION

        if (description.value == "") {
            errors.push('La descripcion no puede estar vacia!')
            description.classList.add('is-invalid')
        }
        else if (description.value.length < 10 || description.value.length > 500){
            errors.push('La descripcion debe tener entre 10 y 500 caracteres')
            description.classList.add('is-invalid')
        }
        else{
            description.classList.add('is-valid')
            description.classList.remove('is-invalid')
        }
    


        //VALIDACIONES PRECIO
        if (price.value == '') {
            errors.push('El campo precio no puede estar vacio!')
            price.classList.add('is-invalid')
        }

        else if (price.value < 0 || price.value > 1000000){
            errors.push('Ingresa un precio válido')
            price.classList.add('is-invalid')
        }
        else{
            price.classList.add('is-valid')
            price.classList.remove('is-invalid')
        }


        //VALIDACIONES IMAGEN
        let imagenValue = productImage.value.trim()
        let validExtensions = ['jpg','png','jpeg','gif'];
        let extImagen = imagenValue.split(".").pop()



            if (imagenValue !== "" && validExtensions.includes(extImagen) ) {
                productImage.classList.add('is-valid')
                productImage.classList.remove('is-invalid')
            }
            else{
                errors.push("Adjunte una imagen con formato: " + validExtensions)
                productImage.classList.add('is-invalid')
            }
        
        //VALIDACIONES STOCK
        if (stock.value == '') {
            errors.push('Ingresa la cantidad de productos disponible!')
            stock.classList.add('is-invalid')
        }

        else if (stock.value < 0 || stock.value > 1000000){
            errors.push('El stock no puede ser menor a cero')
            price.classList.add('is-invalid')
        }
        else{
            price.classList.add('is-valid')
            price.classList.remove('is-invalid')
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

            productForm.submit()
        }

    })
    }