/**
 * This file contains all the necesary scripts for tabs in any
 * section that needs tabs.
 * @author Alvin Lin (alvin.lin@stuypulse.com)
 */

/**
 * @private
 */
function showSelectedTab (tabContainerId, contentContainerId, index) {
  var tabContainerEl = document.getElementById(tabContainerId);
  var contentContainerEl = document.getElementById(contentContainerId);

  // Store the tab and content elements in parallel arrays. The arrays
  // must be parallel and equal in length (1 tab per section).
  var tabEls = getImmediateChildren(
      tabContainerEl, 'DIV');
  var contentEls = getImmediateChildren(
      contentContainerEl, 'DIV');

  for (var i = 0; i < contentEls.length; ++i) {
    if (i == index) {
      tabEls[i].setAttribute('class', 'selected');
      contentEls[i].setAttribute('class', 'selected');
    } else {
      tabEls[i].setAttribute('class', 'unselected');
      contentEls[i].setAttribute('class', 'unselected');
    }
  }
};

/**
 * This function applies tab switching behavior to the tabs.
 * @param {string} tabContainerId
 * @param {string} contentContainerId
 */
function applyTabClickEvents (tabContainerId, contentContainerId) {
  // Check if the tabs have the same number of divs as the content divs.
  var tabContainerEl = document.getElementById(tabContainerId);
  var contentContainerEl = document.getElementById(contentContainerId);
  var tabEls = getImmediateChildren(
      tabContainerEl, 'DIV');
  var contentEls = getImmediateChildren(
      contentContainerEl, 'DIV');
  if (tabEls.length !== contentEls.length) {
    throw new Error("Unable to build tabs.");
  }

  // Set the onclick events.
  for (var i = 0; i < tabEls.length; ++i) {
    tabEls[i].setAttribute(
        'onclick', 'showSelectedTab("' + tabContainerId + '","' +
        contentContainerId + '",' + i.toString() + ')');
  }
};
