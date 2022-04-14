class Producto {
    constructor(id, titulo, precio, stock, categoria, imagen){
    this.id = id;
    this.titulo = titulo;
    this.precio = parseFloat(precio);
    this.stock = parseFloat(stock)
    this.categoria = categoria;
    this.imagen = imagen;
    }
}


/* MOSTRAR CARDS EN EL HTML */ 
function mostrarCards(cards){
    document.getElementById("productos").innerHTML = cards;
}

function cardsGeneradas(productosHtml){
    let acumuladorDeCards = ``;
    productosHtml.forEach((element) => {
        acumuladorDeCards += `<div class="fcard">
            <div class="fcard__container">
                <img src="${element.imagen === undefined ? 'sin-imagen' : element.imagen}">
                <div class="like">
                <i onclick="agregarFavorito()" class="fas fa-heart heart-icon"></i>
                </div>
                <p class="fcard__stock">${element.stock > 0 ? 'Stock disponible ' : 'Sin stock'}</p>
            </div>
            <div class="fcard__description">
            <h3 onclick="verProducto(${element.id})"><h3 class="fcard__title">${element.titulo}</h3></a>
                <p class="fcard__price">$ ${element.precio}</p> <p class="fcard__iva">Iva + %10</p>
                <div class="fcard__send">Envio Gratis                              
                    <i class="fas fa-truck" title="Envio Gratis"></i> 
                </div>
                <span id="stock-producto">Stock de producto: ${element.stock}</stock>
                <div class="fcard__container--button">
                    <button class="fcard__buy--btn" id="btn-carrito" onclick="agregarAlCarrito(${element.id})">
                        <i class=" fas fa-cart-arrow-down" alt="Agregar al carrito"></i>
                    </button>
                </div>
            </div>
        </div>`
    });
    mostrarCards(acumuladorDeCards);
}

fetch("../data.json")

.then((response) => response.json())
.then((data) => cardsGeneradas(data.productos))


const favorito = [];


const carrito = [];

carrito.length === 0 && console.log("El carrito está vacío")


/* ARRAY DE PRODUCTOS */ 
const productos = [
    {   
        id: 0,
        titulo: 'Procesador AMD Ryzen 7 5700G',
        stock: 20, 
        precio: 48600,
        categoria: 'Procesador AMD',
        imagen:'../../img/Procesador AMD Ryzen 7 5700G.jpg' 
    },
    { 
        id: 1, 
        titulo: 'Procesador AMD Ryzen 5 5600X', 
        stock: 10, 
        precio: 41000, 
        categoria: 'Procesador AMD', 
        imagen: '../../img/Procesador gamer AMD Ryzen 5 5600X.jpg'
    },
    { id: 2, 
        titulo: 'Procesador gamer Intel Core i7-9700K', 
        stock: 0, 
        precio: 42300, 
        categoria: 'Procesador INTEL', 
        imagen: '../../img/Procesador gamer Intel Core i7-9700K.jpg'
    },
    { id: 3, 
        titulo: 'Procesador Intel Core i5-10400F', 
        stock: 5, 
        precio: 22000, 
        categoria: 'Procesador INTEL', 
        imagen: '../../img/Procesador Intel Core i5-10400F.jpg'
    },
    { id: 4, 
        titulo: 'Procesador gamer AMD Ryzen 5 3600', 
        stock: 15, 
        precio: 37000, 
        categoria: 'Procesador AMD', 
        imagen: '../../img/Procesador gamer AMD Ryzen 5 3600.jpg'
    },
    { id: 5, 
        titulo: 'Procesador Intel Core i3-10100F', 
        stock: 0, 
        precio: 13000, 
        categoria: 'Procesador INTEL', 
        imagen: '../../img/Procesador Intel Core i3-10100F.jpg'
    },
    { id: 6, 
        titulo: 'Micro Procesador Intel Core I5 9400', 
        stock: 20, 
        precio: 26000, 
        categoria: 'Procesador INTEL', 
        imagen: '../../img/Micro Procesador Intel Core I5 9400.jpg'
    },
    { id: 6, 
        titulo: 'Micro Procesador Intel Core I5 9400', 
        stock: 20, 
        precio: 26000,
        categoria: 'Procesador INTEL', 
        imagen:''
    }
];


/* SUMA IVA */ 
const productosIva = productos.map(productos => {
    productos.precio = productos.precio + productos.precio * 0.10
    return productos
})

for (const producto of productos)
    producto.sumaIva;


/* VALIDAR STOCK */ 
function validarStock(stock, cantidadDeProductos){
    stock > cantidadDeProductos ? true : false
}

function actualizarStock(){
    document.querySelector('#stock-producto').innerHTML = productoAgregado.stock
    productoAgregado.stock --;

    nuevoStock(stockDeProductos);
}

/* FILTRAR PRECIOS */ 
function menorPrecio(){
    const productosDeMenorPrecio = productos.sort((menor, mayor) => {
        return menor.precio - mayor.precio
    })

    cardsGeneradas(productosDeMenorPrecio);
}

function mayorPrecio(){
    const productosDeMayorPrecio = productos.sort((mayor, menor) => {
        return menor.precio - mayor.precio
    })

    cardsGeneradas(productosDeMayorPrecio);
}

/* CODIGO PARA FILTRAR BUSCADOR */
function buscarProducto(){
    const productoBuscado = document.querySelector('#buscador').value.toUpperCase().trim();

    const productosEncontrados = productos.filter((productos) => {
        return productos.titulo.toUpperCase().match(productoBuscado);
    })
    
    cardsGeneradas(productosEncontrados);

    localStorage.setItem ("Producto que buscaste", JSON.stringify(productoBuscado));
}


/* AGREGAR AL CARRITO */ 
const agregarAlCarrito = (idProductos) => {
    const productoAgregado = productos.find(producto => producto.id === idProductos);

    if (productoAgregado.stock === 0) {
        swal({
            title: "No hay stock",
            text: `${productoAgregado.titulo}`,
            icon: "error",
            closeOnEsc: false
        });
    }
    else if (productoAgregado.stock > 0) {
        swal({
            title: "Agregaste al carrito!",
            text: `${productoAgregado.titulo} $${productoAgregado.precio}`,
            icon: "success",
            button: "Aceptar",
            closeOnEsc: false
        });
        carrito.push(productoAgregado);
        document.querySelector('#carrito-cantidad').innerHTML = carrito.length;
    }
    localStorage.setItem ("Que agregaste al carrito", JSON.stringify(carrito));
}

/* AGREGAR A FAVORITOS */ 
const agregarFavorito = (idProductos) => {
    const productoGuardado = productos.find(producto => producto.id === idProductos);

    document.querySelector('#favoritos').innerHTML = favorito.length = 
    favorito.push(productoGuardado);
}