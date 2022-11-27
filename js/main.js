

const usuarioRegistrado = "coderuser";
const passwordRegistrado = 1234;
const nombreUsuario = "Coder House";


let usuarioIngresado = prompt("Bienvenido a TuTienda.com \n\n   Ingresa tu nombre de usuario para acceder");
const usuarioUpper = usuarioIngresado.toUpperCase();
let passwordIngresado = prompt("Bienvenido " + usuarioUpper + "\n\n   Ingresa tu contraseña para acceder");

let i =0
for(; i<2; i++){

    if(usuarioIngresado == usuarioRegistrado && passwordIngresado == passwordRegistrado){
        alert("Bienvenido a TuTienda.com " + nombreUsuario + "\n\n¡Disfruta de nuestras maravillosas ofertas!");
        /* articulosDisponibles(); */
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
    let articuloSeleccionado;

    articuloSeleccionado = prompt("Hola que te gustaria comprar el día de hoy: \n\n1) Notebook Dell 7420 \n2) Smartphone Samsung Galaxy S22+ \n3) Table Lenovo K10 \n4) Smartwatch Xiomi Mi Watch 2 \n\nElige una opción (1 al 4)");
    console.log(articuloSeleccionado);

    if(articuloSeleccionado>4){
        alert("Opcion incorrecta")
    }else{
        switch (articuloSeleccionado){
            case "1":
                cantidad = parseInt(prompt("El precio del Notebook Dell 7420 es de: " + valorArticulo1 + " + IVA" + "\n\nIngrese la cantidad de que desea comprar"));
                precioTotal = ((cantidad * valorArticulo1)*iva);
                formaPago();
                break;
            case "2":
                cantidad = parseInt(prompt("El precio del Notebook Dell 7420 es de: " + valorArticulo2 + " + IVA" + "\n\nIngrese la cantidad de que desea comprar"));
                precioTotal = ((cantidad * valorArticulo2)*iva);
                formaPago();
                break;
            case "3":
                cantidad = parseInt(prompt("El precio del Notebook Dell 7420 es de: " + valorArticulo3 + " + IVA" + "\n\nIngrese la cantidad de que desea comprar"));
                precioTotal = ((cantidad * valorArticulo3)*iva);
                formaPago();
                break;
            case "4":
                cantidad = parseInt(prompt("El precio del Notebook Dell 7420 es de: " + valorArticulo4 + " + IVA" + "\n\nIngrese la cantidad de que desea comprar"));
                precioTotal = ((cantidad * valorArticulo4)*iva);
                formaPago();
                break;
            default:
                alert("Opcion incorrecta");
                break;

        }    

    }
    function formaPago(){
        
        let formaPago = prompt("El precio total es de: "+ precioTotal + " con IVA incluido\n\nComo quisiera pagarlo: \n\n1) Contado (10% de descuento)\n2) Tarjeta de credito (hasta 12 cuotas s/interes)")
        
        if (formaPago === "1"){
            alert("El precio final del articulo seleccionado es de: "+ (precioTotal*descuento).toFixed(2) + " con IVA incluido \n\nMuchas gracias por tu compra");

        }else if(formaPago === "2"){
            let cuotas = prompt("En cuantas cuotas desea pagar su compra: \n\n1) 3 cuotas\n2) 6 cuotas\n3) 12 cuotas");

            switch(cuotas){
                case "1":
                    valorCuota = precioTotal/3;
                    alert("Usted pagará 3 cuotas de: "+ valorCuota.toFixed(2) + " cada una, con IVA incluido \n\nMuchas gracias por tu compra");
                    break;
                case "2":
                    valorCuota = precioTotal/6;
                    alert("Usted pagará 6 cuotas de: "+ valorCuota.toFixed(2) + " cada una, con IVA incluido \n\nMuchas gracias por tu compra");
                    break;
                case "3":
                    valorCuota = precioTotal/12;
                    alert("Usted pagará 12 cuotas de: "+ valorCuota.toFixed(2) + " cada una, con IVA incluido \n\nMuchas gracias por tu compra");
                default:
                    alert("Opcion incorrecta");
                    break;
            }
        }else if (formaPago >2){
            alert("Opción incorrecta")
        }
    }
}

    










