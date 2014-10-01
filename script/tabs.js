/**
 * @author Alvin Lin (alvin.lin@stuypulse.com)
 */

function TabbedSection(tabsEl, contentEl) {
  this.tabsEl_ = tabsEl;
  this.contentEl_ = contentEl;
}

TabbedSection.prototype.build = function() {
  for 