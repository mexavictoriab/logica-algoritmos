const producto = [
    { nombre: "Lentes CH", precio: 1500, categoria: "Optica" },
    { nombre: "Tenis deportivos", precio: 350, categoria: "Ropa" },
    { nombre: "Vestido Flores", precio: 450, categoria: "Ropa" },
    { nombre: "Toallitas desmaquillantes", precio: 40, categoria: "Farmacia" },
    { nombre: "Delineador cafe", precio: 85, categoria: "Farmacia" },
    { nombre: "Botas chunkie", precio: 650, categoria: "Ropa" },
    { nombre: "Lentes Ray-Ban", precio: 1500, categoria: "Optica" },
    { nombre: "Crema facial piel sensible", precio: 1350, categoria: "Farmacia" }
]

const productosBaratos = () => {
    return producto.filter(producto => producto.precio <= 100)
}

console.log(productosBaratos());

const ordenarProductos = (arreglo) => {
    return arreglo.sort((a, b) => a.nombre.localeCompare(b.nombre))
}

let ordProduct = ordenarProductos(productosBaratos())
console.log(ordProduct);

const nombresProductos = (resultado) => {
    return resultado.map(resultado => resultado.nombre)
}

let nomProd = nombresProductos(ordProduct)
console.log(nomProd);