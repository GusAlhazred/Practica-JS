
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


const ejecucion = () => {
    seleccionSistema(opciones());
    if (!confirm("Desea terminar el programa?")){
        ejecucion();
    }
}

ejecucion();

