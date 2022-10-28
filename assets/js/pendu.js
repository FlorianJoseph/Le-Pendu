const box = document.querySelector(".box");
const afficheMotSecret = document.querySelector("#par");
const p = document.querySelector(".essais");
let afficheLettres = document.querySelector(".lettres");
let alphabet = "abcdefghijklmnopqrstuvwxyz"
let afficheAlphabet = alphabet.toUpperCase()
let dico = ["bonjour","salut","coucou","hello"];
let motSecret = dico[Math.floor(Math.random()*dico.length)]
let motSecretEtoiles = []
let essais = 7
let sortie=false

// affiche les essais restants
p.textContent = `Il vous reste ${essais} essais`;

// parcoure le tableau motSecret et crée un tableau affiché avec des "*" pour chaque lettre
for (let i = 0; i< motSecret.length;i++){
    motSecretEtoiles.push("*");
}

// affiche le mot secret avec des étoiles
afficheMotSecret.textContent = `Le mot secret est : ${motSecretEtoiles.join("")}`;

// crée les buttons de l'alphabet et vérifie 
for (let i = 0; i<afficheAlphabet.length;i++){
    const button = document.createElement("button");
    button.className = "lettres";
    afficheLettres.appendChild(button);
    button.textContent+=afficheAlphabet.charAt(i);
    button.value+=alphabet.charAt(i);

    // récupère la valeur de la lettre du boutton pour vérifier si il est dans le motSecret
    button.addEventListener("click",()=>{
        for (let i=0; i<alphabet.length;i++){
            if(button.value===motSecret[i]){
                motSecretEtoiles[i]=button.value;
                button.style="visibility: hidden;";
                afficheMotSecret.textContent += `Le mot secret est : ${motSecretEtoiles.join("")}`;
            }
            else{
                afficheMotSecret.textContent += `Il vous reste ${essais-1} essais`;
            }
        }
    })
}
