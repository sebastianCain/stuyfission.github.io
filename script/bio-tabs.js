/**
 * @author Alvin Lin (alvin.lin@stuypulse.com)
 */


/**
 * @param {string} selectedSection
 */
function setSelected(selectedTab) {
  var tabs = document.getElementById('team-content-tabs')
             .getElementsByTagName('a');
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].setAttribute('class', 'unselected');
  }
  var selectedTabEl = document.getElementById('team-content-tabs-'+selectedTab);
  selectedTabEl.setAttribute('class', 'selected');

  var sections = document.getElementById('team-content-text')
                 .getElementsByTagName('div');
  for (var i = 0; i < sections.length; i++) {
    sections[i].setAttribute('class', 'hidden');
  }
  var selectedSectionEl = document.getElementById('team-content-text-'+selectedTab);
  selectedSectionEl.setAttribute('class', 'small visible');
};
