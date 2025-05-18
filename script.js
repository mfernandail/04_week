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

const coffees = [
  {
    name: "Espresso",
    description: "The base for many coffee drinks.",
    img: "./images/Espresso.webp",
    ingredients: ["18–20 g of finely ground coffee", "30–40 ml of hot water"],
    instructions: [
      "Load the portafilter with coffee and tamp firmly.",
      "Brew with an espresso machine for 25–30 seconds.",
      "Serve in a small cup (demitasse).",
    ],
  },
  {
    name: "Latte",
    description: "Smooth and milky.",
    img: "./images/Latte.webp",
    ingredients: [
      "1 shot of espresso (30 ml)",
      "200 ml of steamed milk",
      "A small amount of milk foam (optional)",
    ],
    instructions: [
      "Brew the espresso into a large cup.",
      "Steam the milk until hot and slightly foamy.",
      "Pour the milk over the espresso and top with a thin layer of foam.",
    ],
  },
  {
    name: "Mocha",
    description: "Chocolatey and creamy.",
    img: "./images/Mocca.png",
    ingredients: [
      "1 shot of espresso (30 ml)",
      "150 ml of steamed milk",
      "1 tablespoon of chocolate syrup or cocoa",
      "Whipped cream (optional)",
    ],
    instructions: [
      "Mix the hot espresso with the chocolate syrup.",
      "Add steamed milk.",
      "Top with whipped cream if desired.",
    ],
  },
  {
    name: "Cappuccino",
    description: "Balanced: equal parts espresso, milk, and foam.",
    img: "./images/Capuchino.avif",
    ingredients: [
      "1 shot of espresso (30 ml)",
      "60 ml of steamed milk",
      "60 ml of milk foam",
    ],
    instructions: [
      "Brew the espresso.",
      "Add steamed milk.",
      "Spoon the foam on top.",
      "Optional: dust with cocoa or cinnamon.",
    ],
  },
  {
    name: "Frappé",
    description: "Cold and frothy.",
    img: "./images/Frappe.webp",
    ingredients: [
      "2 teaspoons of instant coffee",
      "2–3 tablespoons of cold water",
      "Sugar to taste",
      "Milk (optional)",
      "Ice",
    ],
    instructions: [
      "Shake the instant coffee, water, and sugar in a shaker or blend until foamy.",
      "Pour into a glass over ice.",
      "Add more water or milk to taste.",
    ],
  },
]

const contenedor = document.getElementById("catalogo")

const productosAgregadosArr = []

// function mostrarCatalogo(lista) {
//   contenedor.innerHTML = "" // Limpia el contenedor

//   lista.forEach((producto) => {
//     const card = document.createElement("div")
//     card.className = "card"

//     card.innerHTML = `
//       <h2>${producto.nombre}</h2>
//       <p>${producto.descripcion}</p>
//       <p class="precio">$${producto.precio}</p>
//       <button>Agregar</button>
//     `
//     contenedor.appendChild(card)

//     card.querySelector("button").addEventListener("click", () => {
//       const productosAgregados = document.querySelector(".productosAgregado")

//       productosAgregadosArr.push(producto)
//       console.log(productosAgregadosArr)

//       const lista_ul = document.createElement("ul")

//       productosAgregadosArr.forEach((producto) => {
//         const lista_li = document.createElement("li")

//         lista_li.innerHTML = `
//           <li>${producto.nombre}</li>
//           <li>$${producto.precio}</li>
//           <li>${producto.descripcion}</li>
//         `

//         lista_ul.appendChild(lista_li)
//       })

//       productosAgregados.appendChild(lista_ul)
//     })
//   })
// }

// mostrarCatalogo(productos)

const container = document.getElementById("catalog")
const caffeeSelected = document.querySelector(".caffess_selected")

function showCaffe(coffees) {
  container.innerHTML = ""

  coffees.forEach((coffee) => {
    const card = document.createElement("div")
    card.className = "card"

    card.innerHTML = `
      <img src="${coffee.img}" alt="${coffee.name}">
      <h2>${coffee.name}</h2>
      <p>${coffee.description}</p>
      <button>Show Ingredients</button>
    `

    const button = card.querySelector("button")
    button.addEventListener("click", () => {
      caffeeSelected.innerHTML = `
        <h4>Ingredients:</h4>
        <ul>
          ${coffee.ingredients.map((c) => `<li>${c}</li>`).join("")}
        </ul>
        <h4>Instructions:</h4>
        <ol>
          ${coffee.instructions.map((i) => `<li>${i}</li>`).join("")}
        </ol>
      `
    })

    container.appendChild(card)
  })
}

showCaffe(coffees)

{
  /* <ul>
${coffee.ingredients.map((c) => `<li>${c}</li>`).join("")}
</ul>
<ol>
${coffee.instructions.map((i) => `<li>${i}</li>`).join("")}
</ol> */
}