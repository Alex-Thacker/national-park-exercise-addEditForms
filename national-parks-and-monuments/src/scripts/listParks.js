const listNationalParks = () => {
  getAllParks().then(parksArray => {
    console.log("parksArray", parksArray)
    let nationParksFragment = document.createDocumentFragment();

    parksArray.forEach(park => {
      let parkHtml = buildParkHtml(park);
      nationParksFragment.appendChild(parkHtml);
    });

    const nationalParksSection = document.querySelector("#national--parks");
    clearElement(nationalParksSection)
    nationalParksSection.appendChild(nationParksFragment)
  });
};




/////////
const listMonuments = () => {
  getAllMonuments().then(monumentArray => {
    console.log(monumentArray)
    let frag = document.createDocumentFragment();

    monumentArray.forEach(monument => {
      let monumentHTML = buildMonuments(monument);
      frag.appendChild(monumentHTML);
    });

    const monumentSection = document.querySelector("#monument-container")
    clearElement(monumentSection)
    monumentSection.appendChild(frag)
  })
}

