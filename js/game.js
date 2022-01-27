window.addEventListener("load", function(){
    const gameButton = document.querySelector(".game");
    const gameCard = document.querySelector(".game-card");

    gameButton.addEventListener("click", function(){
        let playerToPlay = prompt('Enter your name');
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
            prompt("Name your Coffee"),
            prompt("Ingredient #1"),
            prompt("Ingredient #2"),
            prompt("Ingredient #3"),
            prompt("Coffe Price $$$"),
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
            let options = 'Select Coffee. Here are the game options: \n';
            
            for (let i = 0; i < coffeeObject.length; i++) {
                options += `${i} - ${coffeeObject[i].name}, $${coffeeObject[i].price} \n`;
            }

            alert(options);
            let choice = parseInt(prompt('Enter your Coffee ID option:'));

            if ((choice >= 0) && (choice < coffeeObject.length)) {
                let newTitle = document.createElement('h3');
                let newP = document.createElement('p');
                let newImg = document.createElement('img');
                
                let titleContent = document.createTextNode(`${coffeeObject[choice].name}`);
                let pContent = document.createTextNode(`Your Coffee have ${coffeeObject[choice].ingredientOne}, a little of ${coffeeObject[choice].ingredientTwo} and ${coffeeObject[choice].ingredientOne}. All just for $${coffeeObject[choice].price}. Enjoy!!`);
    
                newImg.src = "https://cdn-icons-png.flaticon.com/512/924/924514.png"
                newImg.width = 120;
                newImg.height = 120;

                newTitle.appendChild(titleContent);
                newP.append(pContent);

                gameCard.appendChild(newTitle);
                gameCard.appendChild(newP);
                gameCard.appendChild(newImg);

                gameCard.classList.add("game-div")
                newTitle.classList.add("game-title");
                newP.classList.add("game-p");

                // Función para reiniciar el juego
                const clear = () => {
                    setTimeout(() => {
                        localStorage.clear();
                        location.reload();  
                    }, 10000)
                }
                clear();

            } else {
                alert("¡Error! - Try again.");
            }
        }
    });
});