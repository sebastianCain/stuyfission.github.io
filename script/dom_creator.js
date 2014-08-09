/**
 * @author Alvin Lin (alvin.lin@stuypulse.com)
 *
 * Some basic functions to help generate elements in a webpage.
 * Appending and hierarchy will be handled in any file that uses
 * these functions.
 */

// This function takes a link and creates an <a> element directing to the
// given link. This returns the <a> element.
// If no link is given, it will return an <a> element with no attributes.
function createA(href, className) {
  var a = document.createElement('a');

  if (href !== undefined && href !== null) {
    a.setAttribute('href', href);
  }
  if (className !== undefined) {
    a.setAttribute('class', className);
  }

  return a;
};

// This function takes the name of a CSS class and creates a <div>
// element with that class. It will returns the <div> element.
// If no class name is provided, it will just create a <div> element
// with no attributes.
function createDiv(className, id) {
  var div = document.createElement('div');

  if (className !== undefined && className !== null) {
    div.setAttribute('class', className);
  }
  if (id !== undefined) {
    div.setAttribute('id', id);
  }

  return div;
};

// This function takes a link, a width in pixels, and a height in pixels,
// respectively, and creates an <img> element with the given src, width,
// and height. This function returns the <img> element.
// If no width and height are specified, the image will default to the size
// of the given image.
function createImg(src, width, height) {
  var img = document.createElement('img');
  img.setAttribute('src', src);

  if (width !== undefined) {
    img.setAttribute('width', width);
  }
  if (height !== undefined) {
    img.setAttribute('height', height);
  }

  return img;
};

// This function takes a parent element and some text as arguments,
// respectively, and appends a text node with specified text to the
// parent element.
// This function does not have a return value.
function addText(parent, text) {
  var textNode = document.createTextNode(text);
  parent.appendChild(textNode);
};
