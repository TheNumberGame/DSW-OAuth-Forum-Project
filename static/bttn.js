$(document).ready( function(){
  $("button").click( function(){
    $.post("/b",{"id": $(this).val()});
  });
});
