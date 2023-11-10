$("#continue-info-btn").on("click", () => {
    $("#personal-info").css({
      "opacity": "0",
      "visibility": "hidden",
      "transition": "0.5s",
      "transform": "translateX(-50%)"
    });

    $(".circleshape-two").css("border-color", "#1CBA9E");
    $(".numbertwo").css("color", "#1CBB9E");
    $(".numberone").css("color", "unset");
    $(".circleshape-one").css("border-color", "#737373");
    $(".txtone").css("color", "#737373");
    $(".txttwo").css("color", "#1CBA9E");

    $("span").css("background-color", "#1CBB9E");
    $("#faceid").css({
      "transform": "translate(0%,-95%)",
      "transition": "0.5s",
      "opacity": "1",
      "visibility": "visible"
    });
  });


  document.getElementById("again").addEventListener("click", () => {
    $(".output").css("display", "none");
  });

  document.getElementById("submitbtn").addEventListener("click", () => {
$("#faceid").css("display","none");
$(".completedform").css("display","block");
$(".top").css("display","none");

  });