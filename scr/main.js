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
    { id: 1, titulo: 'Procesador AMD Ryzen 7 5700G', precio: 48600 },
    { id: 2, titulo: 'Procesador AMD Ryzen 5 5600X', precio: 41000 },
    { id: 3, titulo: 'Procesador gamer Intel Core i7-9700K', precio: 42300 },
    { id: 4, titulo: 'Procesador Intel Core i5-10400F', precio: 22000 },
    { id: 5, titulo: 'Procesador gamer AMD Ryzen 5 3600', precio: 37000 },
    { id: 6, titulo: 'Procesador Intel Core i3-10100F', precio: 13000 },
    { id: 7, titulo: 'Micro Procesador Intel Core I5 9400', precio: 26000 },
];

productos.forEach((producto) => {
    console.log(producto)
})

/* Codigo para filtrar precio */ 
const productosDeMenorPrecio = productos.filter((producto) => producto.precio < 40000);
console.log(productosDeMenorPrecio);

const preductosDeMayorPrecio = productos.filter((producto) => producto.precio > 40000);
console.log(preductosDeMayorPrecio);

/* Codigo para Buscador */ 
const productoBuscado = prompt('Buscar Producto')
const buscarProducto = productos.find((producto) => producto.titulo === productoBuscado)
console.log(buscarProducto);

function agregarAlCarrito (productos) {
    const cantidadProductos = parseInt(prompt('Cantidad de productos a comprar'))
    const hayStock = validarStock(stockProducto, cantidadProductos);

    if (hayStock){
        alert('Agregaste al carrito ' + productos.titulo + ' x ' + cantidadProductos + ' a $' + (productos.precio * cantidadProductos));
    } else {
        alert('No hay mas stock')
    }
}

const producto = new Producto('Procesador AMD Ryzen 7 5700G', 48600)
const producto1 = new Producto('Procesador AMD Ryzen 5 5600X', 41000)
const producto2 = new Producto('Procesador Intel Core i7-9700K', 42300)
const producto3 = new Producto('Procesador Intel Core i5-10400F', 22000)
const producto4 = new Producto('Procesador gamer AMD Ryzen 5 3600', 37000)
const producto5 = new Producto('Procesador Intel Core i3-10100F', 13000)
const producto6 = new Producto('Micro Procesador Intel Core I5 9400', 26000)
producto.sumaIva()
producto1.sumaIva()
producto2.sumaIva()
producto3.sumaIva()
producto4.sumaIva()
producto5.sumaIva()
producto6.sumaIva()
