let many = [1,"octopus",[87,69,54]];

$(document).ready(function(){
    $("#button1").click(function(){
        $("#changed").text("Paragraoh changed.");
    });
});

var i=0;
  function Click (){
    i++;
}

function PressMe(){
    document.getElementById("changed").innerHTML="HAHAHA";
}
