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
  if (index >= 3){
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
    slide.style.transform = `translateX(${-slideWidth * index * 6}px)`;}
   
};

const moveToPreviousSlide = () => {
  nextBtn.style.opacity = '1'
  if (index <= 0) { 
    return;}
  else if (index == 3) {
    index--;
    // console.log(index); 
    slide.style.transition = '.7s ease-out';
    slide.style.transform = `translateX(${-slideWidth * index * 6 }px)`;
    
  }
  else{
    index--; 
    slide.style.transition = '.7s ease-out';
    slide.style.transform = `translateX(${-slideWidth * index * 6}px)`;   
    if(index == 0){
      prevBtn.style.opacity = '0.2'
    }
  }
 
};

nextBtn.addEventListener('click', moveToNextSlide);
prevBtn.addEventListener('click', moveToPreviousSlide);