"use strict";

fetch('../xml/materials.xml').then(function (res) {
  return res.text();
}).then(function (xmlString) {
  var Documents = ["shri.html", "egypt.html", "turkey.html", "indonesia.html", "bolgaria.html", "japan.html", "portugal.html", "brazil.html", "alps.html", "canada.html", "cruise.html"];
  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(xmlString, 'text/xml');
  var descs = xmlDoc.getElementsByTagName('DESCRIPTION');
  var cities = xmlDoc.getElementsByTagName('CITY');
  var hotels = xmlDoc.getElementsByTagName('HOTEL');

  for (var i = 0; i < 12; i++) {
    if (document.location.pathname == "tours/" + Documents[i]) {
      document.querySelector('.city').innerHTML = cities[i].textContent;
      document.querySelector('.desc').innerHTML = descs[i].textContent;
      document.querySelector('.hotel').innerHTML = hotels[i].textContent;
    }
  }
});