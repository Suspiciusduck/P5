const container = document.querySelector(".container"); // Cible la balise dans laquelle ajouter le message

// Vérifie que l'on a bien les informations de la commande
if (localStorage.getItem("orderData") && localStorage.getItem("orderPrice")) {
  const orderData = JSON.parse(localStorage.orderData);
  const firstName = Object.values(orderData.contact.firstName).join("");
  const orderId = Object.values(orderData.orderId).join("");
  const price = localStorage.getItem("orderPrice");

  // Crée et ajoute un template
  container.innerHTML += `
    <div class="text-center h5">
      <p class="h1 mt-5 mb-5 margin-top">👍</p>
      <p class="mb-3">Votre identifiant de commande est le suivant :</p>
      <p class="mb-5"><mark>${orderId}</mark></p>
      <p class="text-warning mb-5">Notez le bien, il vous sera demandé en cas de soucis.</p>
      <p class="mb-5">La somme de <mark>${price}</mark> sera prochainement débitée sur le moyen de paiement que vous avez choisi.</p>
      <p><em>Merci de votre confiance ${firstName}, et à bientôt !</em></p>
    </div>
  `;
} else {
  container.innerHTML += `
    <p class="text-center h4 mt-5 margin-top">Vous n'avez passé aucune commande.</p>
  `;
}
