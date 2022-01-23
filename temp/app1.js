// Tooltip Create Product Button
let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));

let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});


// Product Create
let lista = [];

window.addEventListener("load", function() {
  let buttonCreate = document.querySelector('.button-create');
  buttonCreate.addEventListener("click", function() {
    window.location.href = 'productCreate.html';
  });  
});

window.addEventListener("load", function() {
  let createProductButton = document.querySelector('.simulator-poduct');
  let newProductDiv = document.querySelector('.new-product-card');
  
  class Producto {   
    constructor(id, name, category, price, stock, features = []) {
      this.id = id;
      this.name = name;
      this.category = category;
      this.price = price;
      this.stock = stock;
      this.features = features;
    }

    detalleProducto() {
      let detail = `The ${this.name} corresponds to the category of ${this.category}. We currently have a stock of ${this.stock} units. Among its most relevant characteristics are: `

      this.features.forEach((feature) => {
          detail += `${feature}, `;
      })

      return detail;
    }
  }

  createProductButton.addEventListener("click", function() {
    const userProduct = new Producto(
      parseInt(prompt('Enter numeric ID')),
      prompt('Pic a name to your product'),
      prompt('Select Category'),
      parseInt(prompt('Put a Price to your product')),
      parseInt(prompt('Stock (units)')),
      prompt('Enter feature')
    );

    // Developer objetc view
    console.log(userProduct);

    lista.push(userProduct)
    console.log(lista);


    // let checkButton = document.querySelector(".check-list");
    // Title
    const list = document.querySelector(".add-product");
    const title = document.createElement('h1');
    const textTitle = document.createTextNode('eCoffee Product List');
    list.appendChild(title);
    title.appendChild(textTitle);
    title.classList.add("item-title");
    

    lista.forEach(function (data, index) {
      const linew = document.createElement("h5");
      const content = document.createTextNode(`${data.name} - $${data.price}`);
      list.appendChild(linew);
      linew.appendChild(content);              
      linew.classList.add("item");
    });
    

    // addElements(lista);
    


  });
});















// let productsArray = [
//   {
//     id: 1,
//     name: "Cafetera Molinex",
//     category: "Malek",
//     price: "4000",
//     stock: "68",
//     features: ["Duradero", "Titanio", "Eficiencia Energética"]
//   },
//   {
//     id: 2,
//     name: "Ebonee Coffee Maker",
//     category: "Antat",
//     price: "5500",
//     stock: "85743",
//     features: ["Original Steel", "Mayor vida útil"]
//   },
//   {
//     id: 3,
//     name: "Coffe Elsy",
//     category: "Oglevie",
//     price: "3971",
//     stock: "0",
//     features: ["Eficiencia Energética"]
//   },
//   {
//     id: 4,
//     name: "Mack Coffee Maker",
//     category: "Cornau",
//     price: "3973",
//     stock: "2323",
//     features: ["Certificada", "Ganadora de Premios Mundiales", "Eficiencia Energética"]
//   },
//   {
//     id: 5,
//     name: "Levey Titanium Coffee",
//     category: "Alekseicik",
//     price: "3286",
//     stock: "086",
//     features: ["La mas vendida", "Eficiencia Energética"]
//   }
// ]

// window.addEventListener("load", function() {
//     let checkButton = document.querySelector(".check-list");

//     checkButton.addEventListener("click", function(){
//         function addElements(array) {
//             const list = document.querySelector(".add-product");
            
//             const title = document.createElement('h1');
//             const textTitle = document.createTextNode('eCoffee Product List');
//             list.appendChild(title);
//             title.appendChild(textTitle);
//             title.classList.add("item-title");

//             array.forEach(function (data, index) {
//               const linew = document.createElement("h5");
//               const content = document.createTextNode(`${data.name} - $${data.price}`);
//               list.appendChild(linew);
//               linew.appendChild(content);              
//               linew.classList.add("item");
//             });
//         }

//         addElements(productsArray);
//     });
    
// });