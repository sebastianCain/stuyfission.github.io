/**
 * @author Alvin Lin (alvin.lin@stuypulse.com)
 */

function TabbedSection(contentContainerEl) {
  this.contentContainerEl_ = contentContainerEl;
};

TabbedSection.onClick = function(contentEls, index) {
};

TabbedSection.prototype.build = function() {
  var tabContainerEl =
      this.contentContainerEl_.getElementsByClassName('tab-tabs-container')[0];
  var contentContainerEl =
      this.contentContainerEl_.getElementsByClassName('tab-content-container')[0];

  // Store the tab and content elements in parallel arrays. The arrays
  // must be parallel.
  var tabEls = tabContainerEl.getElementsByTagName('div');
  var contentEls = contentContainerEl.getElementsByTagName('div');
  if (tabEls.length !== contentEls.length) {
    throw new Error("Unable to build tabs");
  }

  // Set the onclick events.
  for (var i = 0; i < tabEls.length; ++i) {
    tabEls[i].onclick = null;
  }
};
