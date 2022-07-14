class Productos{
    constructor(id, nombre, modelo, tipo, precio, stock){
        this.id=id;
        this.nombre=nombre;
        this.modelo=modelo;
        this.tipo=tipo;
        this.precio=precio;
        this.cant=stock;
    }
}

let carrito= [];

const listaProductos =[
    {
        id:0,
        nombre:"alas",
        modelo:"unico",
        tipo:"macrame",
        precio:500,
        cant: 100,
    },
    {
        id:1,
        nombre:"carpeta",
        modelo:"verde",
        tipo:"macrame",
        precio:600,
        cant: 100,
    },
    {
        id:2,
        nombre:"porta ukelele",
        modelo:"unico",
        tipo:"macrame",
        precio:1500,
        cant: 100,
    },
    {
        id:3,
        nombre:"atrapasueños",
        modelo:"unico",
        tipo:"macrame",
        precio:1100,
        cant: 100,
    },
    {
        id:4,
        nombre:"plumas",
        modelo:"unico",
        tipo:"macrame",
        precio:900,
        cant: 100,
    }
]
///////////////////////// .-=[Textos]=-. /////////////////

const Textos = {
    bienvenida: "Bienvenido! Ingrese la opcion deseada:",
    error: "El valor es incorrecto. Pruebe otra vez",
    nombre: "Ingrese el nombre del producto",
    id:"Ingrese el ID del producto",
    modelo: "Ingrese el modelo del producto",
    tipo: "Ingrese el tipo del producto",
    precio: "Ingrese el precio del producto",
    cantidad:"Ingrese la cantidad del stock"

}

const validarNroConLimites = (rta, limite1, limite2) => { return ((!!rta) && (!isNaN(rta)) && ((rta>=limite1) && (rta<=limite2)))}

const validarString = (valor) => {return (!!valor) && (isNaN(valor))}

const ingresarString = (texto, error) => {
    let respuesta = prompt(texto);
    if (!validarString(respuesta)){
        alert(error);
        respuesta= ingresarString(texto, error)
    }
    return respuesta;
}

const ingresarNro = (texto, error, lim1, lim2) =>{
    let respuesta = prompt(texto);
    if (!validarNroConLimites(respuesta,lim1,lim2)){
        alert(error);
        respuesta= ingresarNro(texto, error, lim1, lim2)
    }
    return respuesta;
}
const ingresarDatosProductos = () =>{
    const nom= ingresarString(Textos.nombre, Textos.error);
    const mod= ingresarString(Textos.modelo, Textos.error);
    const tip= ingresarString(Textos.tipo, Textos.error);
    const val = ingresarNro(Textos.precio, Textos.error, 0, Infinity);
    const cant = parseInt(ingresarNro(Textos.cantidad, Textos.error, 0, Infinity));
    const productoAgregar= new Productos(listaProductos.length, nom, mod, tip, parseFloat(val).toFixed(2), cant);
    return (productoAgregar);
} 
const ingresarProductos = () => {
    const producto = ingresarDatosProductos();
    listaProductos.push(producto);
    console.log(listaProductos)
}


const opciones = () => {
    rta  = prompt(Textos.bienvenida+`
    1- Ingresar un producto nuevo
    2- Actualizar stock
    3- Simular carrito
    4- Visualizar producto
    5- Modificar producto`)
    if (!validarNroConLimites(rta, 1, 5)){
        alert(Textos.error);
        rta=opciones();
    }
    return rta;
}






const seleccionSistema= (rta) => {
    switch (parseInt(rta)) {
        case 1:
            ingresarProductos();
            break;
        case 2:
            modificarStock();
            break;
        case 3:
            agregarCarrito();
            break;
        case 4:
            buscarProducto();
            break;
        default:
            modificarProducto();
            break;
    }
}


const buscarProducto = () =>{
    const producto = ingresarString(Textos.nombre + " a buscar.", Textos.error);
    console.log(producto)
    const resultado= listaProductos.filter(buscar => buscar.nombre.includes(producto));
    console.log(resultado)
    if (resultado.length === 0){
        if(confirm("No se encontro producto. Quiere ingresar otro?")){
            buscarProducto();
        } 
    } else {
        console.log(`Los productos encontrados son:`, resultado);
    }
    return (resultado);
}

const modificarStock = () => {
    const id = ingresarNro(Textos.id, Textos.error, 0, listaProductos.length);
    const stock = ingresarNro(Textos.cantidad, Textos.error, 0, Infinity);
    listaProductos[id].cant = stock;
    console.log(listaProductos)
}

const modificarProducto=() => {
    const id = ingresarNro(Textos.id, Textos.error, 0, listaProductos.length);
    let nuevosDatos = ingresarDatosProductos();
    nuevosDatos.id=id;
    listaProductos[id]=nuevosDatos;
    console.log(listaProductos);
}

const calcularTotalCarrito = () => {
    return carrito.reduce((acc, el) => acc + el.precio, 0)
}

const agregarCarrito = () => {
    const idItem = ingresarNro(Textos.id, Textos.error, 0, listaProductos.length);
    carrito.push(listaProductos[idItem])
    if (confirm("Desea agregar otro producto?")){
        agregarCarrito()
    } else{
        console.log(carrito);
        console.log("El total a pagar es:", calcularTotalCarrito())
        carrito= [];
    }
}

