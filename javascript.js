window.onscroll = function() {scrollFunction()};
// window.onscroll = function (e) {
//   console.log(window.scrollY); // Value of scroll Y in px
// };



function scrollFunction() {
  console.log(window.scrollY); // Value of scroll Y in px
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementById("header").style.height = "70px";
    document.getElementById("logo").style.height = "60px";
    document.getElementById("header").style.opacity = 0.9;
  } else {
    document.getElementById("header").style.height = "120px";
    document.getElementById("logo").style.height = "110px";
    document.getElementById("header").style.opacity = 1;
  }
}

function appendYear(element) {
  element.innerHTML += " " + new Date().getFullYear();
}

appendYear(document.querySelector(".copyright"))