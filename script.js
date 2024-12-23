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

// Start from last left slide
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


const changeSlide = (direction) => {

    // Get display height
    const sliderHeight = sliderContainer.clientHeight;

    // If Up button clicked
    if(direction === 'up'){

        visibleSlideIndex++ // Increment index by 1

        // At last slide, go back to first slide
        if(visibleSlideIndex > slidesLength - 1) visibleSlideIndex = 0;

    } else if(direction === 'down') {

        // Down button is clicked

        visibleSlideIndex-- /// Decrement index by 1

        // At first slide, go to last slide
        if(visibleSlideIndex < 0) visibleSlideIndex = slidesLength - 1;

    }

    // Moving right slides Upwards with 
    // current slide index * display height value
    slideRight.style.transform = `translateY(-${visibleSlideIndex * sliderHeight}px)`;

    // Moving left slides Downwards with 
    slideLeft.style.transform = `translateY(${visibleSlideIndex * sliderHeight}px)`;

}