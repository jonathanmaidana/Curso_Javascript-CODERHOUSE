const suma = (a,b) => a + b
const resta = (a,b) => a - b
const stockProducto = 10





class Producto {
    constructor(id, titulo, precio, marca, imagen){
    this.id = id;
    this.titulo = titulo;
    this.precio = parseFloat(precio);
    this.marca = marca;
    this.imagen = imagen
    }
}

/* ARRAY DE PRODUCTOS */ 
const carrito = [];

carrito.length === 0 && console.log("El carrito está vacío")



const productos = [
    { id: 0, titulo: 'Procesador AMD Ryzen 7 5700G', precio: 48600, marca: 'AMD', imagen: '' },
    { id: 1, titulo: 'Procesador AMD Ryzen 5 5600X', precio: 41000, marca: 'AMD', imagen: ''},
    { id: 2, titulo: 'Procesador gamer Intel Core i7-9700K', precio: 42300, marca: 'INTEL', imagen: ''},
    { id: 3, titulo: 'Procesador Intel Core i5-10400F', precio: 22000, marca: 'INTEL', imagen: ''},
    { id: 4, titulo: 'Procesador gamer AMD Ryzen 5 3600', precio: 37000, marca: 'AMD', imagen: ''},
    { id: 5, titulo: 'Procesador Intel Core i3-10100F', precio: 13000, marca: 'INTEL', imagen: ''},
    { id: 6, titulo: 'Micro Procesador Intel Core I5 9400', precio: 26000, marca: 'INTEL', imagen: ''}
];

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
            <img src="../../img/Procesador AMD Ryzen 7 5700G.jpg" alt="" id="img"/>
            <div>
                <p>${elementoDelArray.titulo}</p>
                <span>$ ${elementoDelArray.precio}</span>
            </div>
                <button type="button" onclick="agregarAlCarrito(${elementoDelArray.id})">
                    Comprar Producto
                </button>
                <button type="button" onclick="verProducto(${elementoDelArray.id})">
                    Ver producto
                </button>
        </div>`
        });
        mostrarCards(acumuladorDeCards);
    }



    /* VALIDAR STOCK */ 
function validarStock(stockProducto, cantidadDeProductos){
    stockProducto > cantidadDeProductos ? true : false
}

function lugarAEnviar(){
    const input = document.getElementById('envio').value;
    console.log(input)
}

/* Agregar Al Carrito */ 
const agregarAlCarrito = (idProductos) => {
    const productoAgregado = productos.find(producto => producto.id === idProductos);
    carrito.push(productoAgregado);
    console.log(carrito);
    swal({
        title: "Agregaste al carrito!",
        text: `${productoAgregado.titulo} $${productoAgregado.precio}`,
        icon: "success",
        button: "Aceptar",
        closeOnEsc: false
    });

    localStorage.setItem ("Que agregaste al carrito", JSON.stringify(carrito));
}

const verProducto = (idProductos) => {
    const productoAver = productos.find(producto => producto.id === idProductos);

    localStorage.setItem ("Producto a ver", JSON.stringify(productoAver));
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

    localStorage.setItem ("Producto que buscaste", JSON.stringify(productoBuscado));
}


swal({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success",
    button: "Aww yiss!",
});