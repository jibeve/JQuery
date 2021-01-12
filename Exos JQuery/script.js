//AJout d'une bordure au zone de texte (textarea)

$(function () {
    $("textarea", "body").css({"border" : "2px solid blue"});
})

//Ajout des paragraphes, à JQuery pour ajouter une bordure rouge

$(function () {
    $("p", "body").css({"border" : "2px solid red"});
})

//Ajout de "w3r_font_color" au dernier élément de paragraphe

$(function () {
    console.log($("p", "body").last().addClass("w3r_font_color"));
})

$('#button1').click(function () {
    $("textarea").add("p").css("border", "2px solid red");
});