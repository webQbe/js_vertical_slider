// Define DOM Elements
const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');

// Get slide count
const slidesLength = slideRight.querySelectorAll('div').length;

// Current Slide Index
let visibleSlideIndex = 0;

// Go to last slide
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

/* How slideLeft is styled?

    .left-slide{

           top: -{(4 - 1) * 100vh};

           (Moving 3 slides (3 x 100vh) up to display last slide)
    }

  */

// Listen for Up & Down button clicks
upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

