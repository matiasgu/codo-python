let menuVisible = false
//funcio ocultar/ muestra menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList =""
        menuVisible = false
    }else{
        document.getElementById("nav").classList ="responsive"
        menuVisible = true
    }
}
function seleccionar(){
    //oculto el menu una ves q se seleccione
    document.getElementById("nav").classList =""
    menuVisible = false
}



function validarjs(){

    let nombre = document.getElementById("nombre").value
    
    alert(`gracias ${nombre} pronto nos contactaremos con tigo`)
    
    return(false)
}