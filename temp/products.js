let productsArray = [
  {
    id: 1,
    name: "Cafetera Molinex",
    category: "Malek",
    price: "4000",
    stock: "68",
    features: ["Duradero", "Titanio", "Eficiencia Energética"]
  },
  {
    id: 2,
    name: "Ebonee Coffee Maker",
    category: "Antat",
    price: "5500",
    stock: "85743",
    features: ["Original Steel", "Mayor vida útil"]
  },
  {
    id: 3,
    name: "Coffe Elsy",
    category: "Oglevie",
    price: "3971",
    stock: "0",
    features: ["Eficiencia Energética"]
  },
  {
    id: 4,
    name: "Mack Coffee Maker",
    category: "Cornau",
    price: "3973",
    stock: "2323",
    features: ["Certificada", "Ganadora de Premios Mundiales", "Eficiencia Energética"]
  },
  {
    id: 5,
    name: "Levey Titanium Coffee",
    category: "Alekseicik",
    price: "3286",
    stock: "086",
    features: ["La mas vendida", "Eficiencia Energética"]
  }
]

window.addEventListener("load", function() {
    let checkButton = document.querySelector(".check-list");

    checkButton.addEventListener("click", function(){
        function addElements(array) {
            const list = document.querySelector(".add-product");
            
            const title = document.createElement('h1');
            const textTitle = document.createTextNode('eCoffee Product List');
            list.appendChild(title);
            title.appendChild(textTitle);
            title.classList.add("item-title");

            array.forEach(function (data, index) {
              const linew = document.createElement("h5");
              const content = document.createTextNode(`${data.name} - $${data.price}`);
              list.appendChild(linew);
              linew.appendChild(content);              
              linew.classList.add("item");
            });
        }

        addElements(productsArray);
    });
    
});