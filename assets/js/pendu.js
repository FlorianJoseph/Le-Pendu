// const box = document.querySelector('.box');
// let compteur = 0
// let essais = 0
// let dico = ["bonjour","salut","coucou","hello"];
// const afficheMotSecret = document.querySelector('#par');
// let rand = Math.round(Math.random()*dico.length)
// let motSecret = []

// parcours le dictionnaire pour choisir un mot aléatoire et l'ajoute dans le tableau motSecret
// for (let i = 0; i< dico.length;i++){
//     if (i === rand){
//         motSecret.push(dico[i]);
//     }
// }

// parcoure le tableau motSecret affiche les lettres du mot secret indépendemment
// for (i of motSecret){
//     for (j of i){
//         afficheMotSecret.textContent += j
//         console.log(j);
//     }
// }
// evenement sur le bouton a qui entre la lettre a en cliquant
// const u = document.querySelector('#u');
// u.addEventListener("click",()=>{
//     for (i of motSecret){
//         for (j of i){
//             if (j === "u"){
//                 afficheMotSecret.textContent += "u"
//             }
//         }
//     }
// });

// var motSecret;

// var tableauMot=new Array(); // Le tableau qui contient les lettres du mot à trouver
// var mots=new Array();       // Le tableau qui contient tous les mots possibles
 
// var tailleMot;              // Le nombre de lettres du mot à trouver
// var coupsManques=0;         // Le nombre de lettres fausses essayées
// var lettresTrouvees=0;      // Le nombre de lettres trouvées
// var fini=false;             // true si le jeu est terminé
 
// mots[0]="TITANESQUE";
 

// // On prend un mot au hasard en fonction de la seconde en cours
// motSecret=mots[now.getSeconds() % mots.length];
// tailleMot=motSecret.length;
 
// // Permet de changer la couleur des touches du clavier
// function changeCouleur(element,couleur){
//     element.style.backgroundColor=couleur;
// }
 
// // Gère tous les traitements à faire lorsqu'on appuie sur une touche
// function proposer(element){
     
//     // Si la couleur de fond est lightgreen, c'est qu'on a déjà essayé - on quitte la fonction
//     if(element.style.backgroundColor=="#a4da14" ||fini) return;
     
//     // On récupère la lettre du clavier et on met la touche en lightgreen (pour signaler qu'elle est cliquée)
//     var lettre=element.innerHTML;
//     changeCouleur(element,"#a4da14");
     
//     // On met la variable trouve à false;
//     var trouve=false;
     
//     // On parcours chaque lettre du mot, on cherche si on trouve la lettre séléectionnée au clavier
//     for(var i=0; i<tailleMot; i++) {
         
//         // Si c'est le cas :
//         if(tableauMot[i].innerHTML==lettre) {
//             tableauMot[i].style.visibility='visible';   // On affiche la lettre
//             trouve=true;
//             lettresTrouvees++;
//         }
//     }
//     // Si la lettre n'est pas présente, trouvé vaut toujours false :
//     if(!trouve){
//         coupsManques++;
//         document.images['pendu'].src="images/pendu/"+coupsManques+".png"; // On change l'image du pendu
         
//         // Si on a raté 9 fois :
//         if(coupsManques==9){
//             alert("Vous avez perdu !");
//             for(var i=0; i<tailleMot; i++) tableauMot[i].style.visibility='visible';
//             fini=true;
//             // on affiche le mot, on fini le jeu
//         }
//     }
//     if(lettresTrouvees==tailleMot){
//         alert("Bravo ! Vous avez découvert le mot secret !");
//         fini=true;
//     }
// }

// for(var i=0; i<tailleMot; i++) document.write("<td> <p id=\""+i+"\">"+motSecret.charAt(i)+"</p></td>");
// for(var i=0; i<tailleMot; i++) tableauMot[i]=document.getElementById(i);