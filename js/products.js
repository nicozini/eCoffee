// Product Create
$(document).ready(function() {
  let createProductBtn = $('.create-product-btn');

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

  createProductBtn.click(function(e) {
    e.preventDefault();
    $('.new-product-content').addClass("new-product-content-st");
    let list = [];

    let productID = parseInt($('#productID').val());
    let productName = $('#productName').val();
    let productCategory = $('#productCategory').val();
    let productPrice = parseInt($('#productPrice').val());
    let productStock = parseInt($('#productStock').val());
    let productFeature = $('#productFeature').val();
   
    const userProduct = new Producto(
      productID,
      productName,
      productCategory,
      productPrice,
      productStock,
      productFeature
    );
    
    list.push(userProduct)

    // Developer objetc view
    console.log('IMPRIMO USERPRODUCT CREADO');
    console.log(userProduct);
    console.log(list);

    let divContent = document.querySelector('.new-product-content');
    
    for (let i = 0; i < list.length; i++) {
      console.log(list[i].name)
      console.log(list[i].price)
      console.log(divContent)
      
      let linew = document.createElement("h5");
      let content = document.createTextNode(`Congratulations! Your product ${list[i].name} 
      was successfully created for $${list[i].price} b/u.-`);

      divContent.append(linew);
      divContent.append(content);              
      linew.classList.add("item"); 
    }
  });
});