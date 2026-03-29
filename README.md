# jQuery Thumbnail Gallery - Project Showcase

## Overview

In this coding exercise, you'll use **jQuery** to make a simple project showcase interactive.

The page already includes:
- a featured project image
- a featured project title
- a featured project description
- a row of clickable thumbnails

Your job is to complete the jQuery script so that when a user clicks a thumbnail:

- the large featured image updates
- the featured project title updates
- the featured project description updates
- the clicked thumbnail becomes highlighted

This exercise is designed to help you practice using **jQuery selectors, events, attributes, text changes, and class changes** in a way that produces a visually interesting result.

---

## Learning Goals

By the end of this exercise, you should be able to:

- use jQuery to select page elements
- respond to a click event
- read information stored in HTML attributes
- update text and images with jQuery
- add and remove CSS classes
- understand how a simple interactive gallery works

---

## Files in This Project

### `index.html`
Contains the structure of the page:
- the featured project area
- the row of thumbnail images
- custom data attributes used by the JavaScript
- an explanation section displayed on the page

### `reset.css`
Removes or normalizes some default browser styles so the page starts from a cleaner baseline.

### `thumbnails.css`
Contains all the visual styling for the layout, thumbnails, featured image, and explanation section.

### `jquery-3.7.1.js`
The jQuery library file.

### `thumbnails.js`
The file where you will complete the JavaScript code for the gallery interaction.

---

## What the Page Does

This page acts like a simple portfolio gallery.

At the top of the page, there is a set of smaller **thumbnail images**.

Each thumbnail stores extra information in HTML:
- the image file path
- the project title
- the project description

Below that, there is a **featured project**:
- one large image
- one title
- one description


When a thumbnail is clicked, the script reads that information and uses it to update the featured project area.

---

## How the HTML Is Set Up

The most important parts of the HTML are:

### Featured area
These elements are updated by JavaScript:

- `#featured-image`
- `#project-title`
- `#project-description`

Example:

```html
<img id="featured-image" src="images/concert-poster.jpg" alt="Featured creative project">

<h2 id="project-title">Concert Poster Campaign</h2>

<p id="project-description">
  Poster design created to promote a live music event with strong typography and dramatic color contrast.
</p>
```

### Thumbnail images
Each thumbnail has:
- the class `thumb`
- an image `src`
- a `data-title` attribute
- a `data-description` attribute

Example:

```html
<img
  class="thumb active"
  src="images/concert-poster.jpg"
  data-title="Concert Poster Campaign"
  data-description="Poster design created to promote a live music event with strong typography and dramatic color contrast."
  alt="Thumbnail for Concert Poster Campaign"
>
```

---

## Why Use `data-title` and `data-description`?

These are **custom HTML data attributes**.

They let you store extra information directly inside the HTML.

That means the JavaScript can read the information from the thumbnail the user clicks, instead of storing everything in a separate JavaScript array or object.

### In this exercise:
- `src` stores the image file path
- `data-title` stores the project title
- `data-description` stores the project description

This makes the code easier to organize and easier to understand.

---

## How the JavaScript Works

The script follows this general process:

1. Wait for the page to load
2. Watch for a click on any thumbnail
3. Find the thumbnail that was clicked
4. Read that thumbnail’s `src`, `data-title`, and `data-description`
5. Remove the `active` class from all thumbnails
6. Add the `active` class to the clicked thumbnail
7. Update the featured image
8. Update the featured title
9. Update the featured description

---

## Key jQuery Concepts Used

### `$(document).ready(function() { ... })`
This waits until the page is loaded before running the jQuery code.

That helps make sure the HTML elements already exist before the script tries to use them.

Example:

```javascript
$(document).ready(function() {
  // jQuery code goes here
});
```

---

### `$(".thumb").click(function() { ... })`
This sets up a click event for every element with the class `thumb`.

That means the code inside runs when any thumbnail is clicked.

Example:

```javascript
$(".thumb").click(function() {
  // code runs when a thumbnail is clicked
});
```

---

### `$(this)`
Inside the click event, `this` refers to the thumbnail that was clicked.

Wrapping it in `$()` turns it into a jQuery object so you can use jQuery methods on it.

Example:

```javascript
$(this).attr("src")
```

This means:
- look at the thumbnail that was clicked
- get its `src` value

---

### `.attr()`
Gets the value of an HTML attribute.

Examples:

```javascript
$(this).attr("src")
$(this).attr("data-title")
$(this).attr("data-description")
```

These lines read information stored in the clicked thumbnail.

---

### `.removeClass()` and `.addClass()`
These methods change CSS classes on elements.

Example:

```javascript
$(".thumb").removeClass("active");
$(this).addClass("active");
```

This removes the `active` class from all thumbnails, then adds it back only to the one that was clicked.

This is how the highlighted thumbnail changes.

---

### `.text()`
Changes the text inside an element.

Example:

```javascript
$("#project-title").text(projectTitle);
$("#project-description").text(projectDescription);
```

This updates the title and description shown in the featured project area.

---

