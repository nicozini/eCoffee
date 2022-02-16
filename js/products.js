// Product Create
$(document).ready(function() {
  $('.new-product-card').hide()
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
    let list = [];

    let productID = $('#productID').val();
    let productName = $('#productName').val();
    let productCategory = $('#productCategory').val();
    let productPrice = $('#productPrice').val();
    let productStock = $('#productStock').val();
    let productFeature = $('#productFeature').val();
  
    console.log(productID)
    console.log(productName)
    console.log(productCategory)
    console.log(productPrice)
    console.log(productStock)
    console.log(productFeature)
    
    const userProduct = new Producto(
      productID,
      productName,
      productCategory,
      productPrice,
      productStock,
      productFeature
    );

    // Developer objetc view
    console.log('IMPRIMO USERPRODUCT CREADO');
    console.log(userProduct);
    
    list.push(userProduct)
    console.log(list);


    
    $('.new-product-card').show("slow", function() {
      const divProductContent = document.querySelector(".new-product-content");

      let title = document.createElement('h2');
      let textTitle = document.createTextNode('eCoffee Product List');
  
      divProductContent.appendChild(title);
      divProductContent.appendChild(textTitle);
      textTitle.css("color","#fff")

      console.log('IMPRIMO LIST DENTRO DE CARD');
      console.log(list);
      console.log(list);
      console.log(list);

      // for (const item of list) {
      //   const linew = document.createElement("h5");
      //   const content = document.createTextNode(`${item.name} - $${item.price}`);
  
      //   divProductContent.appendChild(linew);
      //   divProductContent.appendChild(content);              
      //   linew.classList.add("item");
      // }


    })
    


     


    // productCard.slideToggle("slow")
    // .fadeToggle(8000, function() {
    //   location.reload();
    // })



    //   $(".coffee-content-simulation")
    //     .append("<h1>Simulation result:</h1>")
    //     .append(`The total cost of your order is $${costoTotal(amount)}. It includes additional taxes.`)
    //     // .css("color","#8d4925")
    //     // .css("color", "red")
    //     // .fadeToggle(8000, function() {
    //     //   location.reload();
    //     // });
    // })



















  



















  });
});


// window.addEventListener("load", function() {
//   let lista = [];

//   let createProductButton = document.querySelector('.simulator-poduct');

//   class Producto {   
//     constructor(id, name, category, price, stock, features = []) {
//       this.id = id;
//       this.name = name;
//       this.category = category;
//       this.price = price;
//       this.stock = stock;
//       this.features = features;
//     }

//     detalleProducto() {
//       let detail = `The ${this.name} corresponds to the category of ${this.category}. We currently have a stock of ${this.stock} units. Among its most relevant characteristics are: `

//       this.features.forEach((feature) => {
//           detail += `${feature}, `;
//       })

//       return detail;
//     }
//   }


//   createProductButton.addEventListener("click", function(){
//     const userProduct = new Producto(
//       parseInt(prompt('Enter numeric ID')),
//       prompt('Pic a name to your product'),
//       prompt('Select Category'),
//       parseInt(prompt('Put a Price to your product')),
//       parseInt(prompt('Stock (units)')),
//       prompt('Enter feature')
//     );

//     // Developer objetc view
//     console.log(userProduct);
    
//     lista.push(userProduct)
//     console.log(lista);

//     const list = document.querySelector(".add-product");
//     // Title
//     const title = document.createElement('h1');
//     const textTitle = document.createTextNode('eCoffee Product List');
//     list.appendChild(title);
//     title.appendChild(textTitle);
//     title.classList.add("item-title");
    
//     for (const item of lista) {
//       const linew = document.createElement("h5");
//       const content = document.createTextNode(`${item.name} - $${item.price}`);
//       list.appendChild(linew);
//       linew.appendChild(content);              
//       linew.classList.add("item");
//     }
//   });
// });