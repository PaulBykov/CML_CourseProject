fetch('../xml/materials.xml')
  .then(res => res.text())
  .then(xmlString => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
    const descs = xmlDoc.getElementsByTagName('DESCRIPTION');
    const cities = xmlDoc.getElementsByTagName('CITY');
    const hotels = xmlDoc.getElementsByTagName('HOTEL');
    document.querySelector('.city').innerHTML = cities[0].textContent;
    document.querySelector('.desc').innerHTML = descs[0].textContent;
    document.querySelector('.hotel').innerHTML = hotels[0].textContent;
  })