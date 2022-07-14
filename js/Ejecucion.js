const ejecucion = () => {
    seleccionSistema(opciones());
    if (!confirm("Desea terminar el programa?")){
        ejecucion();
    }
}

ejecucion();

