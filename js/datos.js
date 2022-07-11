class Productos{
    constructor(id, nombre, modelo, tipo, precio){
        this.id=id;
        this.nombre=nombre;
        this.modelo=modelo;
        this.tipo=tipo;
        this.precio=precio;
    }
}

const listaProductos =[
    {
        id:0,
        nombre:"alas",
        modelo:"unico",
        tipo:"macrame",
        precio:500
    },
    {
        id:1,
        nombre:"carpeta",
        modelo:"verde",
        tipo:"macrame",
        precio:600
    },
    {
        id:2,
        nombre:"porta ukelele",
        modelo:"unico",
        tipo:"macrame",
        precio:1500
    },
    {
        id:3,
        nombre:"atrapasueños",
        modelo:"unico",
        tipo:"macrame",
        precio:1100
    },
    {
        id:4,
        nombre:"plumas",
        modelo:"unico",
        tipo:"macrame",
        precio:900
    }
]
///////////////////////// .-=[Textos]=-. /////////////////

const TEXTO_INGRESO_PRODUCTO_ERROR = "El valor es incorrecto. Pruebe otra vez";
const TEXTO_INGRESO_PRODUCTO_NOMBRE = "Ingrese el nombre del producto";
const TEXTO_INGRESO_PRODUCTO_ID = "Ingrese el ID del producto";
const TEXTO_INGRESO_PRODUCTO_MODELO = "Ingrese el modelo del producto";
const TEXTO_INGRESO_PRODUCTO_TIPO = "Ingrese el tipo del producto";
const TEXTO_INGRESO_PRODUCTO_PRECIO = "Ingrese el precio del producto";
const TEXTO_INGRESO_PARAMETRO_BUSQUEDA = "Ingrese el parametro por el que quiere buscar (id, nombre, precio, id, tipo)";


const ingresarDatos = (texto, textoError) => {
    let dato = prompt(texto) || "";
    if (!(dato.trim())){
        alert(textoError);
        ingresarDatos(texto,textoError);
    }
    return dato;
}

const validarNumero = (num, texto, textoError) =>{
    if (isNaN(num)){
        alert(textoError);
        num= ingresarDatos(texto, textoError);
        num= validarNumero(num, texto, textoError);
    }
    return num;
}


const agregarProductos = () => {
    const nom= ingresarDatos(TEXTO_INGRESO_PRODUCTO_NOMBRE, TEXTO_INGRESO_PRODUCTO_ERROR);
    const mod= ingresarDatos(TEXTO_INGRESO_PRODUCTO_MODELO, TEXTO_INGRESO_PRODUCTO_ERROR);
    const tip= ingresarDatos(TEXTO_INGRESO_PRODUCTO_TIPO, TEXTO_INGRESO_PRODUCTO_ERROR);
    let val= ingresarDatos(TEXTO_INGRESO_PRODUCTO_PRECIO, TEXTO_INGRESO_PRODUCTO_ERROR);
    val=validarNumero(val, TEXTO_INGRESO_PRODUCTO_PRECIO, TEXTO_INGRESO_PRODUCTO_ERROR);
    const productoAgregar= new Productos(listaProductos.length, nom, mod, tip, parseFloat(val));
    listaProductos.push(productoAgregar);
}
const buscarId = () => {
    let productoABuscar = ingresarDatos(TEXTO_INGRESO_PRODUCTO_ID, TEXTO_INGRESO_PRODUCTO_ERROR);
    // productoABuscar= validarNumero(productoABuscar, TEXTO_INGRESO_PRODUCTO_ID,TEXTO_INGRESO_PRODUCTO_ERROR);
    productoABuscar = validarNumero(productoABuscar, TEXTO_INGRESO_PRODUCTO_ID, TEXTO_INGRESO_PRODUCTO_ERROR);
    console.log(productoABuscar);
    const busqueda = listaProductos.filter(buscar => buscar.id.toString().includes(productoABuscar))
    return busqueda
}

const buscarNombre = () => {
    const productoABuscar = ingresarDatos(TEXTO_INGRESO_PRODUCTO_NOMBRE, TEXTO_INGRESO_PRODUCTO_ERROR);
    const busqueda = listaProductos.filter(buscar => buscar.nombre.includes(productoABuscar))
    return busqueda
}
const buscarModelo = () => {
    const productoABuscar = ingresarDatos(TEXTO_INGRESO_PRODUCTO_MODELO, TEXTO_INGRESO_PRODUCTO_ERROR);
    const busqueda = listaProductos.filter(buscar => buscar.modelo.includes(productoABuscar))
    return busqueda
}
const buscarTipo = () => {
    const productoABuscar = ingresarDatos(TEXTO_INGRESO_PRODUCTO_TIPO, TEXTO_INGRESO_PRODUCTO_ERROR);
    const busqueda = listaProductos.filter(buscar => buscar.tipo.includes(productoABuscar))
    return busqueda
}
const buscarPrecio = () => {
    const productoABuscar = ingresarDatos(TEXTO_INGRESO_PRODUCTO_PRECIO, TEXTO_INGRESO_PRODUCTO_ERROR);
    productoABuscar= validarNumero(productoABuscar, TEXTO_INGRESO_PRODUCTO_PRECIO,TEXTO_INGRESO_PRODUCTO_ERROR);
    const busqueda = listaProductos.filter(buscar => buscar.precio.toString().includes(productoABuscar))
    return busqueda
}
const confirmacion = () => {
    return confirm("Desea remover el producto con ese ID?")
}

const arreglarID = (limite) =>{
    for (let productos of listaProductos){
        if (productos.id > limite){
            productos.id-=1;
        } 
    }
}

const sacarProductos = () => {
    const listaFiltrados = buscarNombre();
    console.log(listaFiltrados);
    let productoARemover = ingresarDatos(TEXTO_INGRESO_PRODUCTO_ID, TEXTO_INGRESO_PRODUCTO_ERROR);
    productoARemover = validarNumero(productoARemover, TEXTO_INGRESO_PRODUCTO_ID, TEXTO_INGRESO_PRODUCTO_ERROR);
    if (confirmacion()){
        listaProductos.splice(productoARemover, 1);
        arreglarID(productoARemover);
    }else{
        alert("No sacaste ningun producto")
    }
}

const realizarBusquedaCorrespondiente = (parametro) => {
    let resultado;
    switch (parametro) {
        case "id":
            resultado=buscarId()
            break;
        case "nombre":
            resultado=buscarNombre()
            break;
        case "tipo":
            resultado=buscarTipo()
            break;
        case "precio":
            resultado=buscarPrecio()
            break;
        case "modelo":
            resultado=buscarModelo()
            break;
        default:
            // console.log(parametro)
            // if (confirmacion){ //Avisar que no se entendio y preguntar si quiere ingresar otro
            //     modificarProducto();
            // }else{
            //     resultado="";
            // }
            break;
    }
    return resultado;
}

const modificarProducto = () => {
    const parametroDeBusqueda = ingresarDatos(TEXTO_INGRESO_PARAMETRO_BUSQUEDA, TEXTO_INGRESO_PRODUCTO_ERROR).toString().toLowerCase();
    console.log(parametroDeBusqueda);
    realizarBusquedaCorrespondiente(parametroDeBusqueda);

    

}

const espaciarBorrar = () => {
    for (i=0; i>10; i++){
        console.log("i")
    }
}

espaciarBorrar();
console.log("La lista de productos actualmente esta de esta manera: ", listaProductos);
sacarProductos();
// modificarProducto();
// agregarProductos();
console.log("La lista de productos actualmente esta de esta manera: ", listaProductos);