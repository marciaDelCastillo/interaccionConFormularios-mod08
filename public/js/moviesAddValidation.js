const $ = id => document.getElementById(id);

const validoTitulo = titulo =>{
    let respuesta = "";
    if(titulo.value==""){
        respuesta="El campo titulo es requerido";
    }
    return respuesta;
};
const validoCalificacion = calificacion =>{
    let respuesta = "";
    if(calificacion.value==""){
        respuesta="El campo calificación es requerido";
    }else if(calificacion.value<0){
        respuesta="La calificación debe ser mayor que cero";
    }else if(calificacion.value>10){
        respuesta="La calificación no debe superar el número 10";
    }
    return respuesta;
};

const validoPremios = premios =>{
    let respuesta="";
    if(premios.value==""){
        respuesta="El campo premios es requerido";
    }else if(premios.value<0){
        respuesta="La cantidad de premios debe ser mayor que cero";
    }else if(premios.value>10){
        respuesta="La cantidad de premios no debe superar el número 10";
    }
    return respuesta;
}
const validoFecha = fecha =>{
    let respuesta = "";
    if(fecha.value==""){
        respuesta="El campo fecha de creación es requerido";
    }
    return respuesta;
};
const validoDuracion = duracion =>{
    let respuesta="";
    if(duracion.value==""){
        respuesta="El campo duración es requerido";
    }else if(duracion.value<60){
        respuesta="El campo duración debe ser mayor que 60 minutos";
    }else if(duracion.value>360){
        respuesta="El campo duración no debe superar los 360 minutos";
    }
    return respuesta;
};
const validoGenero = genero =>{
    let respuesta="";
    if(genero.value==""){
        respuesta="Debe elegir un género";
    }
    return respuesta;
};

