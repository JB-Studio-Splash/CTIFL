$(document).ready(function () {
    $(".edit-line-trigger").on("click", function (e) {
      e.preventDefault();
      // Toggle la classe "editing" sur l'élément cliqué
      $(this).toggleClass("editing");
      // Trouve le parent le plus proche avec la classe "table_row"
      const closestTableRow = $(this).closest(".table_row");
      // Trouve l'enfant ".table_modal" de cet élément et toggle la class "editing" dessus
      closestTableRow.find(".table_modal").toggleClass("editing");
    });
  });