
let precio = prompt ("ingrese un monto")
while (precio != "1000"){
    switch (precio){
        case "1500":
            alert ("3 cuotas sin interes de $500");
            break;
        case "2000":
            alert ("3 cuotas sin interes de $666,66");
            break;
        default:
            alert ("ingrese otro monto");
            break;
    }
    precio = prompt ("ingrese un monto");
}






function comprar (cantidad){
    const cuotas = 1;

    if (cantidad == cuotas){
        const precio1 = 1000
        return "el precio es $" + precio1
    }
    else{ (cantidad > cuotas)
        const precio2 = 2000
        return "el precio es $" + precio2   
    }
}

console.log (comprar(6))

