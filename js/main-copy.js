
const usuarioRegistrado = "coderuser";
const nombreUsuario = "Coder House";
const passwordRegistrado = 1234;

let usuarioIngresado = prompt("Bienvenido a TuTienda.com \n\n   Ingresa tu nombre de usuario para acceder");
const usuarioUpper = usuarioIngresado.toUpperCase();
let passwordIngresado = prompt("Bienvenido " + usuarioUpper + "\n\n   Ingresa tu contraseña para acceder");

let i =0
for(; i<2; i++){

    if(usuarioIngresado == usuarioRegistrado && passwordIngresado == passwordRegistrado){
        alert("Bienvenido a TuTienda.com " + nombreUsuario + "\n\n¡Disfruta de nuestras maravillosas ofertas!");
        break;
    }else{
        usuarioIngresado = prompt("El usuario o la contraseña es incorrecta \n¡Usted posee " + (2 - i) + " oportunidades mas para intentar acceder! \n\n   Ingresa tu nombre de usuario para acceder");
        const usuarioUpper = usuarioIngresado.toUpperCase();
        passwordIngresado = prompt("Bienvenido a TuTienda.com " + usuarioUpper + "\n\n   Ingresa tu contraseña para acceder");
    }

}    
if (i>1){
    alert("ACCESO BLOQUEADO");
}else{
    const valorArticulo1 = 262400;
    const valorArticulo2 = 181000;
    const valorArticulo3 = 65000;
    const valorArticulo4 = 22400;
    const iva = 1.21;
    const descuento = 0.90;
    let precioTotal = 0;
    let cantidad = 0;
    

    let articuloSeleccionado = prompt("Que te gustaria comprar el día de hoy: \n\n1) Notebook Dell 7420 \n2) Smartphone Samsung Galaxy S22+ \n3) Tablet Lenovo K10 \n4) Smartwatch Xiomi Mi Watch 2 \n\nElige una opción (1 al 4)");
    console.log(articuloSeleccionado);

    while(articuloSeleccionado > 4 || articuloSeleccionado == null || /\D/.test(articuloSeleccionado) || articuloSeleccionado == "" ){
        alert("¡Opción incorrecta, intenta nuevamente!\n\n   RECORDATORIO: Las opciones correctas son: 1 - 2 - 3 - 4")
        articuloSeleccionado = prompt("Que te gustaria comprar el día de hoy: \n\n1) Notebook Dell 7420 \n2) Smartphone Samsung Galaxy S22+ \n3) Table Lenovo K10 \n4) Smartwatch Xiomi Mi Watch 2 \n\nElige una opción (1 al 4)");
        console.log(articuloSeleccionado);
    }
    switch (articuloSeleccionado){
        case "1":
            cantidad = parseInt(prompt("El precio del Notebook Dell 7420 es de: " + valorArticulo1 + " + IVA" + "\n\nIngrese la cantidad que desea comprar"));
            while (cantidad == null || /\D/.test(cantidad) || cantidad == "") {
                cantidad = parseInt(prompt("Opción incorrecta, ingrese un número VÁLIDO! \n\nRECORDATORIO: Solo se aceptan números. \n\n   El precio del Notebook Dell 7420 es de: " + valorArticulo1 + " + IVA" + "\n\nIngrese la cantidad que desea comprar"));
            };
            precioTotal = ((cantidad * valorArticulo1)*iva);
            formaPago();
            break;
        
        case "2":
            cantidad = parseInt(prompt("El precio del Smartphone Samsung Galaxy S22+ es de: " + valorArticulo2 + " + IVA" + "\n\nIngrese la cantidad que desea comprar"));
            while (cantidad == null || /\D/.test(cantidad) || cantidad == "") {
                cantidad = parseInt(prompt("Opción incorrecta, ingrese un número VÁLIDO! \n\nRECORDATORIO: Solo se aceptan números. \n\n   El precio del Smartphone Samsung Galaxy S22+ es de: " + valorArticulo2 + " + IVA" + "\n\nIngrese la cantidad que desea comprar"));
            };
            precioTotal = ((cantidad * valorArticulo2)*iva);
            formaPago();
            break;
                
        case "3":
            cantidad = parseInt(prompt("El precio del Tablet Lenovo K10 es de: " + valorArticulo3 + " + IVA" + "\n\nIngrese la cantidad que desea comprar"));
            while (cantidad == null || /\D/.test(cantidad) || cantidad == "") {
                cantidad = parseInt(prompt("Opción incorrecta, ingrese un número VÁLIDO! \n\nRECORDATORIO: Solo se aceptan números. \n\n   El precio del Tablet Lenovo K10 es de: " + valorArticulo3 + " + IVA" + "\n\nIngrese la cantidad que desea comprar"));
            };
            precioTotal = ((cantidad * valorArticulo3)*iva);
            formaPago();
            break;
    
        case "4":
            cantidad = parseInt(prompt("El precio del Smartwatch Xiomi Mi Watch es de: " + valorArticulo4 + " + IVA" + "\n\nIngrese la cantidad que desea comprar"));
            while (cantidad == null || /\D/.test(cantidad) || cantidad == "") {
                cantidad = parseInt(prompt("Opción incorrecta, ingrese un número VÁLIDO! \n\nRECORDATORIO: Solo se aceptan números. \n\n   El precio del Smartwatch Xiomi Mi Watch es de: " + valorArticulo4 + " + IVA" + "\n\nIngrese la cantidad que desea comprar"));
            };
            precioTotal = ((cantidad * valorArticulo4)*iva);
            formaPago();
            break;

        default:
            alert("Opcion incorrecta");
            break;

    }    

    function formaPago(){
        
        let formaPago = prompt("El precio total es de: "+ precioTotal + " con IVA incluido\n\n   ¿Como quiere pagarlo? \n\n1) Contado (10% de descuento)\n2) Tarjeta de credito (hasta 12 cuotas s/interes)")

        while(formaPago >2 || formaPago == null || /\D/.test(formaPago) || formaPago == "" ){
            formaPago = prompt("Opción incorrecta, ingrese un número VÁLIDO!  \n\nRECORDATORIO: Las opciones correctas son: 1 - 2 \n\n   El precio total es de: "+ precioTotal + " con IVA incluido\n\n   ¿Como quiere pagarlo? \n\n1) Contado (10% de descuento)\n2) Tarjeta de credito (hasta 12 cuotas s/interes)")
        }
        
        if (formaPago === "1"){
            alert("El precio final del articulo seleccionado es de: "+ (precioTotal*descuento).toFixed(2) + " con IVA incluido \n\nMuchas gracias por tu compra");

        }else if(formaPago === "2"){
            let cuotas = parseInt(prompt("En cuantas cuotas desea pagar su compra: \n\n3 cuotas\n6 cuotas\n12 cuotas"));
            console.log;

            while(cuotas !== 6 &&  cuotas !== 3 && cuotas !== 12){
                cuotas = parseInt(prompt("Opción incorrecta, ingrese un número VÁLIDO! \n\nRECORDATORIO: Las opciones correctas son: 3 - 6 - 12 \n\n   En cuantas cuotas desea pagar su compra: \n\n 3 cuotas\n 6 cuotas\n 12 cuotas"));
                console.log(cuotas);
            }
            calculoCuota(cuotas);           

        }
    }

    function calculoCuota(cuotas){
        let valorCuota = precioTotal/ cuotas;
        alert("Usted pagará " + cuotas + " cuotas de: " + valorCuota.toFixed(2) + " cada una, con IVA incluido \n\nMuchas gracias por tu compra");
    }
}
    










