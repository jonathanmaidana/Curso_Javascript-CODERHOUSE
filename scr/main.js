const suma = (a,b) => a + b
const resta = (a,b) => a - b
const stockProducto = 10

class Producto {
    constructor(titulo, precio, marca, imagen){
    this.titulo = titulo;
    this.precio = parseFloat(precio);
    this.linea = marca;
    this.imagen = imagen
    }
}

/* ARRAY DE PRODUCTOS */ 
const carrito = [];


const productos = [];
productos.push(new Producto('Procesador AMD Ryzen 7 5700G', '48600', 'AMD',));
productos.push(new Producto('Procesador AMD Ryzen 5 5600X', '41000', 'AMD'));
productos.push(new Producto('Procesador gamer Intel Core i7-9700K','42300','INTEL'));
productos.push(new Producto('Procesador Intel Core i5-10400F', '22000', 'INTEL'));
productos.push(new Producto('Procesador gamer AMD Ryzen 5 3600', '37000', 'AMD'));
productos.push(new Producto('Procesador Intel Core i3-10100F', '13000', 'INTEL'));
productos.push(new Producto('Micro Procesador Intel Core I5 9400', '26000', 'INTEL'));
for (const producto of productos)
    producto.sumaIva;

    cardsGeneradas(productos)

    function mostrarCards(cards){
        document.getElementById("productos").innerHTML = cards;
    }

    function cardsGeneradas(productosAMostrarEnHtml){
        let acumuladorDeCards = ``;
        productosAMostrarEnHtml.forEach((elementoDelArray) => {
            acumuladorDeCards += `<div class="productos__item">
            <h2>${elementoDelArray.titulo}</h2>
            <img src="../../img/Procesador AMD Ryzen 7 5700G.jpg" alt=""/>
            <div>
                <p>Procesador AMD Ryzen 5 5600X</p>
                <span>$ ${elementoDelArray.precio}</span>
            </div>
            <input type="number" id="cantidad__productos">
                <button type="button" onclick="agregarAlCarrito()">
                    Comprar Producto
                </button>
        </div>`
        });
        mostrarCards(acumuladorDeCards);
    }

    /* VALIDAR STOCK */ 
function validarStock(stockProducto, cantidadDeProductos){
    if(stockProducto > cantidadDeProductos){
        return true;
    } else {
        return false;
    }
}

function cantidadDeProductos(){
    document.getElementById("cantidad__productos")
    console.log(cantidadDeProductos)
}

function agregarAlCarrito () {
    document.getElementById("agregarAlCarrito")
    const hayStock = validarStock(stockProducto, cantidadDeProductos);

    if (hayStock){
        console.log('Agregaste al carrito ' + productos.titulo + ' x ' + cantidadDeProductos + ' a $' + (productos.precio * cantidadDeProductos) + ' ' + 'con un iva del 0.05%');
    } else {
        console.log('No hay mas stock')
    }
}

/* Suma iva */ 
const productosIva = productos.map(productos => {
    productos.precio = productos.precio + productos.precio * 0.05
    return productos
})
    console.log(productosIva)

productos.forEach((productos) => {
    console.log(productos)
})

/* Codigo para filtrar precio */ 
const productosDeMenorPrecio = productos.filter((productos) => productos.precio < 40000);
    console.log(productosDeMenorPrecio);

const productosDeMayorPrecio = productos.filter((productos) => productos.precio > 40000);
    console.log(productosDeMayorPrecio);

/* Codigo para Buscador */ 
function buscarProducto(){
    const productoBuscado = document.getElementById("buscador").value.toUpperCase().trim();
    console.log(productoBuscado);

    const productosEncontrados = productos.filter((productos) => {
        return productos.titulo.toUpperCase().match(productoBuscado);
    })
    console.log(productosEncontrados);
    
    cardsGeneradas(productosEncontrados);
}