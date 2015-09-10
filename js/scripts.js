var countUp = function(total, multiple) {
  var output = [];

   for(var i = multiple; i <= total; i += multiple){
     output.push(i);
   }
   return output;
};

$(document).ready(function() {
  $("form#count_up").submit(function(event) {
    var total = parseInt($("input#total").val());
    var multiple = parseInt($("input#multiple").val());
    var output = countUp(total, multiple);

    $(".output").text(output);

    $("#result").show();
    event.preventDefault();
  });
});
