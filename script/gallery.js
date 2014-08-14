/**
 * This file contains all the scripts necessary to generate the picture
 * display and describes the behaviors of the pictures when clicked.
 * @author Alvin Lin (alvin.lin@stuypulse.com)
 */

function Gallery (objectName, thumbnailEl, displayEl) {
  this.objectName_ = objectName;
  this.thumbnailParent_ = thumbnailEl;
  this.displayParent_ = displayEl;

  this.thumbnailContainer_ = createDiv('gallery-thumbnails');
  this.displayContainer_ = createDiv('gallery-display');
  this.pictures_ = [];
};

Gallery.prototype.addPicture = function (url) {
  var thumbnail = createImg(url);
  var displayPicture = createImg(url);
  this.pictures_.push(
      {'thumbnail':thumbnail,
       'displayPicture':displayPicture});
};

Gallery.prototype.build = function () {
  for (var i = 0; i < this.pictures_.length; i++) {
    // Sets an onclick property for each thumbnail that will call
    // the changeImage function
    this.pictures_[i].thumbnail.setAttribute(
        'onclick', this.objectName_+'.changeImage('+i.toString()+')');
    this.thumbnailContainer_.appendChild(this.pictures_[i].thumbnail);

    this.pictures_[i].displayPicture.setAttribute(
        'id', 'displayPicture'+i.toString());
    this.pictures_[i].displayPicture.style.display = 'none';
    this.displayContainer_ .appendChild(this.pictures_[i].displayPicture);
  }
  this.thumbnailParent_.appendChild(this.thumbnailContainer_);
  this.displayParent_.appendChild(this.displayContainer_);
};

Gallery.prototype.changeImage = function (index) {
	for (var i = 0; i < this.pictures_.length; i++) {
    document.getElementById('displayPicture'+i.toString()).style.display = 'none';
	}
  document.getElementById('displayPicture'+index.toString()).style.display = 'block';
};

Gallery.prototype.size = function() {
  return this.pictures_.length;
};
