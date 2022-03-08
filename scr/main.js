function encargo () {
    let gustoDeHelado = prompt('Gusto de Helado')
    let cantidadDeHelado = prompt('¿Cuantos queres?')
    const suma = (a,b) => a + b
    const resta = (a,b) => a - b
    const iva = x => x * 0.10
    let precioNumero1 = 300
    let precioFinal = (suma(precioNumero1, iva(precioNumero1))) * cantidadDeHelado
    let primerDescuento = 100
    let segundoDescuento = 250

    if ((precioFinal > 900) && (precioFinal <= 1500)){
        alert('Tu pedido: ' + gustoDeHelado + ', ' + 'cantidad ' + cantidadDeHelado + ', ' + 'Precio Final con un descuento de $100 es de ' + (precioFinal - primerDescuento));
    } else if ((precioFinal > 1500) && (precioFinal => 2500)){
        alert('Tu pedido: ' + gustoDeHelado + ', ' + ',cantidad ' + cantidadDeHelado + ', ' + 'Precio Final con un descuento de $250 es de ' + (precioFinal - segundoDescuento));
    } else{
        alert('Tu pedido: ' + gustoDeHelado + ', ' + 'cantidad ' + cantidadDeHelado + ', ' + 'Precio Final ' + precioFinal);
    }
}
