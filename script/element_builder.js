/**
 * @author Alvin Lin (alvin.lin@stuypulse.com)
 *
 * Some basic functions to help generate elements hierarchies in a
 * webpage.
 *
 * @todo This class still needs to be tested.
 * @deprecated
 */

// This class takes a tag and a class name and creates a 'root' element with
// the given tag and class name. Other tags and elements can be built off this
// class.
function Element (tag, className) {
  this.root_ = document.createElement(tag);

  if (className !== undefined) {
    this.root_.setAttribute('class', className);
  }

  this.lastElementAdded_ = null;
  this.elements_ = [];
};

// This function takes a link and appends an <a> element directing to the
// given link to the root element.
// If no link is given, it will append an <a> element with no attributes.
Element.prototype.createA = function(href) {
  var a = document.createElement('A');

  if (href !== undefined) {
    a.setAttribute('href', href);
  }

  this.elements_.push(a);
  this.lastElementAdded_ = a;
};

// This function takes a class name and appends a <div> with the given
// class name to the root element.
// If no class name is specified, it will append a <div> with no
// attributes.
Element.prototype.createDiv = function(className) {
  var div = document.createElement.('DIV');

  if (className !== undefined) {
    div.setAttribute('class', className);
  }

  this.elements_.push(div);
  this.lastElementAdded_ = div;
};

// This function takes a link, a width in pixels, and a height in pixels,
// respectively, and appends an <img> element with the given src, width,
// and height to the root element.
// If no width and height are specified, the image will default to the size
// of the given image.
Element.prototype.createImg = function(src, className, width, height) {
  var img = document.createElement('IMG');
  img.setAttribute('src', src);

  if (className !== undefined || className !== null) {
    img.setAttribute('class', className);
  }
  if (width !== undefined || width !== null) {
    img.setAttribute('width', width);
  }
  if (height !== undefined || height !== null) {
    img.setAttribute('height', height);
  }

  this.elements_.push(img);
  this.lastElementAdded_ = img;
};

// This function takes text as an argument and appends a text node with the
// given text to the last element added.
Element.prototype.addText = function(parent, text) {
  var textNode = document.createTextNode(text);
  this.lastElementAdded_.appendChild(textNode);
};

// This function adds custom attribute to the last element that you added
// to the class.
Element.prototype.setAttribute = function(attribute, value) {
  this.lastElementAdded_.setAttribute(attribute, value);
};
