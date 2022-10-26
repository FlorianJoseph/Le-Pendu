const box = document.querySelector('.box');
const afficheMotSecret = document.querySelector('#par');
let dico = ["bonjour","salut","coucou","hello"];
let rand = Math.round(Math.random()*dico.length)
let motSecret = []
let motSecretEtoiles = []
let essais = 0
let longueurMotSecret = 0
let recupIndexMotSecret = 0
let sortie=false

// parcours le dictionnaire pour choisir un mot aléatoire et l'ajoute dans le tableau motSecret
for (let i = 0; i< dico.length;i++){
    if (i === rand){
        motSecret.push(dico[i]);
    }
}

// parcoure le tableau motSecret et crée un tableau affiché avec des "*" pour chaque lettre
for (let lettres of motSecret){
    for (let number of lettres){
        longueurMotSecret++
        motSecretEtoiles.push("*");
        afficheMotSecret.textContent = motSecretEtoiles;
    }
}

// evenement sur le bouton u qui vérifie si la lettre est présente dans le motSecret et l'affiche
// const u = document.querySelector('#u');
// u.addEventListener("click",()=>{
    // for (let i=0; i < longueurMotSecret && sortie === false; i++){
    //     for (let mot of motSecret){
    //         for (let lettre of mot){
    //             if (lettre =="u"){
    //                 console.log(mot[i]);
    //                 sortie = true;
    //             }
    //         }
    //     }
    // }
// });

console.log(motSecret.indexOf('u'))

// for (let i=0; i <= motSecret.length; i++){
//     for (let j=0; j<longueurMotSecret;i++){
//         console.log(longueurMotSecret);
//         console.log(motSecret[i][j]);
//         }
//     }