window.addEventListener("load",()=>{

        //evento submit del formulario
        $("create-product-form").addEventListener("submit",e=>{
            let errores = [];
            //capturo los inputs
            let titulo = $("titulo");
            let calificacion = $("calificacion");
            let premios = $("premios");
            let fecha = $("fecha");
            let duracion = $("duracion");
            let genero = $("genero");
            //valido titulo
            let respuesta = validoTitulo(titulo);
            if(respuesta!=""){
                errores.push(respuesta);
                $("titulo-error").innerText=respuesta;
                titulo.classList.add("is-invalid");
                titulo.classList.remove("is-valid");
            }else{
                titulo.classList.remove("is-invalid");
                titulo.classList.add("is-valid");

            }
            //valido calificacion
            respuesta = validoCalificacion(calificacion) 
            if(respuesta!=""){
                errores.push(respuesta);
                $("calificacion-error").innerText=respuesta;
                calificacion.classList.add("is-invalid");
                titulo.classList.remove("is-valid");
            }else{
                calificacion.classList.remove("is-invalid");
                calificacion.classList.add("is-valid");

            }
            //valido premios
            respuesta = validoPremios(premios) 
            if(respuesta!=""){
                errores.push(respuesta);
                $("premios-error").innerText=respuesta;
                premios.classList.add("is-invalid");
                titulo.classList.remove("is-valid");
            }else{
                premios.classList.remove("is-invalid");
                premios.classList.add("is-valid");

            }
            //valido fecha
            respuesta = validoFecha(fecha) 
            if(respuesta!=""){
                errores.push(respuesta);
                $("fecha-error").innerText=respuesta;
                fecha.classList.add("is-invalid");
                titulo.classList.remove("is-valid");
            }else{
                fecha.classList.remove("is-invalid");
                fecha.classList.add("is-valid");

            }
            //valido duracion
            respuesta = validoDuracion(duracion) 
            if(respuesta!=""){
                errores.push(respuesta);
                $("duracion-error").innerText=respuesta;
                duracion.classList.add("is-invalid");
                titulo.classList.remove("is-valid");
            }else{
                duracion.classList.remove("is-invalid");
                duracion.classList.add("is-valid");

            }
            //valido genero
            respuesta = validoGenero(genero) 
            if(respuesta!=""){
                errores.push(respuesta);
                $("genero-error").innerText=respuesta;
                genero.classList.add("is-invalid");
                titulo.classList.remove("is-valid");
            }else{
                genero.classList.remove("is-invalid");
                genero.classList.add("is-valid");

            }
            //veo si hubo errores
            if(errores.length>0){
                e.preventDefault();
                errores.forEach(error=>console.log(error));
            }else{
                alert("Película agregada con éxito");
            }
        });
        //eventos del input titulo
        titulo.addEventListener("focus",e=>{
            let respuesta = validoTitulo(titulo);
            $("titulo-error").innerText= respuesta;
            if(respuesta!=""){
                titulo.classList.add("is-invalid");
                titulo.classList.remove("is-valid");
            }else{
                titulo.classList.remove("is-invalid");
                titulo.classList.add("is-valid");

            }
        });
        titulo.addEventListener("blur",e=>{
            $("titulo-error").innerText="";
        });
        titulo.addEventListener("keyup",e=>{
            let respuesta = validoTitulo(titulo);
            $("titulo-error").innerText= respuesta;
            if(respuesta!=""){
                titulo.classList.add("is-invalid");
                titulo.classList.remove("is-valid");
            }else{
                titulo.classList.remove("is-invalid");
                titulo.classList.add("is-valid");

            }
        });
        //eventos del input calificacion
        calificacion.addEventListener("focus",e=>{
            let respuesta = validoCalificacion(calificacion);
            $("calificacion-error").innerText= respuesta;
            if(respuesta!=""){
                calificacion.classList.add("is-invalid");
                calificacion.classList.remove("is-valid");
            }else{
                calificacion.classList.remove("is-invalid");
                calificacion.classList.add("is-valid");

            }
        });
        calificacion.addEventListener("blur",e=>{
            $("calificacion-error").innerText="";
        });
        calificacion.addEventListener("keyup",e=>{
            let respuesta = validoCalificacion(calificacion);
            $("calificacion-error").innerText= respuesta;
            if(respuesta!=""){
                calificacion.classList.add("is-invalid");
                calificacion.classList.remove("is-valid");
            }else{
                calificacion.classList.remove("is-invalid");
                calificacion.classList.add("is-valid");

            }
        });
        //eventos del input premios
        premios.addEventListener("focus",e=>{
            let respuesta = validoPremios(premios);
            $("premios-error").innerText= respuesta;
            if(respuesta!=""){
                premios.classList.add("is-invalid");
                premios.classList.remove("is-valid");
            }else{
                premios.classList.remove("is-invalid");
                premios.classList.add("is-valid");

            }
        });
        premios.addEventListener("blur",e=>{
            $("premios-error").innerText="";
        });
        premios.addEventListener("keyup",e=>{
            let respuesta = validoPremios(premios);
            $("premios-error").innerText= respuesta;
            if(respuesta!=""){
                premios.classList.add("is-invalid");
                premios.classList.remove("is-valid");
            }else{
                premios.classList.remove("is-invalid");
                premios.classList.add("is-valid");

            }
        });
        //eventos del input fecha
        fecha.addEventListener("focus",e=>{
            let respuesta = validoFecha(fecha);
            $("fecha-error").innerText= respuesta;
            if(respuesta!=""){
                fecha.classList.add("is-invalid");
                fecha.classList.remove("is-valid");
            }else{
                fecha.classList.remove("is-invalid");
                fecha.classList.add("is-valid");

            }
        });
        fecha.addEventListener("blur",e=>{
            $("fecha-error").innerText="";
        });
        fecha.addEventListener("keyup",e=>{
            let respuesta = validoFecha(fecha);
            $("fecha-error").innerText= respuesta;
            if(respuesta!=""){
                fecha.classList.add("is-invalid");
                fecha.classList.remove("is-valid");
            }else{
                fecha.classList.remove("is-invalid");
                fecha.classList.add("is-valid");

            }
        });
        //eventos del input duracion
        duracion.addEventListener("focus",e=>{
            let respuesta = validoDuracion(duracion);
            $("duracion-error").innerText= respuesta;
            if(respuesta!=""){
                duracion.classList.add("is-invalid");
                duracion.classList.remove("is-valid");
            }else{
                duracion.classList.remove("is-invalid");
                duracion.classList.add("is-valid");

            }
        });
        duracion.addEventListener("blur",e=>{
            $("duracion-error").innerText="";
        });
        duracion.addEventListener("keyup",e=>{
            let respuesta = validoDuracion(duracion);
            $("duracion-error").innerText= respuesta;
            if(respuesta!=""){
                duracion.classList.add("is-invalid");
                duracion.classList.remove("is-valid");
            }else{
                duracion.classList.remove("is-invalid");
                duracion.classList.add("is-valid");

            }
        });
        //eventos del input genero
        genero.addEventListener("change",e=>{
            let respuesta = validoGenero(genero);
            $("genero-error").innerText= respuesta;
            if(respuesta!=""){
                genero.classList.add("is-invalid");
                genero.classList.remove("is-valid");
            }else{
                genero.classList.remove("is-invalid");
                genero.classList.add("is-valid");

            }
        });
        genero.addEventListener("blur",e=>{
            $("genero-error").innerText="";
        });

})