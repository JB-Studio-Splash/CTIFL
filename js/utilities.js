$(document).ready(function () {
    $(".checkbox_field").click(function () {
      $(".prods-brut_submit").addClass("active");
    });
  });


  // DROPDOWN OPEN / CLOSE
  $(document).ready(function(){
    $(".dropdown_toggle").click(function(){
        var $dropdown = $(this).closest(".dropdown");
        if ($dropdown.find(".w-dropdown-toggle").hasClass("w--open")) {
            // Fermer le dropdown
            $dropdown.find(".w-dropdown-toggle").removeClass("w--open").removeAttr("id aria-controls aria-haspopup aria-expanded role tabindex");
            $dropdown.find(".w-dropdown-list").removeClass("w--open").removeAttr("id aria-labelledby");
            $dropdown.find(".dropdown_link").removeAttr("tabindex");
            $dropdown.css("z-index", "");  // Reset z-index to its original value
        } else {
            // Ouvrir le dropdown
            $dropdown.find(".w-dropdown-toggle").addClass("w--open").attr({
                "id": "w-dropdown-toggle-0",
                "aria-controls": "w-dropdown-list-0",
                "aria-haspopup": "menu",
                "aria-expanded": "true",
                "role": "button",
                "tabindex": "0"
            });
            $dropdown.find(".w-dropdown-list").addClass("w--open").attr({
                "id": "w-dropdown-list-0",
                "aria-labelledby": "w-dropdown-toggle-0"
            });
            $dropdown.find(".dropdown_link").attr("tabindex", "0");
            $dropdown.css("z-index", "901");
        }
    });
});

// OPTIMISATEUR PRIX RESULT TOGGLE INPUT

$(document).ready(function() {
  $('.trigger-optimisateur').on('click', function() {
    $(this).addClass('hidden');
    $(this).siblings('.tab_input').removeClass('hidden');
  });
});


// RADIO BUTTON SELECTED
$(document).ready(function() {
  $('.select-recette_radio-button').on('change', function() {
      if ($(this).is(':checked')) {
          $('.radio-button.selected').removeClass('selected');  
          $(this).closest('.radio-button').addClass('selected');
      }
  });
});

  // CAHIER COMMANDE -> ETAT BOUTON
  $(document).ready(function () {
    $(".button.list").on("click", function () {
      $(this).toggleClass("selected");
    });
  });