'use strict';

$(function() {

    // cache DOM elements
    var $slider = $('#slider');
    var $sliderContainer = $slider.find('.slides');
    var $slides = $sliderContainer.find('.slide');

    // configurations
    var slideWidth = 720;
    var animationSpeed = 1000;
    var pause = 2000;
    var currentSlide = 1;
    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $sliderContainer.animate({'margin-left': '-=' +slideWidth}, animationSpeed, function() {
                // if it is the last slide, loop over
                currentSlide++;
                if (currentSlide === $slides.length) {
                    currentSlide = 1;
                    // reset the margin
                    $sliderContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }
    
    function pauseSlider() {
        clearInterval(interval);
    }

    // pause slider when the mouse is placed on it
    $slider.on('mouseenter', pauseSlider)
           .on('mouseleave', startSlider);
    
    startSlider();
});


