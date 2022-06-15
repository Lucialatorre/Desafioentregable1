
 let user = "juan";
 let pass = "12345";
 cont=0;

function IngresarUsuario () {
    let user = prompt("ingresa tu usuario")
    let pass = prompt("ingresa tu contraseña")

}
function Saludar () {
    let bienvenido = alert("Bienvenido a la biblioteca virtual");
}
while(cont < 3) {
	let user =prompt("Introduzca su usuario");
	let pass =prompt("Introduzca su contraseña");

if(user=='juan' && pass =='12345') {
		alert('Los datos son correctos');
    cont = 0;
		break;

}else{	
    if(user !='juan' && pass=='12345') {
		  alert('usuario incorrecto');
    }
    else if(user =='juan' && pass !='12345') {
      alert('contraseña incorrecta');
    }
    else{
      cont++;
		  alert('Error. Los datos son incorrectos');
    }
		
		if(cont==3) {
		  alert('Lo siento, has agotado el número de intentos');
		}	
	}
	
}

if(user == "juan" && pass == "12345"){
        console.log("Hola usuario " + user);
    } else{
        console.log("Campo vacio")
    }
       
Saludar ()
let opciones = alert("Elige un eBook disponible \n 1-Orgullo y prejuicio \n 2-Mujercitas \n 3-Outlander \n 4-Bridgerton");


function nuevoPedido(query) {
    let pedido = {} 
    if (query === "si"){ 
        let domicilio = prompt("Ingrese su domicilio de envio por favor")
        let libro = prompt("Ingrese el nombre del libro que va a llevar")
        let extra = prompt("Desea algo mas?")
        pedido.id = Math.round(Math.random() * (1000 - 0) + 0)
        pedido.domicilio = domicilio
        pedido.libro = libro
        pedido.extra = extra
        console.log(pedido.domicilio)
        console.log(pedido.libro);
        console.log(pedido.extra);

        extra (extra, libro, pedido)
        descuentoPorCantidad(libro, pedido)
        return pedido
    }
}
let query = prompt("Quieres realizar un pedido ?");
let pedidoNuevo = nuevoPedido(query)

const descuentoPorCantidad = (valor, pedido) => {
    if (valor >= 5) {

        result = result - (result / 100) * 10
        let medioPago = prompt("el total del pedido con descuento es  $" + result + "\n Pago en efectivo(e) o Tarjeta(t) ? \n el pago con tarjeta tiene un recargo del 5%  ")
        mediosDePago(medioPago, pedido)
    } else {
        medioPago = prompt("el total del pedido es  $" + result + "\n Pago en efectivo(e) o Tarjeta(t) ? \n el pago con tarjeta tiene un recargo del 5%")
        mediosDePago(medioPago, pedido)
    }
}

const mediosDePago = (value, pedido) => {

    if (value === "t") {
        result = result + (result / 100) * 5
        pedido.medioDePago = "Tarjeta"
        pedido.total = result
        alert("El total del pedido pagado con tarjeta es $: " + result)
        result = 0 
     } else if (value === "e") {
            pedido.medioDePago = "Efectivo"
            pedido.total = result
            alert("El total del pedido es $: " + result)
            result = 0
    
        }
    
    }
