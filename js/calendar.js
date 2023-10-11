document.addEventListener("DOMContentLoaded", function () {
    const myInput = document.getElementById("calendar");
    flatpickr(myInput, {
      dateFormat: "j F Y",
      locale: "fr",
      monthSelectorType: "static",
    });
  });