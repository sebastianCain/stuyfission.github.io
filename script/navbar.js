/**
 * @author Alvin Lin (alvin.lin@stuypulse.com)
 *
 * This is used specifically to generate the navigation bar for
 * the FTC website.
 */
function generateNavBar(parent, currentPage) {

  // Initializes necessary elements.
  var homeA = document.createElement('A');
  var picturesA = document.createElement('A');
  var aboutA = document.createElement('A');
  var contactA = document.createElement('A');
  
  var homeDiv = document.createElement('DIV');
  var picturesDiv = document.createElement('DIV');
  var aboutDiv = document.createElement('DIV');
  var contactDiv = document.createElement('DIV');
  
  var homeText = document.createTextNode('Home');
  var picturesText = document.createTextNode('Pictures');
  var aboutText = document.createTextNode('About Us');
  var contactText = document.createTextNode('Contact Us');
  
  var sectionClass = 'navbar-section';
  var currentClass = 'navbar-section navbar-current';
  
  // Sets the class of the div depending on the page the user is on.
  // Sets the URL for the link to direct to.
  if (currentPage === 'home') {
    homeDiv.setAttribute('class', currentClass);
  } else {
    homeDiv.setAttribute('class', sectionClass);
    homeA.setAttribute('href', 'index.html');
  }
  
  if (currentPage === 'pictures') {
    picturesDiv.setAttribute('class', currentClass);
  } else {
    picturesDiv.setAttribute('class', sectionClass);
    picturesA.setAttribute('href', 'pictures.html');
  }
  
  if (currentPage === 'about') {
    aboutDiv.setAttribute('class', currentClass);
  } else {
    aboutDiv.setAttribute('class', sectionClass);
    aboutA.setAttribute('href', 'about.html');
  }
  
  if (currentPage === 'contact') {
    contactDiv.setAttribute('class', currentClass);
  } else {
    contactDiv.setAttribute('class', sectionClass);
    contactA.setAttribute('href', 'contact.html');
  }
  
  // Constructs nested elements.
  homeA.appendChild(homeDiv);
  homeDiv.appendChild(homeText);
  picturesA.appendChild(picturesDiv);
  picturesDiv.appendChild(picturesText);
  aboutA.appendChild(aboutDiv);
  aboutDiv.appendChild(aboutText);
  contactA.appendChild(contactDiv);
  contactDiv.appendChild(contactText);
  
  // Appends elements to parent div with horizontal rules in between.
  parent.appendChild(homeA);
  parent.appendChild(document.createElement('HR'));
  parent.appendChild(picturesA);
  parent.appendChild(document.createElement('HR'));
  parent.appendChild(aboutA);
  parent.appendChild(document.createElement('HR'));
  parent.appendChild(contactA);
};
