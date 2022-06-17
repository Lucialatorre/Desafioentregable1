
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

        return pedido
    }
}
let query = prompt("Quieres realizar un pedido ?");
let pedidoNuevo = nuevoPedido(query)

