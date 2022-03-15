const suma = (a,b) => a + b
const resta = (a,b) => a - b
const iva = x => x * 0.05
const stockProducto = 10

class Producto {
    constructor(titulo, precio){
    this.titulo = titulo.toUpperCase();
    this.precio = precio;
    }

    sumaIva(){
        this.precio = ((this.precio * 0.05) + this.precio);
    }
}

/* VALIDAR STOCK */ 
function validarStock(stockProducto, cantidadProductos){
    if(stockProducto > cantidadProductos){
        return true;
    } else {
        return false;
    }
}

/* ARRAY DE PRODUCTOS */ 
const carrito = [];
const productos = [
    { id: 1, producto: 'Procesador AMD Ryzen 7 5700G', precio: 48600 },
    { id: 2, producto: 'Procesador AMD Ryzen 5 5600X', precio: 41000 },
    { id: 3, producto: 'Procesador Intel Core i7-9700K', precio: 42300 }
];

for (let i = 0; i<productos.length; i++){
    console.log(productos[i]);
}

function agregarAlCarrito (productos) {
    const cantidadProductos = prompt('Cantidad de productos')
    const hayStock = validarStock(stockProducto, cantidadProductos);


    if (hayStock){
        console.log('Agregaste al carrito ' + producto.titulo + ' x ' + cantidadProductos + ' a $' + (producto.precio * cantidadProductos));
    } else {
        console.log('No hay mas stock')
    }
}

const producto = new Producto('Procesador AMD Ryzen 7 5700G', 48600)
const producto2 = new Producto('Procesador AMD Ryzen 5 5600X', 41000)
const producto3 = new Producto('Procesador Intel Core i7-9700K', 42300)
producto.sumaIva()
producto2.sumaIva()
producto3.sumaIva()