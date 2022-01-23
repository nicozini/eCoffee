let quotesJSON = [
  {
    "id": 1,
    "text": "Cuando los días pinten de color gris, dales color con una buen café y una gran sonrisa.",
  },
  {
    "id": 2,
    "text": "All you need is Coffee.",
  },
  {
    "id": 3,
    "text": "Keep calm and drink Coffee",
  },
  {
    "id": 4,
    "text": "El café es un bálsamo para el corazón y el espíritu.",
  },
  {
    "id": 5,
    "text": "La vida comienza después de un café.",
  },
  {
    "id": 6,
    "text": "La pasión sabe a vino y el amor a café.",
  },
  {
    "id": 7,
    "text": "No hay lunes malos, hay cafés poco cargados.",
  }
];

console.log(typeof quotesJSON);
console.log(quotesJSON);

console.log("==========================================================================================");

let quotesObject = JSON.parse(quotesJSON);

console.log(typeof quotesObject);
console.log(quotesObject);
