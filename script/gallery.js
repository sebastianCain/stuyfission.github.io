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
  this.pictures_ = [];
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
 * Adds pictures to this gallery object.
 * @param {string} url URL of the picture
 * @param {string} caption
 */
Gallery.prototype.addPicture = function(url, caption) {
  var thumbnail = Gallery.createImg(url);
  var displayPicture = Gallery.createImg(url);

  this.pictures_.push(
      {'thumbnail' : thumbnail,
       'displayPicture' : displayPicture});
};

/**
 * Builds the gallery and appends it to the parent element.
 */
Gallery.prototype.build = function() {
  var thumbnailContainer = Gallery.createDiv('gallery-thumbnails');
  var displayContainer = Gallery.createDiv('gallery-display');
  for (var i = 0; i < this.pictures_.length; i++) {
    // Sets an onclick property for each thumbnail that will call
    // the changeImage function
    this.pictures_[i].thumbnail.setAttribute(
        'onclick',
        this.objectName_+'.changeImage('+i.toString()+')');
    thumbnailContainer.appendChild(this.pictures_[i].thumbnail);

    // Sets the displays of the pictures to 'none'.
    this.pictures_[i].displayPicture.style.display = 'none';
    displayContainer.appendChild(this.pictures_[i].displayPicture);
  }

  this.parentEl_.appendChild(thumbnailContainer);
  this.parentEl_.appendChild(displayContainer);
};

/**
 * @private
 */
Gallery.prototype.changeImage = function(index) {
	for (var i = 0; i < this.pictures_.length; i++) {
    this.pictures_[i].displayPicture.style.display = 'none';
	}
  this.pictures_[index].displayPicture.style.display = 'block';
};

/**
 * Returns a random index of an image in the pictures array.
 */
Gallery.prototype.randIndex = function() {
  return Math.floor((Math.random() * 100)) % this.pictures_.length;
};
