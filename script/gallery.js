/**
 * This file contains all the scripts necessary to generate the picture
 * display and describes the behaviors of the pictures when clicked.
 * @author Alvin Lin (alvin.lin@stuypulse.com)
 */

/**
 * @constructor
 * @param {Element} parentEl
 * @param {string} objectName The name of Gallery object that was instantiated.
 */
function Gallery(parentEl, objectName) {

  this.parentEl_ = parentEl;
  this.objectName_ = objectName;

  /** @type {Element} */
  this.elements_ = [];
};

/**
 * This function takes a link, a width in pixels, and a height in pixels,
 * respectively, and creates an <img> element with the given src, width,
 * and height. This function returns the <img> element.
 * If no width and height are specified, the image will default to the size
 * of the given image.
 */
Gallery.createImg = function(src, width, height) {
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

/**
 * This function takes the name of a CSS class and creates a <div>
 * element with that class. It will returns the <div> element.
 * If no class name is provided, it will just create a <div> element
 * with no attributes.
 */
Gallery.createDiv = function(className, id) {
  var div = document.createElement('div');

  if (className !== undefined && className !== null) {
    div.setAttribute('class', className);
  }
  if (id !== undefined) {
    div.setAttribute('id', id);
  }

  return div;
};

/**
 * This function takes the name of a CSS class and creates a <span>
 * element with that class. It returns the <span> element.
 * If no class name is provided, it will just create a <span> element
 * with no attributes.
 */
Gallery.createSpan = function(className, id) {
  var span = document.createElement('span');

  if (className !== undefined && className !== null) {
    span.setAttribute('class', className);
  }
  if (id !== undefined) {
    span.setAttribute('id', id);
  }

  return span;
};

/**
 * Adds pictures to this gallery object.
 * @param {string} url URL of the picture
 * @param {string} caption
 */
Gallery.prototype.addPicture = function(url, caption) {
  var thumbnailEl = Gallery.createImg(url);
  var displayPictureEl = Gallery.createImg(url);
  var captionEl = Gallery.createSpan();

  if (caption !== null && caption !== undefined) {
    captionEl.innerHTML = caption;
  }

  this.elements_.push(
      {'thumbnailEl' : thumbnailEl,
       'displayPictureEl' : displayPictureEl,
       'captionEl' : captionEl});
};

/**
 * Builds the gallery and appends it to the parent element.
 */
Gallery.prototype.build = function() {
  var thumbnailContainerEl = Gallery.createDiv('gallery-thumbnails');
  var displayContainerEl = Gallery.createDiv('gallery-display');
  for (var i = 0; i < this.elements_.length; i++) {
    // Sets an onclick property for each thumbnail that will call
    // the changeImage function and adds the thumbnails to the DOM.
    this.elements_[i].thumbnailEl.setAttribute(
        'onclick',
        this.objectName_+'.changeImage('+i.toString()+')');
    thumbnailContainerEl.appendChild(this.elements_[i].thumbnailEl);

    // Sets the displays of the pictures to 'none' and adds the pictures
    // to the DOM.
    this.elements_[i].displayPictureEl.style.display = 'none';
    displayContainerEl.appendChild(this.elements_[i].displayPictureEl);

    // Sets the displays of the captions to 'none' and adds the captions
    // to the DOM.
    this.elements_[i].captionEl.style.display = 'none';
    displayContainerEl.appendChild(this.elements_[i].captionEl);
  }

  this.parentEl_.appendChild(thumbnailContainerEl);
  this.parentEl_.appendChild(displayContainerEl);
};

/**
 * @private
 */
Gallery.prototype.changeImage = function(index) {
  for (var i = 0; i < this.elements_.length; i++) {
    if (i == index) {
      this.elements_[index].displayPictureEl.style.display = 'block';
      this.elements_[index].captionEl.style.display = 'block';
    } else {
      this.elements_[i].displayPictureEl.style.display = 'none';
      this.elements_[i].captionEl.style.display = 'none';
    }
  }
};

/**
 * Returns a random index of an image in the pictures array.
 */
Gallery.prototype.randIndex = function() {
  return Math.floor((Math.random() * 1000)) % this.elements_.length;
};
