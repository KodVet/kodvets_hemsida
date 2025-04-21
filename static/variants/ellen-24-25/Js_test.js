
// ----höger hörn logga----//
document.querySelector('.logo').addEventListener('click', function(event) {
  event.preventDefault();  // Förhindrar standardbeteendet
  window.scrollTo({
    top: 0,
    behavior: 'smooth'  // Gör att sidan rullar upp långsamt
  });
});

// -----Hamburgarmenyn och sidomeny---// 
document.querySelector(".menu_icon_box").onclick = () => {
  document.querySelector(".menu_icon_box").classList.toggle("active");
  document.querySelector(".Menu_box").classList.toggle("active");
};

//--- hero logga----//
function changeBackground(element) {
  element.classList.toggle('clicked');
}



// ---- projekt --------//
let currentIndex = 1;
const totalItems = document.querySelectorAll('input[name="projekt-slider"]').length;

setInterval(() => {
  document.querySelector(`#projekt-${currentIndex}`).checked = true;
  currentIndex = (currentIndex % totalItems) + 1;
}, 4000); 

// -----projekt info ----\\ 
document.querySelectorAll('.toggle-label').forEach((label) => {
  label.addEventListener('click', function () {
    const checkbox = document.getElementById(this.htmlFor);
    if (checkbox.checked) {
      this.textContent = 'Läs mer';
    } else {
      this.textContent = 'Läs mindre';
    }
  });
});

// ----kontakt ---//
function flipCard(card) {
  card.classList.toggle("flipped");
}


// ----image-// 
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n); 
}

function currentSlides(n) {
  showSlides(slideIndex = n); 
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides"); 
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1;} 
  if (n < 1) {slideIndex = slides.length;} 
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); 
  }
  slides[slideIndex - 1].style.display = "block"; 
  dots[slideIndex - 1].className += " active";
}






