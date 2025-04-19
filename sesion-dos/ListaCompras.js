let listaDeCompras = []

const agregarProducto = (producto) => {
    if (!listaDeCompras.includes(producto)) {
        listaDeCompras.push(producto);
        console.log(`"${producto}" fue agregada a la lista`);
    } else {
        console.log(`"${producto}" ya esta en a la lista`);
    }
}

const eliminarProducto = (producto) => {
    const indice = listaDeCompras.indexOf(producto)

    if (indice !== -1) {
        listaDeCompras.splice(indice, 1);
        console.log(`"${producto}" ha sido eliminado`);
    } else {
        console.log(`"${producto}" no esta en la lista`);
    }
}

const mostrarLista = () => {
    if (listaDeCompras.length === 0) {
        console.log(`La lista de compras esta vacia`);
    } else {
        console.log(`Lista de compras:`);
        listaDeCompras.forEach((producto, index) => {
            console.log(`${index + 1}. ${producto}`);
        })
    }
}


agregarProducto("Manzanas")
agregarProducto("Sandia")
agregarProducto("Huevos")
agregarProducto("Pan")
agregarProducto("Aguacate")
agregarProducto("Pan")


mostrarLista()

eliminarProducto("Manzanas")
eliminarProducto("Tortillas")
eliminarProducto("Pan")
eliminarProducto("Aguacate")
eliminarProducto("Huevos")
eliminarProducto("Sandia")

mostrarLista()