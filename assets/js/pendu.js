const box = document.querySelector(".box");
const afficheMotSecret = document.querySelector("#par");
const p = document.querySelector(".essais");
let afficheLettres = document.querySelector(".lettres");
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let afficheAlphabet = alphabet.toUpperCase();
let dico = ["bonjour", "salut", "coucou", "hello"];
let motSecret = dico[Math.floor(Math.random() * dico.length)];
let motSecretEtoiles = [];
let tabCompteur = [];
const imgPendu = document.getElementById("img-pendu");

// affiche les essais restants
p.textContent = `Il vous reste ${7 - tabCompteur.length} essais`;

// parcoure le tableau motSecret et crée un tableau affiché avec des "*" pour chaque lettre
for (let i = 0; i < motSecret.length; i++) {
  motSecretEtoiles.push("*");
}

// affiche le mot secret avec des étoiles
afficheMotSecret.textContent = `Le mot secret est "${motSecretEtoiles.join(
  ""
)}"`;

// crée les buttons de l'alphabet et vérifie
for (let i = 0; i < afficheAlphabet.length; i++) {
  const button = document.createElement("button");
  button.className = "lettres";
  afficheLettres.appendChild(button);
  button.textContent += afficheAlphabet.charAt(i);
  button.value += alphabet.charAt(i);
  // récupère la valeur de la lettre du boutton pour vérifier si il est dans le motSecret
  button.addEventListener("click", () => {
    if (tabCompteur.length < 7) {
      for (let i = 0; i < motSecret.length; i++) {
        if (button.value === motSecret[i]) {
          motSecretEtoiles[i] = button.value;
          button.style = "visibility: hidden;";
          afficheMotSecret.textContent = `Le mot secret est : ${motSecretEtoiles.join(
            ""
          )}`;
        } else {
          if (
            tabCompteur.find((lettre) => lettre === button.value) ===
              undefined && // la lettre est fausse et n'as pas deja été joué
            motSecret.indexOf(button.value) === -1 // si la lettre n'est pas "bonne"
          ) {
            tabCompteur.push(button.value);
            button.style = "visibility: hidden;";
            imgPendu.childNodes[1].src = `./assets/img/${
              7 - tabCompteur.length
            }.jpg`;
          }
          p.textContent = `Il vous reste ${7 - tabCompteur.length} essais`;
          if (tabCompteur.length === 7) {
            p.textContent = "Vous avez perdu !";
          }
          // else if(){
          //   p.textContent = "Vous avez gagné !";
          // }
        }
      }
    }
  });
}
