// ajoute la propriété pour le drop et le transfert de données
$.event.props.push('dataTransfer');

$(document).ready(function() {
    var i, $this, $log = $('#log');

    $('#liste li').on({
        // on commence le drag
        dragstart: function(e) {
            $this = $(this);
            i = $(this).index();
            $(this).css('opacity', '10');

            // on garde le texte en mémoire
            e.dataTransfer.setData('img', $(this).html());
        },
        // on passe sur un élément draggable
        dragenter: function(e) {
            // on augmente la taille pour montrer le draggable
            $(this).animate({
                height: '300px'
            }, 'fast');

            e.preventDefault();
        },
        // on quitte un élément draggable
        dragleave: function() {
            // on remet la taille par défaut
            $(this).animate({
                height: '250px'
            }, 'fast');
        },
        // déclenché tant qu on a pas lâché l élément
        dragover: function(e) {
            e.preventDefault();
        },
        // on lâche l élément
        drop: function(e) {
            // si l élément sur lequel on drop n'est pas l'élément de départ
            if (i !== $(this).index()) {
                // on récupère le texte initial
                var data = e.dataTransfer.getData('img');

                // on log
                

                // on met le nouveau texte à la place de l ancien et inversement
                $this.html($(this).html());
                $(this).html(data);
            }

            // on remet la taille par défaut
            $(this).animate({
                height: '250px'
            }, 'fast');
        },
        // le drop est terminé, fin du drag
        dragend: function() {
            $(this).css('opacity', '1');
        },
        
    });
});
