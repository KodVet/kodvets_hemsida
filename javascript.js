window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementById("header").style.height = "70px";
    document.getElementById("header").style.fontSize = "10px";
    document.getElementById("header").style.opacity = 0.9;
  } else {
    document.getElementById("header").style.height = "120px";
    document.getElementById("header").style.fontSize = "18px";
    document.getElementById("header").style.opacity = 1;
  }
}