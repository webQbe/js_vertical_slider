// Define DOM Elements
const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');

// Get slide count
const slidesLength = slideRight.querySelectorAll('div').length;
console.log(slidesLength);