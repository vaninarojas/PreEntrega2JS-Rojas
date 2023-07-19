addProductosPrompt = () => {
  let productos = [];

  while (true) {
    let nombre = prompt("Ingrese nombre del producto (o 'salir' para finalizar): ");
    
    if (nombre === "salir") {
      break;
    }

    let categoria = prompt("Ingrese categoría del producto: ");
    let precio = parseFloat(prompt("Ingrese precio del producto: "));
    let stock = Number(prompt("Ingrese stock del producto: "));

    let producto = { nombre, categoria, precio, stock };
    productos.push(producto);
  }

  return productos;
};

filtrarPorCategoria = (productos, categoria) => {
  let productosFiltrados = productos.filter((producto) => {
    return producto.categoria === categoria;
  });

  return productosFiltrados;
};


sumarPrecios = (productos) => {

  return productos.reduce( (total, producto) => total + producto.precio, 0 )

};

let listaProductos = addProductosPrompt();
console.log("Lista de productos:", listaProductos);

let categoriaFiltrada = "ojos";
let productosFiltrados = filtrarPorCategoria(listaProductos, categoriaFiltrada);
console.log(`Productos de la categoría "${categoriaFiltrada}":`, productosFiltrados);

let TotalPrecios = sumarPrecios(listaProductos);
console.log("Total de precios", TotalPrecios);