const productos = [
  {
    nombre: "Manzana",
    precio: 800,
    descripcion: "Fruta fresca y jugosa",
    imagen: "https://via.placeholder.com/150",
  },
  {
    nombre: "Pera",
    precio: 900,
    descripcion: "Dulce y refrescante",
    imagen: "https://via.placeholder.com/150",
  },
  {
    nombre: "Plátano",
    precio: 700,
    descripcion: "Energético y nutritivo",
    imagen: "https://via.placeholder.com/150",
  },
]

const contenedor = document.getElementById("catalogo")

function mostrarCatalogo(lista) {
  contenedor.innerHTML = "" // Limpia el contenedor

  lista.forEach((producto) => {
    const card = document.createElement("div")
    card.className = "card"

    card.innerHTML = `
      <h2>${producto.nombre}</h2>
      <p>${producto.descripcion}</p>
      <p class="precio">$${producto.precio}</p>
      <button>Agregar</button>
    `
    contenedor.appendChild(card)

    card.querySelector("button").addEventListener("click", () => {
      alert(`Has agregado ${producto.nombre} al carrito.`)
      console.log("123")
    })
  })
}

mostrarCatalogo(productos)
