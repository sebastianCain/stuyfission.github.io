/**
 * @author Alvin Lin (alvin.lin@stuypulse.com)
 *
 * This is used specifically to generate the footer
 * for the FTC website
 */

function generateFooter(parent) {
  var footerDiv = createDiv(null, 'footer');
  addText(footerDiv, 'Copyright \u00A9 2014 Stuy Fission 310');
  parent.appendChild(footerDiv);
};
