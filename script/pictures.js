/**
 * This file contains all the scripts necessary to generate the picture
 * display and describes the behaviors of the pictures when clicked.
 * @author Alvin Lin (alvin.lin@stuypulse.com)
 */

function Gallery () {
  this.thumbnailParent_ = document.getElementById('pictures-content-image-thumbnails');
  this.displayParent_ = document.getElementById('pictures-content-image-display');

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
    this.pictures_[i].thumbnail.setAttribute(
        'onclick', 'gallery.changeImage('+i.toString()+')');
    this.thumbnailParent_.appendChild(this.pictures_[i].thumbnail);

    this.pictures_[i].displayPicture.setAttribute(
        'id', 'displayPicture'+i.toString());
    this.pictures_[i].displayPicture.style.display = 'none';

    this.displayParent_ .appendChild(this.pictures_[i].displayPicture);
  }
};

Gallery.prototype.changeImage = function (index) {
	var numImages = document.getElementById('pictures-content-image-display').childNodes.length - 1;
  console.log(numImages);
	for (var i = 0; i < numImages; i++) {
    document.getElementById('displayPicture'+i.toString()).style.display = 'none';
	}
  document.getElementById('displayPicture'+index.toString()).style.display = 'block';
};

Gallery.prototype.size = function() {
  return this.pictures_.length;
};

var gallery = new Gallery();
gallery.addPicture('data/wafflebot.jpg');
gallery.addPicture('data/winbot.jpg');
gallery.build();
gallery.changeImage(0);
