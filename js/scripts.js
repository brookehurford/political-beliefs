$(document).ready(function() {
  $("form#Politics").submit(function(event) {
    var environment = $("input#environment").val();

      if (environment <= 2) {
        var oneVariable = "Conservative";
      }
      else if
        (environment >= 3) {
          var oneVariable = "Liberal";
        }

      $("#politicalBelief").text(oneVariable);
      $("#printToScreen").show();

      event.preventDefault();
  });
})
