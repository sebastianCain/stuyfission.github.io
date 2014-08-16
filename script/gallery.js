/**
 * This file contains all the scripts necessary to generate the picture
 * display and describes the behaviors of the pictures when clicked.
 * @author Alvin Lin (alvin.lin@stuypulse.com)
 */

/**
 * @constructor
 * @param {Element} parentEl
 * @param {string} objectName
 */
function Gallery(parentEl, objectName) {

  this.parentEl_ = parentEl;
  this.objectName_ = objectName;

  this.pictures_ = [];
};

/**
 * Adds pictures to this gallery object.
 * @param {string} url URL of the picture
 * @param {string} caption
 */
Gallery.prototype.addPicture = function(url, caption) {
  var thumbnail = createImg(url);
  var displayPicture = createImg(url);

  this.pictures_.push(
      {'thumbnail' : thumbnail,
       'displayPicture' : displayPicture});
};

/**
 * Builds the gallery and appends it to the parent element.
 */
Gallery.prototype.build = function () {
  var thumbnailContainer = createDiv('gallery-thumbnails');
  var displayContainer = createDiv('gallery-display');
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
Gallery.prototype.changeImage = function (index) {
	for (var i = 0; i < this.pictures_.length; i++) {
    this.pictures_[i].displayPicture.style.display = 'none';
	}
  this.pictures_[index].displayPicture.style.display = 'block';
};

Gallery.prototype.size = function() {
  return this.pictures_.length;
};
