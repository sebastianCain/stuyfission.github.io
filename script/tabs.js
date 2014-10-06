/**
 * @author Alvin Lin (alvin.lin@stuypulse.com)
 */

function TabbedSection(contentContainerEl) {
  this.contentContainerEl_ = contentContainerEl;
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
  tabEls[0].onclick = function() {
    for (var j = 0; j < tabEls.length; ++j) {
      if (j == 0) {
        tabEls[j].setAttribute('class', 'selected');
        contentEls[j].setAttribute('class', 'selected');
      } else {
        tabEls[j].setAttribute('class', 'unselected');
        contentEls[j].setAttribute('class', 'unselected');
      }
    }
  }
  tabEls[1].onclick = function() {
    for (var j = 0; j < tabEls.length; ++j) {
      if (j == 1) {
        tabEls[j].setAttribute('class', 'selected');
        contentEls[j].setAttribute('class', 'selected');
      } else {
        tabEls[j].setAttribute('class', 'unselected');
        contentEls[j].setAttribute('class', 'unselected');
      }
    }
  }
  tabEls[2].onclick = function() {
    for (var j = 0; j < tabEls.length; ++j) {
      if (j == 2) {
        tabEls[j].setAttribute('class', 'selected');
        contentEls[j].setAttribute('class', 'selected');
      } else {
        tabEls[j].setAttribute('class', 'unselected');
        contentEls[j].setAttribute('class', 'unselected');
      }
    }
  }
  tabEls[3].onclick = function() {
    for (var j = 0; j < tabEls.length; ++j) {
      if (j == 3) {
        tabEls[j].setAttribute('class', 'selected');
        contentEls[j].setAttribute('class', 'selected');
      } else {
        tabEls[j].setAttribute('class', 'unselected');
        contentEls[j].setAttribute('class', 'unselected');
      }
    }
  }
  tabEls[4].onclick = function() {
    for (var j = 0; j < tabEls.length; ++j) {
      if (j == 4) {
        tabEls[j].setAttribute('class', 'selected');
        contentEls[j].setAttribute('class', 'selected');
      } else {
        tabEls[j].setAttribute('class', 'unselected');
        contentEls[j].setAttribute('class', 'unselected');
      }
    }
  }
};
