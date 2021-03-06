// Product Create
window.addEventListener("load", function() {
  let lista = [];

  let createProductButton = document.querySelector('.simulator-poduct');

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


  createProductButton.addEventListener("click", function(){
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

    const list = document.querySelector(".add-product");
    // Title
    const title = document.createElement('h1');
    const textTitle = document.createTextNode('eCoffee Product List');
    list.appendChild(title);
    title.appendChild(textTitle);
    title.classList.add("item-title");
    
    for (const item of lista) {
      const linew = document.createElement("h5");
      const content = document.createTextNode(`${item.name} - $${item.price}`);
      list.appendChild(linew);
      linew.appendChild(content);              
      linew.classList.add("item");
    }
  });
});