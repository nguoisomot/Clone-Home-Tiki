document.addEventListener("DOMContentLoaded", function () {
  /* Start SlideShow */
  var slideIndex = 0;
  // showSlides(slideIndex);
  // Start khai bao
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  const slideContainer = document.querySelector('.banner-left-top');
  // End khai bao
  SlidesFirst();
  var prev = document.getElementsByClassName("prev");
  var next = document.getElementsByClassName("next");

  // button prev click
  prev[0].addEventListener('click', function () {
    slideIndex--;
    if (slideIndex == slides.length) { slideIndex = 0 }
    if (slideIndex < 0) { slideIndex = slides.length - 1 }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    dots[slideIndex].className += " active";
  });
  // button next click
  next[0].addEventListener('click', function () {
    slideIndex++;
    if (slideIndex == slides.length) { slideIndex = 0 }
    if (slideIndex < 0) { slideIndex = slides.length - 1 }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    dots[slideIndex].className += " active";
  });
  // button dot click
  for (let i = 0; i < slides.length; i++) {
    dots[i].addEventListener('click', function () {
      // if (i > slides.length) { slideIndex = 1 }
      // if (i < 1) { slideIndex = slides.length }
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slideIndex = i;
        console.log(slideIndex);
      }
      slides[i].style.display = "block";
      console.log(i);
      for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }

      dots[i].className += " active";
    })
  }
  function SlidesFirst() {
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
  }
  ///auto slideshow

  function getInterval() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      console.log(slideIndex);
    }
    slides[slideIndex].style.display = "block";
    console.log(slideIndex);
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex].className += " active";
    slideIndex++;
    if (slideIndex >= slides.length) { slideIndex = 0 }
    if (slideIndex < 0) { slideIndex = slides.length - 1 }
  }
  const startSlide = () => {
    slideId = setInterval(() => {
      getInterval();
    }, 2000);
  };
  slideContainer.addEventListener('mouseenter', () => {
    clearInterval(slideId);
  });

  slideContainer.addEventListener('mouseleave', startSlide);
  startSlide();
  /* End SlideShow */
})


// Start ngần hàn quan tâm
const slideContainer = document.querySelector('.container-list-slide');
const slide = document.querySelector('.list-slide');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

let slides = document.querySelectorAll('.item');
let index = 0;
let slideId;

prevBtn.style.opacity = '0.2'
const slideWidth = slides[index].clientWidth;
// slide.style.transform = 'translateX(${-slideWidth * index}px)';

const getSlides = () => document.querySelectorAll('.item');

const moveToNextSlide = () => {
  prevBtn.style.opacity = '1'
  slides = getSlides();
  if (index >= 3) {
    // console.log(index+"aa");  
    return;
  }
  else if (index == 2) {
    // nextBtn.style.opacity = '1'
    slide.style.transition = '.7s ease-out';
    slide.style.transform = `translateX(${-slideWidth * index * 6 + -slideWidth * 2}px)`;
    index++;
    nextBtn.style.opacity = '0.2'
  }
  else {
    // nextBtn.style.opacity = '1'
    index++;
    slide.style.transition = '.7s ease-out';
    slide.style.transform = `translateX(${-slideWidth * index * 6}px)`;
  }

};

const moveToPreviousSlide = () => {
  nextBtn.style.opacity = '1'
  if (index <= 0) {
    return;
  }
  else if (index == 3) {
    index--;
    // console.log(index); 
    slide.style.transition = '.7s ease-out';
    slide.style.transform = `translateX(${-slideWidth * index * 6}px)`;

  }
  else {
    index--;
    slide.style.transition = '.7s ease-out';
    slide.style.transform = `translateX(${-slideWidth * index * 6}px)`;
    if (index == 0) {
      prevBtn.style.opacity = '0.2'
    }
  }

};

nextBtn.addEventListener('click', moveToNextSlide);
prevBtn.addEventListener('click', moveToPreviousSlide);

//End ngần hàng quan tâm