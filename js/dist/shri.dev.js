"use strict";

fetch('../xml/materials.xml').then(function (res) {
  return res.text();
}).then(function (xmlString) {
  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(xmlString, 'text/xml');
  var descs = xmlDoc.getElementsByTagName('DESCRIPTION');
  var cities = xmlDoc.getElementsByTagName('CITY');
  var hotels = xmlDoc.getElementsByTagName('HOTEL');
  document.querySelector('.city').innerHTML = cities[0].textContent;
  document.querySelector('.desc').innerHTML = descs[0].textContent;
  document.querySelector('.hotel').innerHTML = hotels[0].textContent;
});