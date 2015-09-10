var countUp = function(total, multiple) {
  var output = [];

   for(var i = multiple; i <= total; i += multiple){
     output.push(i);

   }
   return output;
};
