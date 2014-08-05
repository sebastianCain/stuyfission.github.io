/**
 * @author Alvin Lin (alvin.lin@stuypulse.com)
 *
 * This is used specifically to generate the navigation bar for
 * the FTC website.
 */

function generateNavBar(parent, currentPage) {
  // Class names that are needed.
  var sectionClass = 'navbar-section';
  var currentClass = 'navbar-section navbar-current';

  // Creates the necessary elements to append to the DOM depending
  // on what page the user is currently on.
  if (currentPage === 'home') {
    var homeDiv = createDiv(currentClass);
    var homeA = createA();
  } else {
    var homeDiv = createDiv(sectionClass);
    var homeA = createA('index.html');
  }

  if (currentPage === 'pictures') {
    var picturesDiv = createDiv(currentClass);
    var picturesA = createA();
  } else {
    var picturesDiv = createDiv(sectionClass);
    var picturesA = createA('pictures.html');
  }

  if (currentPage === 'about') {
    var aboutDiv = createDiv(currentClass);
    var aboutA = createA();
  } else {
    var aboutDiv = createDiv(sectionClass);
    var aboutA = createA('about.html');
  }

  if (currentPage === 'first') {
    var firstDiv = createDiv(currentClass);
    var firstA = createA();
  } else {
    var firstDiv = createDiv(sectionClass);
    var firstA = createA('first.html');
  }

  if (currentPage === 'contact') {
    var contactDiv = createDiv(currentClass);
    var contactA = createA();
  } else {
    var contactDiv = createDiv(sectionClass);
    var contactA = createA('contact.html');
  }

  // Constructs nested elements.
  homeA.appendChild(homeDiv);
  addText(homeDiv, 'Home');

  picturesA.appendChild(picturesDiv);
  addText(picturesDiv, 'Pictures');

  aboutA.appendChild(aboutDiv);
  addText(aboutDiv, 'About Us');

  firstA.appendChild(firstDiv);
  addText(firstDiv, 'FIRST');

  contactA.appendChild(contactDiv);
  addText(contactDiv, 'Contact Us');

  // Appends elements to parent div with horizontal rules in between.
  parent.appendChild(homeA);
  parent.appendChild(document.createElement('HR'));
  parent.appendChild(picturesA);
  parent.appendChild(document.createElement('HR'));
  parent.appendChild(aboutA);
  parent.appendChild(document.createElement('HR'));
  parent.appendChild(firstA);
  parent.appendChild(document.createElement('HR'));
  parent.appendChild(contactA);
};
