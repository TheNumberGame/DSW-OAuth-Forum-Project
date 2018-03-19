$(document).ready( function(){
  $("#b1").onclick( function(){
    $.post("/b",{"id": document.getElementById("#b1").value})
  });
});
