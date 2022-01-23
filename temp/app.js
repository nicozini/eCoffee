// Tooltip Create Product Button
let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));

let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});


// Product Create
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

    let confirm = document.createTextNode(`¡Great! your product: ${userProduct.name} was created successfully at "${userProduct.category}" category.`);
    newProductDiv.className = 'confirm-product-style'
    newProductDiv.appendChild(confirm);
  });
});