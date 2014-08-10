/**
 * This file will be modified by a python script to add new updates to the
 * feed.
 * @author: Alvin Lin (alvin.lin@stuypulse)
 */

function appendToFeed(header, text) {
  var feedTable = document.getElementById('homepage-content-feed-table');

  var headerRow = document.createElement('tr');
  var headerColumn = document.createElement('td');
  headerColumn.setAttribute('class', 'homepage-content-feed-header medium');

  var textRow = document.createElement('tr');
  var textColumn = document.createElement('td');
  textColumn.setAttribute('class', 'homepage-content-feed-text');

  addText(headerColumn, header);
  addText(textColumn, text);

  headerRow.appendChild(headerColumn);
  textRow.appendChild(textColumn);
  feedTable.appendChild(headerRow);
  feedTable.appendChild(textRow);
}

appendToFeed('Introducing our New Website', 'FTC is not just about building and programming a robot, and it\'s not just about standing in a lab and working reallylate on the night before competition. It\'s also aboutspreading the joy and excitement of STEM to communityaround us. With this website, we hope to show why we love robotics to everyone in any community, in the hope thatwe inspire kids of all ages to go out and make something.');

appendToFeed('Hi dere','tehasoidfha;weo');

appendToFeed('First post','Lorem ipsum dolor sit amet asdfiha;sdich;aowiehf;asdifj;a tesl;iahc;kuhawef');
