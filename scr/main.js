/* --------------------------- Array de Productos --------------------------- */
const productos = [
    {   
        id: 1,
        titulo: 'Procesador AMD Ryzen 7 5700G',
        precio: 48600,
        categoria: 'Procesador AMD',
        imagen:'../../img/Procesador AMD Ryzen 7 5700G.jpg' 
    },
    { 
        id: 2, 
        titulo: 'Procesador AMD Ryzen 5 5600X', 
        precio: 41000, 
        categoria: 'Procesador AMD', 
        imagen: '../../img/Procesador gamer AMD Ryzen 5 5600X.jpg'
    },
    { 
        id: 4, 
        titulo: 'Procesador gamer Intel Core i7-9700K', 
        precio: 42300, 
        categoria: 'Procesador INTEL', 
        imagen: '../../img/Procesador gamer Intel Core i7-9700K.jpg'
    },
    { 
        id: 5, 
        titulo: 'Procesador Intel Core i5-10400F', 
        precio: 22000, 
        categoria: 'Procesador INTEL', 
        imagen: '../../img/Procesador Intel Core i5-10400F.jpg'
    },
    { 
        id: 6, 
        titulo: 'Procesador gamer AMD Ryzen 5 3600',  
        precio: 37000, 
        categoria: 'Procesador AMD', 
        imagen: '../../img/Procesador gamer AMD Ryzen 5 3600.jpg'
    },
    { 
        id: 6, 
        titulo: 'Procesador Intel Core i3-10100F', 
        precio: 13000, 
        categoria: 'Procesador INTEL', 
        imagen: '../../img/Procesador Intel Core i3-10100F.jpg'
    },
    { 
        id: 7, 
        titulo: 'Micro Procesador Intel Core I5 9400', 
        precio: 26000, 
        categoria: 'Procesador INTEL', 
        imagen: '../../img/Micro Procesador Intel Core I5 9400.jpg'
    },
    { 
        id: 8, 
        titulo: 'Micro Procesador Intel Core I5 9400', 
        precio: 26000,
        categoria: 'Procesador INTEL', 
        imagen:''
    }
];

const contenedorDeProductos = document.getElementById('productos')
const contenedorCarrito = document.getElementById('contenedorProductos')
const precioTotal = document.getElementById('precioFinal')
const vaciarCarrito = document.getElementById('vaciarCarrito')
const contadorCarrito = document.getElementById('carritoCantidad')
const finalizarCompra = document.getElementById('finalizarCompra')

document.addEventListener('DOMContentLoaded',() => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

/* -------------------------- Generar cards en HTML ------------------------- */
generarCards()

function generarCards() {
    productos.forEach((element) => {
        const div = document.createElement('div')
        div.classList.add('fcard')
        div.innerHTML = `
                    <div class="fcard__container">
                        <img src="${element.imagen === null ? 'sin-imagen' : element.imagen}">
                        <p class="fcard__stock" id="stock">${element.stock != 0 ? 'Hay Stock' : 'No hay Stock'}</p>   
                    </div>
                    <div class="fcard__description">
                    <h3 onclick="verProducto(${element.id})"><h3 class="fcard__title">${element.titulo}</h3></a>
                        <p class="fcard__price">$ ${element.precio}</p> <p class="fcard__iva">Iva + %10</p>
                        <div class="fcard__send">Envio Gratis                              
                            <i class="fas fa-truck" title="Envio Gratis"></i> 
                        </div>
                        <div class="fcard__container--button">
                            <button class="fcard__buy--btn" id="btn-carrito" onclick="agregarAlCarrito(${element.id})">
                                <i class=" fas fa-cart-arrow-down" alt="Agregar al carrito"></i>
                            </button>
                            <button class="fcard__details--btn" id="btn-details" onclick=verProducto(${element.id})>
                                <span>Ver producto</span>
                            </button>
                        </div>
                    </div>`
    
        contenedorDeProductos.appendChild(div)
    })
}


/* --------------------------- Agregar Al Carrito --------------------------- */
const agregarAlCarrito = (prodId) => {

    const productoAgregado = productos.find(prod => prod.id === prodId);

        swal({
            title: "Agregaste al carrito!",
            text: `${productoAgregado.titulo} $${productoAgregado.precio}`,
            icon: "success",
            button: "Aceptar",
            closeOnEsc: false
        });

        carrito.push(productoAgregado);
        actualizarCarrito()
        localStorage.setItem ("carrito", JSON.stringify(carrito));
        
        productoAgregado.stock --;
}


/* -------------------------- Eliminar productos del carrito -------------------------- */
const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito()
}


/* ------------------------ Generar card en el modal ------------------------ */
const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""

    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.titulo}</p>
        <p>$${prod.precio}</p>
        <div>        
            <button onclick= "eliminarDelCarrito(${prod.id})" class="btn btn-danger"><i class="fas fa-trash"></i></button>
        </div>
        `

        contenedorCarrito.appendChild(div)

        localStorage.setItem('carrito', JSON.stringify(carrito))
    })

    /* ---------------------- Precio final de los productos --------------------- */
    contadorCarrito.innerText = carrito.length
    precioTotal.innerHTML = carrito.reduce((acc, prod) => acc + prod.precio, 0 )
}


/* ---------------------------- Finalizar Compra ---------------------------- */
finalizarCompra.addEventListener('click',() =>{
    swal({
        icon: "success",
        title: "Compra Finalizada",
        button: "Aceptar",
    })
}) 


/* ----------------------------- Vaciar carrito ----------------------------- */
vaciarCarrito.addEventListener('click', () =>{
    carrito.length = 0
    actualizarCarrito()
    })


/* ------------------------------ Ver Producto ------------------------------ */
const verProducto = (ver) => {
    const productoAVer = productos.find(productos => productos.id === ver);
    // console.log(productoAver);
    swal({
        icon: `${productoAVer.imagen}`,
        title: `${productoAVer.titulo}`,
        text: `${productoAVer.titulo} $${productoAVer.precio}`,
        button: false,
        closeOnEsc: false
    })
    
    localStorage.setItem ("Producto a ver", JSON.stringify(productoAVer));
}


/* -------------------------------- Sumar IVA ------------------------------- */
const productosIva = productos.map(productos => {
    productos.precio = productos.precio + productos.precio * 0.10
    return productos
})

for (const producto of productos)
    producto.sumaIva;


/* ------------------------------ Validar Stock ----------------------------- */
function validarStock(stock, cantidadDeProductos){
    stock > cantidadDeProductos ? true : false
}


/* --------------------------- Filtrar Por Precio --------------------------- */
function menorPrecio(){
    const productosDeMenorPrecio = productos.sort((menor, mayor) => {
        return menor.precio - mayor.precio
    })

    generarCards(productosDeMenorPrecio);
}

function mayorPrecio(){
    const productosDeMayorPrecio = productos.sort((mayor, menor) => {
        return menor.precio - mayor.precio
    })

    generarCards(productosDeMayorPrecio);
}


/* -------------------------- Codigo para buscador -------------------------- */
function buscarProducto(){
    const productoBuscado = document.querySelector('#buscador').value.toUpperCase().trim();

    const productosEncontrados = productos.filter((productos) => {
        return productos.titulo.toUpperCase().match(productoBuscado);
    })
    
    generarCards(productosEncontrados);

    localStorage.setItem ("Producto que buscaste", JSON.stringify(productoBuscado));
}
