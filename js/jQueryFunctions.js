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
    let amount = parseInt(
      prompt("Please enter the amount you expect to spend in the store...")
    );

    let costoTotal = (amount) => {
      let iva = parseInt(prompt("¿Wich IVA tax do you need?:  1 (21%)  o  2 (10.5%"));
      let envio = 10;
      let requiereEnvio = prompt(
        `The shipping cost is ${envio}% of the price. ¿Does it require shipping? Yes / No`
      ).toLowerCase();
      let incluyeEnvio = 0;

      if (requiereEnvio == "yes") {
        incluyeEnvio = amount * (envio / 100);
      } else if (requiereEnvio == "no") {
        incluyeEnvio = 0;
      } else {
        alert("¡Error! - Enter yes or no for shipping.");
      }

      // Adition taxes
      let adicionales = (amount) => {
        return amount * 0.25;
      };

      if (iva === 1)
        return amount + amount * 0.21 + incluyeEnvio + adicionales(amount);
      else return amount + amount * 0.105 + incluyeEnvio + adicionales(amount);
    };

    alert(`The total cost of your order is $${costoTotal(amount)}. It includes additional taxes.`);
  });
});