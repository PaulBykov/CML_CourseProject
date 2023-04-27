fetch('../xml/materials.xml')
  .then(res => res.text())
  .then(xmlString => {
    const Documents = ['shri.html', 'egypt.html', 'turkey.html', 'indonesia.html', 'bolgaria.html', 'japan.html', 'portugal.html', 'costa-rica.html', 'brazil.html', 'alps.html', 'canada.html', 'tunis.html']
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
    const descs = xmlDoc.getElementsByTagName('DESCRIPTION');
    const cities = xmlDoc.getElementsByTagName('CITY');
    const hotels = xmlDoc.getElementsByTagName('HOTEL');
    const dates = xmlDoc.getElementsByTagName('DATE');
    for(let i = 0; i <= 12; i++){
      if(document.location.pathname == '/tours/' + Documents[i]){
        document.querySelector('.date').innerHTML = dates[i].textContent;
        document.querySelector('.city').innerHTML = cities[i].textContent;
        document.querySelector('.desc').innerHTML = descs[i].textContent;
        document.querySelector('.hotel').innerHTML = hotels[i].textContent;
      }
    }
  })