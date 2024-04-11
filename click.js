// Get all the images with the "enlargeable-image" class
var images = document.querySelectorAll('.enlargeable-image');

// Loop through all the images and add a click event listener to each
for (var i = 0; i < images.length; i++) {
  images[i].addEventListener('click', handleClick);
}

// Create a function to handle clicks on the enlarged image
function handleClick(event) {
  // Create a new element for the enlarged image
  var enlarged = document.createElement('div');
  enlarged.classList.add('enlarged-image');
  
  // Create a new element for the close button
  var closeButton = document.createElement('div');
  closeButton.classList.add('close-button');
  closeButton.innerHTML = '&times;'; // add a close symbol to the button
  enlarged.appendChild(closeButton); // add the close button to the enlarged element
  
  // Create a new element for the image and set its source
  var img = document.createElement('img');
  img.src = event.target.src;
  enlarged.appendChild(img); // add the image to the enlarged element
  
  // Add the enlarged element to the body
  document.body.appendChild(enlarged);

  // Create a function to handle clicks on the enlarged element
  function handleEnlargedClick(event) {
    // Check if the click is on the close button or anywhere else outside the image
    if (event.target.classList.contains('close-button') || event.target === enlarged) {
      // Remove the enlarged element from the body
      document.body.removeChild(enlarged);
      // Remove the event listener from the enlarged element
      enlarged.removeEventListener('click', handleEnlargedClick);
    }
  }

  // Add an event listener to the enlarged element to handle clicks
  enlarged.addEventListener('click', handleEnlargedClick);
}


