function qs(element) {
    return document.querySelector(element);
}

window.addEventListener('load', function(){
    let title = qs('#title');  
    title.focus();
    
     $titleErrors = qs('.titleErrors'),

     $rating = qs('#rating'),
     $ratingErrors = qs('.ratingErrors'),

     $awards = qs('#awards'),
     $awardsErrors = qs('.awardsErrors'),

     $releaseDate = qs('#release_date'),
     $dateErrors = qs('.dateErrors'),


     $length = qs('#length'),
     $lenghtErrors = qs('.lengthErrors'),


     $genreId = qs('#genre_id'),
     $genreErrors = qs('.genreErrors'),

     form = document.querySelector("section article form");
     submitErrors = qs('.submitErrors'),


     regExRating = /^[0-9]{1,2}$/,
     regExLenght = /^[60-360]{1,3}$/,

     errors = [];
    
    title.addEventListener('blur', function() {
        switch(true) {
            case !title.value.trim():
                $titleErrors.innerHTML = 'El campo Título es obligatorio';
                title.classList.add('is-invalid');
                errors.push('El campo Título es obligatorio')
                break;
            default:
                title.classList.remove('is-invalid');
                title.classList.add('is-valid');
                $titleErrors.innerHTML = "";
        }
    });

    $rating.addEventListener('blur', function(){
        switch(true) {
            case !$rating.value.trim():
                $ratingErrors.innerHTML = 'El campo Rating es obligatorio';
                $rating.classList.add('is-invalid');
                errors.push('El campo Rating es obligatorio')
                break;
            case $rating.value <= 0 || rating.value > 10:
                $ratingErrors.innerHTML = 'El valor debe estar comprendido entre cero (0) y diez (10)';
                $rating.classList.add('is-invalid');
                errors.push('El valor debe estar comprendido entre cero (0) y diez (10)')
                break;
            default:
                $rating.classList.remove('is-invalid');
                $rating.classList.add('is-valid');
                $ratingErrors.innerHTML = "";    
        }
    });

    $awards.addEventListener('blur', function(){
        switch(true) {
            case !$awards.value.trim():
                $awardsErrors.innerHTML = 'El campo Premios es obligatorio';
                $awards.classList.add('is-invalid');
                errors.push('El campo Premios es obligatorio')
                break;
            case $awards.value <= 0 || awards.value > 10:
                $awardsErrors.innerHTML = 'El valor debe estar comprendido entre cero (0) y diez (10)';
                $awards.classList.add('is-invalid');
                errors.push('El valor debe estar comprendido entre cero (0) y diez (10)')
                break;
            default:
                $awards.classList.remove('is-invalid');
                $awards.classList.add('is-valid');
                $awardsErrors.innerHTML = "";
                break;
        }
    });

    $releaseDate.addEventListener('blur', function(){
        switch(true) {
            case !$releaseDate.value.trim():
                $dateErrors.innerHTML = 'El campo Fecha de creación es obligatorio';
                $releaseDate.classList.add('is-invalid');
                errors.push('El campo Fecha de creación es obligatorio')
                break;
            default:
                $releaseDate.classList.remove('is-invalid');
                $releaseDate.classList.add('is-valid');
                $dateErrors.innerHTML = "";
                break;
        }
    });

    $length.addEventListener('blur', function(){
        switch(true) {
            case !$length.value.trim():
                $lenghtErrors.innerHTML = 'El campo Duración es obligatorio';
                $length.classList.add('is-invalid');
                errors.push('El campo Duración es obligatorio')
                break;
            case $length.value < 60 || length.value > 360:
                $lenghtErrors.innerHTML = 'El valor debe estar comprendido entre sesenta (60) y trescientos sesenta (360)';
                $length.classList.add('is-invalid');
                errors.push('El campo Duración es obligatorio')
            default:
                $length.classList.remove('is-invalid');
                $length.classList.add('is-valid');
                $lenghtErrors.innerHTML = "";
                break;
        }
    });

    $genreId.addEventListener('blur', function(){
        switch(true) {
            case !$genreId.value.trim():
                $genreErrors.innerHTML = 'El campo Género es obligatorio';
                $genreId.classList.add('is-invalid');
                errors.push('El campo Género es obligatorio')
                break;
            default:
                $genreId.classList.remove('is-invalid');
                $genreId.classList.add('is-valid');
                $genreErrors.innerHTML = "";
                break;
        }
    });

    form.addEventListener('submit', function(e) {
        
        e.preventDefault();
        let error = false;
        let elementosForm = this.elements
        
        for (let index = 0; index < errors.length; index++) {
            if(elementosForm[index].value == "" ){
                document.querySelector('.errores').innerHTML = `<li>${errors}</li>`;
                document.querySelector('.errores').classList.add('alert-warning')
                error = true
            }
        }

        if(!error){
            alert('La película se guardó satisfactoriamente')
            form.submit()
        }
    })    
})