const url = "http://localhost:3000/api/teddies"; // URL de l'API

const container = document.querySelector(".container"); // Cible la balise dans laquelle ajouter les produits

// Récupère les produits
const fetchProducts = async () => {
  try {
    const response = await fetch(url);
    return await response.json(); // Renvoie la requête en JSON
  } catch (error) {
    container.innerHTML += `
      <p class="h5 text-center font-weight-bold text-danger">Erreur serveur, veuillez réessayer ultérieurement.</p>
      <p class="h5 text-center text-danger">Merci de votre compréhension</p>
    `;
    return console.log(error);
  }
};

// Utilise les données de l'array JSON récupéré
fetchProducts().then(data => {
  const formatter = new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }); // Formatte un nombre en devise

  // Crée un template pour chaque élément de l'array
  const teddies = data.map(teddie => `
    <div class="col-sm-6 text-center mb-4">
      <div class="card">
        <img class="card-img-top" src="${teddie.imageUrl}" alt="Appareil photo ${teddie.name}">
        <div class="card-body">
          <a href="pages/product.html?_id=${teddie._id}" class="text-dark text-decoration-none"><h3 class="card-title stretched-link">${teddie.name}</h3></a>
          <p class="card-text">${teddie.description}</p>
          <p class="btn btn-primary text-monospace mb-0">${formatter.format(teddie.price / 100)}</p>
        </div>
      </div>
    </div>
  `).join(""); // Assemble les templates

  container.innerHTML += `<div class="d-flex flex-wrap mx-auto products">${teddies}</div>`; // Ajoute le template
});
