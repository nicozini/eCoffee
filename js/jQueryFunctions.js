$(document).ready(function () {

  // Dark Mode
  $('.dark-a').click(function(){    
    $('.dark-a').toggleClass('light-a');

    $('body').toggleClass('dark-background');
    $('nav').toggleClass('dark-background');
    $('.logo').toggleClass('dark-background');
    $('header > div.nav').toggleClass('dark-background');
  
    $('p').toggleClass('dark-text');
    $('.my-name').toggleClass('dark-text');
    $('.ceo').toggleClass('dark-text');

    $('.products').toggleClass('dark-background');
    $('.card-body').toggleClass('dark-background');

    $('.form-control').toggleClass('dark-form');
  });

  // Simulator  
  $(".simulator-button").click(function () {

    $(".data-simulator-enter").slideToggle("slow")

    $(".calculate-simulator").click(function (event) {
      event.preventDefault()
      let amount = parseInt(document.getElementById("inputAmount").value)
      let iva = parseInt(document.getElementById("inputIva").value)
      let shipping = document.getElementById("inputShipping").value

      // Total Cost
      let costoTotal = (number) => {
        let envio = 10;
        let incluyeEnvio = 0;

        if (shipping == "yes") {
          incluyeEnvio = number * (envio / 100);
        } else if (shipping == "no") {
          incluyeEnvio = 0;
        } else {
          alert("¡Error! - Enter yes or no for shipping.");
        }

        // Adition taxes
        let adicionales = (number) => {
          return number * 0.25;
        };
  
        if (iva === 21) {
          return amount + amount * 0.21 + incluyeEnvio + adicionales(amount)
        } else return amount + amount * 0.105 + incluyeEnvio + adicionales(amount);

      }

      $(".coffee-order-card")
        .fadeIn(25000, function() {
          $(".coffee-content-simulation")
            .append("<h1>Simulation result:</h1>")
            .append(`The total cost of your order is $${costoTotal(amount)}. It includes additional taxes.`)
            // .css("color","#8d4925")
            .css("color", "red")
        })
      .fadeToggle(8000);
    })
  })
})