$(document).ready(function() {
  $("#formOne").submit(function(event) {
  const firstName = $("input#first").val();
  const lastName = $("input#last").val();
  const type = $("#typeOfMassage").val();
  const doa = $("#date").val();