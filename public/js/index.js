const url = "http://localhost:3000/api/teddies"; // URL de l'API

const container = document.querySelector(".container"); // Cible la balise dans laquelle ajouter les produits

// Récupère les produits
const fetchProducts = async () => {
  try {
    const response = await fetch(url);
    return await response.json(); // Renvoie la requête en JSON
  } catch (error) {
    container.innerHTML += `
    `;
    return console.log(error);
  }
};

// Utilise les données de l'array JSON récupéré
fetchProducts().then(data => {
  const formatter = new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }); // Formatte un nombre en devise

  // Crée un template pour chaque élément de l'array

});