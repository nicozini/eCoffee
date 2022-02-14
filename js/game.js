$(document).ready(function () {
    const gameButton = $(".game");
    const gameFormData = $(".game-form-data");
    const createCoffeeBtn = $(".create-coffe-game-button");
    
    gameFormData.hide();   
    
    gameButton.click(function () {
        gameFormData.slideToggle("slow")       
        
        createCoffeeBtn.click(function (e) {
            e.preventDefault();
            
            const playerToPlay = $("#playerToPlay").val();
            const coffeeNameGame = $("#coffeeNameGame").val();
            const ingredient1 = $("#ingredient-1").val();
            const ingredient2 = $("#ingredient-2").val();
            const ingredient3 = $("#ingredient-3").val();
            const price = $("#coffeePriceGame").val();
            
            // Storage
            let playerInStorage = localStorage.getItem('name');
    
            if (playerInStorage == null) {
                localStorage.setItem('name', playerToPlay);
                alert(`¡Welcom ${playerToPlay} to our Game!. Lets make Coffee...`);
            } else if (playerInStorage != null && playerInStorage == playerToPlay) {
                alert(`¡Welcome back ${localStorage.getItem('name')}!. Lets make another Coffee...`);
            } else {
                localStorage.setItem('name', playerToPlay);
                alert(`¡Welcom ${playerToPlay} to our Game!. Lets make Coffee...`);
            }

            class Cafe {
                constructor(id, name, ingredientOne, ingredientTwo, ingredientThree, price) {
                    this.id = id,
                    this.name = name,
                    this.ingredientOne = ingredientOne;
                    this.ingredientTwo = ingredientTwo;
                    this.ingredientThree = ingredientThree;
                    this.price = parseInt(price);
                }
            }
    
            const cafeArray = [];
    
            cafeArray.push(new Cafe(
                1,
                coffeeNameGame,
                ingredient1,
                ingredient2,
                ingredient3,
                price,
            ));
            cafeArray.push(new Cafe (2, 'White CL', 'Leche texturizada', 'Chocolate', 'Azucar', 150));
            cafeArray.push(new Cafe (3, 'Work Strong', 'Canela', 'Leche descremada', 'Azucar', 230));
            cafeArray.push(new Cafe (4, 'Sugar Special', 'Azucar', 'Coco', 'Leche', 190));
            cafeArray.push(new Cafe (5, 'Caramel Flex', 'Caramelo', 'Leche descremada', 'Pistachos', 190));
    
            localStorage.setItem('cafe', JSON.stringify(cafeArray));

            // Trabajo con mis datos en Storage
            let coffeeInStorage = localStorage.getItem('cafe');

            if (coffeeInStorage != null) {
                let coffeeObject = JSON.parse(coffeeInStorage);      

                let gameCardSolution = document.querySelector(".game-card");

                let newTitle = document.createElement('h3');
                let newP = document.createElement('p');
                let newImg = document.createElement('img');
                
                let titleContent = document.createTextNode(`${coffeeObject[0].name}`);
                let pContent = document.createTextNode(`Your Coffee have ${coffeeObject[0].ingredientOne}, a little of ${coffeeObject[0].ingredientTwo} and ${coffeeObject[0].ingredientThree}. All just for $${coffeeObject[0].price}. Enjoy!!`);

                newImg.src = "https://cdn-icons-png.flaticon.com/512/924/924514.png"
                newImg.width = 120;
                newImg.height = 120;

                newTitle.appendChild(titleContent);
                newP.append(pContent);

                gameCardSolution.appendChild(newTitle);
                gameCardSolution.appendChild(newP);
                gameCardSolution.appendChild(newImg);

                gameCardSolution.classList.add("game-div")
                newTitle.classList.add("game-title");
                newP.classList.add("game-p");

                // Función para reiniciar el juego
                const clear = () => {
                    setTimeout(() => {
                        localStorage.clear();
                        location.reload();  
                    }, 8000)
                }
                clear();
            }
        });
    });
});