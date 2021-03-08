const url = "http://localhost:3000/api/teddies/"; // URL de l'API
const id = document.location.search.substring(5); // Récupère l'id du produit dans l'URL
const urlId = url + id; // URL du produit dans l'API

const container = document.querySelector(".container"); // Cible la balise dans laquelle ajouter le produit

// Récupère le produit
const fetchProduct = async () => {
  try {
    const response = await fetch(urlId);
    return await response.json(); // Renvoie la requête en JSON
  } catch (error) {
    container.innerHTML += `
      <p class="h5 text-center font-weight-bold text-danger margin-top">Erreur serveur, veuillez réessayer ultérieurement.</p>
      <p class="h5 text-center text-danger">Merci de votre compréhension</p>
    `;
    return console.log(error);
  }
};

// Utilise les données de l'array JSON récupéré
fetchProduct().then(data => {
  const formatter = new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }); // Formatte un nombre en devise

  // Crée et ajoute un template
  container.innerHTML += `
    <div class="card d-flex flex-md-row mt-5 mb-3 mx-auto margin-top product">
      <img class="col col-md-7 card-img-top px-0 product__img" src="${data.imageUrl}" alt="Appareil photo ${data.name}">
      <div class="col col-md-5 card-body text-center text-md-left">
        <h1 class="h2 py-2">${data.name}</h1>
        <p class="card-text">${data.description}</p>
        <p class="btn btn-primary h4 text-center text-monospace mb-4">${formatter.format(data.price / 100)}</p><br>
        <div class="form-group m-0">
        <select class="form-control">${data.colors.map((colors) => `<option>${colors}</option>`)}</select>
        </div>
        <a href="cart.html">
          <button class="btn btn-success mt-2 w-100 add-to-cart">Ajouter au panier</button>
        </a>
      </div>
    </div>
  `;

  // const addToCart = document.querySelector(".add-to-cart"); // Cible le bouton qui ajoute un produit au panier

  // Au clic sur ce bouton
  // addToCart.addEventListener("click", () => { 
  //   const cartContent = JSON.parse(localStorage.getItem("cartContent")) || []; // Récupère les données du localStorage sous forme d'array, si il y en a un, ou crée un array vide
  //   cartContent.push(id); // Ajoute un produit à l'array
  //   localStorage.setItem("cartContent", JSON.stringify(cartContent)); // Enregistre l'array dans le localStorage sous forme de string
  // });
});