/**
 * @author Alvin Lin (alvin.lin@stuypulse.com)
 *
 * This is used specifically to generate the banner for
 * the FTC website.
 */

function generateBanner(parent) {
  var imgDiv = createDiv('banner-img');
  var img = createImg('data/logo.jpg', 150, 150);
  imgDiv.appendChild(img);

  var textDiv = createDiv('banner-text');
  addText(textDiv, 'Stuyvesant FTC 310');

  parent.appendChild(imgDiv);
  parent.appendChild(textDiv);
};
