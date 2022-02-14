// Tooltip Create Product Button
let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));

let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

window.addEventListener("load", function() {
  let buttonCreate = document.querySelector('.button-create');
  let buttonSimulator = document.querySelector('.order-sim-btn');

  buttonCreate.addEventListener("click", function() {
    window.location.href = 'productCreate.html';
  });  

  buttonSimulator.addEventListener("click", function() {
    window.location.href = 'simulator.html';
  });  

});