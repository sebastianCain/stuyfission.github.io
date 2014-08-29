/**
 * @param {string} selectedSection
 */
function setSelected(selectedTab) {
  "use strict";
  var tabs = document.getElementById('team-tabs')
             .getElementsByTagName('a');
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].setAttribute('class', 'unselected');
  }
  var selectedTabEl = document.getElementById('team-tabs-'+selectedTab);
  selectedTabEl.setAttribute('class', 'selected');

  var sections = document.getElementById('team-tabs-content')
                 .getElementsByTagName('div');
  for (var i = 0; i < sections.length; i++) {
    sections[i].setAttribute('class', 'hidden');
  }
  var selectedSectionEl = document.getElementById('team-tabs-content-'+selectedTab);
  selectedSectionEl.setAttribute('class', 'visible');
};
