document.addEventListener("DOMContentLoaded", function () {
  const thirdrow = document.getElementsByClassName("row third-row")[0];
  const thirdrowimg = document.getElementsByClassName("third-img")[0];
  const forthrow = document.getElementsByClassName("forth-row")[0];
  const slider = document.getElementsByClassName("slideshow-container")[0];
  const sliderdots = document.getElementsByClassName("dot");

  const button1 = document.getElementById("model1");
  const button2 = document.getElementById("model2");
  const button3 = document.getElementById("model3");
  const button4 = document.getElementById("model4");

  button1.addEventListener("click", function () {
    thirdrow.style.display = "flex";
    forthrow.style.display = "flex";
    slider.style.display = "flex";

    // Iterate through the sliderdots collection to set display individually
    for (let i = 0; i < sliderdots.length; i++) {
      sliderdots[i].style.display = "flex";
    }
  });
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
} 