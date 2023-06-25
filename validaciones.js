$("form#form_categorias").on("submit", function(){
    var nombre = $.trim ($ ("nombre").Val());
    var error = new Array();
    
    if (nombre == "") {
        error.push("Complete los campos");
    }
   if (error.length > 0){
      alert (error.join("/n"));
      return false
   }
      return true;
});