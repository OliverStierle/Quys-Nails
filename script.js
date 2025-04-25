function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// For next and prev buttons in home section
document.addEventListener("DOMContentLoaded", function () {
  const imageContainer = document.getElementById("imageContainer");
  const imageWrappers = imageContainer.querySelectorAll(".image-wrapper");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");

  const containerWidth = imageContainer.offsetWidth;
  const imageWidth = containerWidth / 2; // Assuming each image wrapper has half the container width
  const maxImagesVisible = Math.ceil(containerWidth / imageWidth);
  const maxPosition = -(containerWidth * (imageWrappers.length - maxImagesVisible));
  const maxClicks = Math.ceil(imageWrappers.length / 2) + 2; // Half the number of images + 2, + 2 is needed for the next 2 images to be visible

  let currentPosition = 0;
  let totalClicks = 0;

  function updateButtonState() {
    prevButton.disabled = currentPosition === 0;
    nextButton.disabled = currentPosition === maxPosition || totalClicks >= maxClicks;
  }

  function moveImages(direction) {
    currentPosition += direction * imageWidth;
    currentPosition = Math.max(Math.min(currentPosition, 0), maxPosition);
    imageWrappers.forEach(function (wrapper) {
      wrapper.style.transform = `translateX(${currentPosition}px)`;
    });
    updateButtonState();
    if (direction === -1) totalClicks++;
    else if (direction === 1) totalClicks--;
  }

  nextButton.addEventListener("click", function () {
    moveImages(-1);
  });

  prevButton.addEventListener("click", function () {
    moveImages(1);
  });

  updateButtonState(); // Initially set button states
});