### `.fadeOut()` and `.fadeIn()`
These create a smoother visual transition.

Instead of instantly swapping the featured image, the script:
1. fades the current image out
2. changes the image source
3. fades the new image back in

Example:

```javascript
$("#featured-image").fadeOut(200, function() {
  $(this).attr("src", fullImage).fadeIn(200);
});
```

The number `200` is the duration in milliseconds.

---

## What Is a Callback Function?

A **callback function** is a function that runs after another action finishes.

In this exercise, the callback function is inside `fadeOut()`:

```javascript
function() {
  $(this).attr("src", fullImage).fadeIn(200);
}
```

This is important because it makes sure the featured image changes **after** the old image finishes fading out.

If the image source changed too early, the transition would not look as smooth.

---

## Variables Used in This Script

### `fullImage`
Stores the image path from the clicked thumbnail’s `src`.

Example:

```javascript
var fullImage = $(this).attr("src");
```

This value is used to update the featured image.

---

### `projectTitle`
Stores the title from the clicked thumbnail’s `data-title` attribute.

Example:

```javascript
var projectTitle = $(this).attr("data-title");
```

This value is used to update the featured heading.

---

### `projectDescription`
Stores the description from the clicked thumbnail’s `data-description` attribute.

Example:

```javascript
var projectDescription = $(this).attr("data-description");
```

This value is used to update the featured paragraph.

---

## Completed JavaScript Reference

Here is the completed version of the script:

```javascript
$(document).ready(function() {

  // When any thumbnail is clicked, run the code below.
  $(".thumb").click(function() {

    // Get the image file path from the clicked thumbnail.
    var fullImage = $(this).attr("src");

    // Get the project title from the clicked thumbnail.
    var projectTitle = $(this).attr("data-title");

    // Get the project description from the clicked thumbnail.
    var projectDescription = $(this).attr("data-description");

    // Remove the active class from all thumbnails.
    $(".thumb").removeClass("active");

    // Add the active class to the clicked thumbnail.
    $(this).addClass("active");

    // Fade out the featured image, change it, then fade it back in.
    $("#featured-image").fadeOut(200, function() {
      $(this).attr("src", fullImage).fadeIn(200);
    });

    // Update the featured project title.
    $("#project-title").text(projectTitle);

    // Update the featured project description.
    $("#project-description").text(projectDescription);

  });

});
```

---

## Common Mistakes

### 1. Forgetting `$()` around `this`
Wrong:

```javascript
this.attr("src")
```

Correct:

```javascript
$(this).attr("src")
```

`this` by itself is a plain JavaScript object reference.  
`$(this)` turns it into a jQuery object.

---

### 2. Misspelling attribute names
Wrong:

```javascript
$(this).attr("data-titel")
```

Correct:

```javascript
$(this).attr("data-title")
```

Attribute names must match the HTML exactly.

---

### 3. Forgetting quotation marks
Wrong:

```javascript
$(this).attr(data-title)
```

Correct:

```javascript
$(this).attr("data-title")
```

Attribute names must be written as strings.

---

### 4. Using the wrong selector
Wrong:

```javascript
$("project-title").text(projectTitle);
```

Correct:

```javascript
$("#project-title").text(projectTitle);
```

Remember:
- `#` is for an ID
- `.` is for a class

---

### 5. Forgetting semicolons or parentheses
Small syntax mistakes can stop the script from working.

Examples:
- missing `;`
- missing `)`
- missing `}`
- missing quotation marks

---

### 6. Not matching the HTML
If your JavaScript looks for:
- `#featured-image`
- `#project-title`
- `#project-description`
- `.thumb`

those names must exactly match the HTML.

---

## Suggested Coding Process

A good way to complete the script is to work in this order:

1. Get the title
2. Get the description
3. Remove the active class from all thumbnails
4. Add the active class to the clicked thumbnail
5. Update the featured image
6. Update the featured title
7. Update the featured description

Test often while you work.

Do not wait until the very end to see whether it works.

---

## Challenge Ideas

After the basic version works, try one or more of these:

- add more thumbnails
- change the project titles and descriptions
- replace placeholder images with your own images
- change the fade speed
- restyle the active thumbnail border
- create a new gallery theme, such as:
  - travel photos
  - music projects
  - design portfolio
  - campus events

---

## Quick Glossary

**jQuery**  
A JavaScript library that makes common scripting tasks shorter and easier.

**selector**  
A way of targeting HTML elements in CSS or JavaScript.

**attribute**  
Extra information added to an HTML element, such as `src` or `alt`.

**custom data attribute**  
A custom HTML attribute that begins with `data-`, such as `data-title`.

**event**  
Something that happens on a page, such as a click.

**callback function**  
A function that runs after another action finishes.

**class**  
A reusable label that can be used for styling or scripting multiple elements.

**id**  
A unique label used for one specific element on the page.

---

## Final Reminder

The goal of this project is not just to copy code. The goal is to understand the pattern:

- select something
- respond to an event
- read information
- change the page

That pattern shows up in many interactive web projects.
