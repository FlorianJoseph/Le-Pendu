const box = document.querySelector(".box");
const afficheMotSecret = document.querySelector("#par");
const p = document.querySelector(".essais");
let afficheLettres = document.querySelector(".lettres");
let alphabet = "abcdefghijklmnopqrstuvwxyz"
let afficheAlphabet = alphabet.toUpperCase()
let dico = ["bonjour","salut","coucou","hello"];
let motSecret = dico[Math.floor(Math.random()*dico.length)]
let motSecretEtoiles = []
let essais = 0

// parcoure le tableau motSecret et crée un tableau affiché avec des "*" pour chaque lettre
for (let i = 0; i< motSecret.length;i++){
    motSecretEtoiles.push("*");
}

// affiche le mot secret avec des étoiles
afficheMotSecret.textContent = motSecretEtoiles.join("");
p.textContent = `Il vous reste ${essais} essais`;

// crée les buttons de l'alphabet
for (let i = 0; i<afficheAlphabet.length;i++){
    const button = document.createElement("button");
    button.className = "lettres";
    afficheLettres.appendChild(button);
    button.textContent+=afficheAlphabet.charAt(i);
    button.value+=alphabet.charAt(i);

    button.addEventListener("click",()=>{
        for (let i=0; i<alphabet;i++){
            console.log(motSecretEtoiles[i]);
            if(button.value===alphabet.charAt(i)){
                motSecretEtoiles[i]=button.value;
            }
            console.log(alphabet.charAt(i));
            console.log(button.value);
        }
        button.disabled="disabled";
        button.style="background-color:grey;"
    })
}
