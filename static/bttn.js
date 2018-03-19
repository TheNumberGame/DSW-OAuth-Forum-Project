$(document).ready( function(){
  $("button").onclick( function(){
    $.post("/b",{"id": $(this).val()})
  });
});
