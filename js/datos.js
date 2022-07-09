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
//Textos

const TEXTO_INGRESO_PRODUCTO_NOMBRE = "Ingrese el nombre del producto";
const TEXTO_INGRESO_PRODUCTO_ID = "Ingrese el ID del producto";
// const TEXTO_INGRESO_PRODUCTO_NOMBRE_ERROR = "El valor es incorrecto. Pruebe otra vez";
const TEXTO_INGRESO_PRODUCTO_ERROR = "El valor es incorrecto. Pruebe otra vez";
const TEXTO_INGRESO_PRODUCTO_MODELO = "Ingrese el modelo del producto";
// const TEXTO_INGRESO_PRODUCTO_MODELO_ERROR = "El valor es incorrecto. Pruebe otra vez";
const TEXTO_INGRESO_PRODUCTO_TIPO = "Ingrese el tipo del producto";
// const TEXTO_INGRESO_PRODUCTO_TIPO_ERROR = "El valor es incorrecto. Pruebe otra vez";
const TEXTO_INGRESO_PRODUCTO_PRECIO = "Ingrese el precio del producto";
// const TEXTO_INGRESO_PRODUCTO_PRECIO_ERROR = "El valor es incorrecto. Pruebe otra vez";


const ingresarDatos = (texto, textoError) => {
    let dato = prompt(texto || "");
    if (dato.trim()){
        return dato;
    }else{
        alert(textoError);
        ingresarDatos(texto,textoError);
    }
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

const busqueda = () => {
    const productoABuscar = ingresarDatos(TEXTO_INGRESO_PRODUCTO_NOMBRE, TEXTO_INGRESO_PRODUCTO_ERROR);
    const busqueda = listaProductos.filter(buscar => buscar.nombre.includes(productoABuscar))
    return busqueda
}
const confirmacion = () => {
    return confirm("Desea remover el producto con ese ID?")
}

const sacarProductos = () => {
    const listaFiltrados = busqueda();
    console.log(listaFiltrados);
    let productoARemover = ingresarDatos(TEXTO_INGRESO_PRODUCTO_ID, TEXTO_INGRESO_PRODUCTO_ERROR);
    productoARemover = validarNumero(productoARemover, TEXTO_INGRESO_PRODUCTO_ID, TEXTO_INGRESO_PRODUCTO_ERROR);
    if (confirmacion()){
        listaProductos.splice(productoARemover, 1);
    }else{
        alert("No sacaste ningun producto")
    }
    console.log("La lista de productos actualmente esta de esta manera: ", listaProductos);
    
}

console.log("La lista de productos actualmente esta de esta manera: ", listaProductos);
sacarProductos()

// // agregarProductos();
// console.log(listaProductos)