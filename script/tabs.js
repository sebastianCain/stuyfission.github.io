/**
 * @author Alvin Lin (alvin.lin@stuypulse.com)
 */

function TabbedSection(contentContainerEl) {
  this.contentContainerEl_ = contentContainerEl;
};

TabbedSection.prototype.build = function() {
  var tabContainerEl =
      this.contentContainerEl_.getElementsByTagName('div')[0];
  var contentContainerEl =
      this.contentContainerEl_.getElementsByTagName('div')[1];

  console.log(tabContainerEl, contentContainerEl);
  // Apply the CSS styles to the tab and content container elements.
  tabContainerEl.setAttribute('class', 'tab-tabs-container');
  contentContainerEl.setAttribute('class', 'tab-content-container');

  // Store the tab and content elements in parallel arrays. The arrays
  // must be parallel.
  var tabEls = tabContainerEl.getElementsByTagName('li');
  var contentEls = contentContainerEl.getElementsByTagName('div');
  if (tabEls.length !== contentEls.length) {
    throw new Error("Unable to build tabs");
  }

  // Apply the CSS styles to the tab elements and content elements.
};
