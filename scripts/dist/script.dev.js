"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var track = document.querySelector('.carousel-track');
  var leftArrow = document.querySelector('.arrow.left');
  var rightArrow = document.querySelector('.arrow.right');
  var scrollPosition = 0;
  var scrollStep = 120;
  rightArrow.addEventListener('click', function () {
    scrollPosition -= scrollStep;
    track.style.transform = "translateX(".concat(scrollPosition, "px)");
  });
  leftArrow.addEventListener('click', function () {
    scrollPosition += scrollStep;
    track.style.transform = "translateX(".concat(scrollPosition, "px)");
  });
});