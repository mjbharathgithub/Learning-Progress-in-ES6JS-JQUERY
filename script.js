alert("working");
$("h1").css("color","red");
$(document).ready(function(){


  $("h1").dblclick(function(){
    $(this).toggle();
  });
  $("h1").mouseenter(function(){
    alert("inside the Hello element");
  });
  $("h1").mouseleave(function(){
    alert("outside the Hello element");
  });

  $("h1").click(function(){
    alert("Why did you click me?");
  });

  $("h1").hover(
    function(){
      alert("Entered the boundary");
    },
    function(){
      alert("left the boundary");
    }
  );
  
});


