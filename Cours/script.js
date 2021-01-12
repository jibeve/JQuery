$(document).ready(function () {
    $("#but").click(function () {
        console.log("Hello World!");
    });
});

//L'equivalent en raccourcis :

//$(function(){
    //notre code 
//)};

//On va chercher "but" dans "body" :On précise la zone de recherche

$(function () {
    $("#but", "body").click(function () {
        console.log("Hello World!");
    });
})

//Si on veut modifier le contenu d'une balise à l'événement du clic

$(function () {
    $("#but", "body").click(function () {
        // $("#container").text("<p>Hello</p>");
        //Affiche uniquement le texte et n'affiche pas les balises <p>
        // $("#container").html("<p>Hello</p>"); 


        //Si je veux rajouter du texte au début de la balise div, on se sert de prepend
        $("div#container").prepend("<h1>hello</h1>");

        //Si je veux rajouter du texte à la fin de la balise div, on se sert de append
        $("div#container").append("<h1>Bye!</h1>");

    });
})

//Permet de recupérer la valeur de l'attribut passé en paramètre
//On veut recup la valeur de la class selon un selecteur
//Affiche blue et non red car c'est le 1er element


$(function () {
    
        console.log($("p").attr("class"));
    });

//Si on veut faire la meme chose pour tous les paragraphes
//Utilisatiobn de la méthode .attr(nomAttribut)
//de l'attribut passé en paramètre
//Affiche blue

$(function () {
    $("p").each(function(){
        console.log($(this).attr("class"));
    });
});


//Utilisation de la méthode .length
//qui permet de déterminer le nombre
//d'éléments sélectionnés
//Affiche 3

$(function () {
        console.log($("p").length);
    });

//Utilisation de la méthode .eq(i)
//qui permet de choisir l'élément 
//ayant l'indice passé en paramètre
//Affiche blue

$(function () {
    // console.log($("p").equ(0));
    console.log($("p:eq(0)"));
});


//Opérations

//eq : equals
//p:lt lower Than parag < indic i
//p:gt(i) geater than paragf > indice i
//p:even parag d'indice pair et p:odd d'indice impair
//p:first selectionne le premier parag et p:last selectionne le dernier parag
//input:text On récu^père les input de type text

//Utilisation de la méthode removeAttr(nomAttribut)
//supprimant l'attribut passé en paramètre,ici class
//On souhaite suppr du paragraphe l'attribut class à l'indice 0

//Puis on tulise la méthode .attr(nomAttribut, nouvelleValeur)
//qui va permettre de modifier la valeur de l'attribut passé en paramètre.
$(function(){
    $("p").eq(0).removeAttr("class");
    $("p").eq(0).attr("class", "red");


    //remove les p pair de valeur bleu
    $("p").even().removeClass("blue").addClass("red");
});

//Utilisation de la méthode val() pour récupérer la valeur de l'attribut value (ic l'id "nom" et l'événement du clic)
$(function(){
    $("#but").click(function () {
        //on set une valeur ici John Wick qui permet de remplacer la valeur de l'attribut value par la valeur passée en paramètre
        console.log($("#nom").val("John Wick"));
    
    });
});

//******************POUR LES PROPRIETES CSS *******************************


//On veut recup la propriété css de l'element p à l'indice 0 sur la propriété color

// $(function(){
//     console.log($("p").eq(0).css("color", "green"));
//     console.log($("p").eq(0).css({"color" : "green", "background-color" : "red"}));
// });

// Méthodes .xClass()
// .addClass() : Ajoute une classe
// .removeClass() : Supprime une classe
// .hasClass() : Teste l'existence d'une classe
// .toggleClass() : Retire ou ajoute une classe

// En utilisant les methodes xClass, ecrire un code jQuery qui permet de
// permuter les couleurs des paragraphes suivants : (rouge -> bleu), (bleu ->
// vert) et (vert -> rouge).

//************LA VERSION DE BIBI *******************************

$(function(){
    console.log($("p").eq(0).removeClass("red").addClass("blue"));
    console.log($("p").eq(2).removeClass("blue").addClass("green"));
    console.log($("p").eq(1).removeClass("green").addClass("red"));

});

// *****************Version Margaux ************************
//Ca change tout en rouge

// // de rouge à bleu
// $(function() {
//     $(".red").each(function() {
//         $(this).removeClass("red").addClass("blue");
//     });
// })
// //de bleu à vert 
// $(function() {
//     $(".blue").each(function() {
//         $(this).removeClass("blue").addClass("green");
//     });
// });
// //affiche tout en vert
// //de vert à rouge
// $(function() {
//     $(".green").each(function() {
//         $(this).removeClass("green").addClass("red");
//     });
// });
// //affiche tout en rouge


/**************SUITE DU COURS ******************/
//Utilisation de la methode Wrap(baliseHtml)
//nous permettant d'entourer les elements selectionnés
//ici les balises p par les balises passées en paramètres
//ici <div> <p>Bonjour</p>      
//          <p>Bonjour</p>
//          </div>

$(function(){
    $("#but").click(function () {
        $("p").wrapAll("<div></div>");
    });
});