// Wait until the page has fully loaded before running any jQuery code.
// This helps make sure the HTML elements already exist on the page.
$(document).ready(function() {

  // When any thumbnail is clicked, run the code below.
  $(".thumb").click(function() {

    // When a thumbnail is clicked, "this" refers to the thumbnail that was clicked.

    // Get the image file path from the clicked thumbnail.
    // Since we are using the same image for both the thumbnail and the featured image,
    // we can just read the src attribute.
    var fullImage = $(this).attr("src");

    // Get the project title stored in the clicked thumbnail's data-title attribute.
    var projectTitle = 

    // Get the project description stored in the clicked thumbnail's data-description attribute.
    var projectDescription = 

    // Remove the active class from every thumbnail.
    // This clears the old selection.
    

    // Add the active class to the thumbnail that was clicked.
    // This highlights the current thumbnail.
    

    // Fade out the featured image.
    // After it fades out, change the image source.
    // Then fade the image back in.
    $("#featured-image").fadeOut(200, function() {
      
    });

    // Update the text inside the featured project title.
    

    // Update the text inside the featured project description.
    

  });

});


/*
==================================================
HOW THIS SCRIPT WORKS
==================================================

This script makes the project gallery interactive.

When the user clicks a thumbnail, the script:
- gets the thumbnail's image path from src
- gets the title from data-title
- gets the description from data-description
- removes the active class from all thumbnails
- adds the active class to the clicked thumbnail
- updates the featured image
- updates the featured title
- updates the featured description

The fadeOut() section uses a callback function.
That means the image source changes only after the old image finishes fading out.

==================================================
HELPFUL TERMS
==================================================

$(this):
Refers to the thumbnail that was clicked.

.attr():
Gets the value of an HTML attribute.

src:
The image file path used by an <img> element.

data-title:
A custom HTML data attribute storing the project title.

data-description:
A custom HTML data attribute storing the project description.

.removeClass():
Removes a CSS class from selected elements.

.addClass():
Adds a CSS class to selected elements.

.text():
Changes the text inside an element.

.fadeOut():
Gradually hides an element.

.fadeIn():
Gradually shows an element.

callback function:
A function that runs after another action finishes.

==================================================
VARIABLES USED
==================================================

fullImage:
Stores the image file path from the clicked thumbnail.

projectTitle:
Stores the title from the clicked thumbnail's data-title attribute.

projectDescription:
Stores the description from the clicked thumbnail's data-description attribute.
*/
