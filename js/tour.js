fetch('../xml/materials.xml')
  .then(res => res.text())
  .then(xmlString => {
    const Documents = ['shri.html', 'egypt.html', 'turkey.html', 'indonesia.html', 'bolgaria.html', 'japan.html', 'portugal.html', 'brazil.html', 'alps.html', 'canada.html', 'cruise.html']
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
    const descs = xmlDoc.getElementsByTagName('DESCRIPTION');
    const cities = xmlDoc.getElementsByTagName('CITY');
    const hotels = xmlDoc.getElementsByTagName('HOTEL');
    for(let i = 0; i < 12; i++){
      if(document.location.pathname == '/tours/' + Documents[i]){
        document.querySelector('.city').innerHTML = cities[i].textContent;
        document.querySelector('.desc').innerHTML = descs[i].textContent;
        document.querySelector('.hotel').innerHTML = hotels[i].textContent;
      }
    }
  })