
 
function colorer() {
    $('#contenu .rouge').wrap('<span style="color:red"></span>'); 
    $('#contenu .vert').wrap('<span style="color:green"></span>'); 
    $('#contenu .orange').wrap('<span style="color:orange"></span>'); 
    $('#contenu .bleu').wrap('<span style="color:blue"></span>');
};

function semantique(){
    $('#contenu .italique').wrap('<i></i>'); 
    $('#contenu .gras').wrap('<b></b>'); 
    $('#contenu .souligne').wrap('<u></u>'); 
    $('#contenu .barre').wrap('<del></del>'); 
};
function mettreTitres(){
    $('#contenu .titre1').wrap('<h1></h1>');
    $('#contenu .titre2').wrap('<h2></h2>');
};

function enleverDecor(){
    $('#contenu .souligne').wrap('<span style="text-decoration:none"></span>'); 
}

function enleverItalique(){
    $('#contenu .italique').wrap('<span style="font-style:normal"></span>'); 
}

function enleverGras(){
    $('#contenu .gras').wrap('<span style="font-weight:normal"></span>'); 
}

function liensEnBoutons(){
    $('#contenu a').wrap('<button></button>');
}

function dupliquerTexte(){
    $('p').clone().appendTo("#contenu");
}

function voirCode(){
    $('p').show().html();
};






