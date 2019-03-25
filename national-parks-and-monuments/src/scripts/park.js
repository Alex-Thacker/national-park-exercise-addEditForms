const buildParkHtml = parkObject => {
  // <article>
  //  <h3>Park Name</h3>
  //  <p>State the park in located in</p>
  // </article>

  const parkArticle = buildElement("article", `national-park--${parkObject.id}`);
  parkArticle.appendChild(buildElement("h3", undefined, parkObject.name));
  parkArticle.appendChild(buildElement("p", undefined, parkObject.state));

  if(parkObject.visited !== true) {
    let visitedParkButton = buildElement("button", undefined, "Visited Park")
    parkArticle.appendChild(visitedParkButton);
    visitedParkButton.addEventListener("click", handleVisited)
  }

  let editParkButton = buildElement("button", undefined, "Edit Park")
  parkArticle.appendChild(editParkButton);
  editParkButton.addEventListener("click", handleEdit)

  let deleteParkButton = buildElement("button", undefined, "Delete Park")
  parkArticle.appendChild(deleteParkButton);
  deleteParkButton.addEventListener("click", handleDelete)
  return parkArticle;
};

const parkEditForm = (parkObject) => {
  let editFormFragment = document.createDocumentFragment()

  editFormFragment.appendChild(buildElement("label", undefined, "Name: "))
  editFormFragment.appendChild(buildElement("input", `edit-park-name--${parkObject.id}`, undefined, parkObject.name))

  editFormFragment.appendChild(buildElement("label", undefined, "State: "))
  editFormFragment.appendChild(buildElement("input", `edit-park-state--${parkObject.id}`, undefined, parkObject.state))

  editFormFragment.appendChild(buildElement("label", undefined, "Latitude: "))
  editFormFragment.appendChild(buildElement("input", `edit-latitude--${parkObject.id}`, undefined, parkObject.latitude))

  editFormFragment.appendChild(buildElement("label", undefined, "Longitude: "))
  editFormFragment.appendChild(buildElement("input", `edit-longitude--${parkObject.id}`, undefined, parkObject.longitude))

  //radio buttons begin
  editFormFragment.appendChild(buildElement("legend", undefined, "Have you been here?"))

  const trueRadio = buildElement("input", `edit-true--${parkObject.id}`, undefined, "true")
  trueRadio.type = "radio"
  trueRadio.name = "test"
  editFormFragment.appendChild(trueRadio)
  editFormFragment.appendChild(buildElement("label", undefined, "Yes", "true"))

  const falseRadio = buildElement("input", `edit-false--${parkObject.id}`, undefined, "false")
  falseRadio.type = "radio"
  falseRadio.name = "test"
  editFormFragment.appendChild(falseRadio)
  editFormFragment.appendChild(buildElement("label", undefined, "No", "false"))
  
if (parkObject.visited === true){
  trueRadio.checked = true
} 

if (parkObject.visited === false){
  falseRadio.checked = true
}

  const lineBreak = document.createElement("br")
  editFormFragment.appendChild(lineBreak)

  const updateParkButton = buildElement("button", undefined, "Update")
  updateParkButton.addEventListener("click", handleUpdate)
  editFormFragment.appendChild(updateParkButton)

  return editFormFragment
}



/////////////
const buildMonuments = monumentObject => {

  const monumentArticle = buildElement("article", `monument--${monumentObject.id}`)
  monumentArticle.appendChild(buildElement("h3", undefined, monumentObject.name));
  monumentArticle.appendChild(buildElement("p", undefined, monumentObject.state));

  let editMonumentButton = buildElement("button", undefined, "Edit Monument")
  let deleteMonumentButton = buildElement("button", undefined, "Delete Monument")
  monumentArticle.appendChild(editMonumentButton)
  monumentArticle.appendChild(deleteMonumentButton)
  editMonumentButton.addEventListener("click", editMonumentForm)
  deleteMonumentButton.addEventListener("click", monumentDelete)
  return monumentArticle
}


const monumentForm = (monumentObject) => {
  let monumentFragment = document.createDocumentFragment()

  monumentFragment.appendChild(buildElement("label", undefined, "Name: "))
  monumentFragment.appendChild(buildElement("input", `edit-monument-name--${monumentObject.id}`, undefined, monumentObject.name))

  monumentFragment.appendChild(buildElement("label", undefined, "State: "))
  monumentFragment.appendChild(buildElement("input", `edit-monument-state--${monumentObject.id}`, undefined, monumentObject.state))

  monumentFragment.appendChild(buildElement("label", undefined, "Area: "))
  monumentFragment.appendChild(buildElement("input", `edit-monument-area--${monumentObject.id}`, undefined, monumentObject.area))

  monumentFragment.appendChild(buildElement("label", undefined, "Date established: "))
  monumentFragment.appendChild(buildElement("input", `edit-monument-dateEstablished--${monumentObject.id}`, undefined, monumentObject.dateEstablished))

  
  
  //radio button begins
  monumentFragment.appendChild(buildElement("legend", undefined, "Have you been here?"))
  
  const trueRadio = buildElement("input", `edit-true--${monumentObject.id}`, undefined, "true")
  trueRadio.type = "radio"
  trueRadio.name = "test2"
  monumentFragment.appendChild(trueRadio)
  monumentFragment.appendChild(buildElement("label", undefined, "Yes", "true"))
  
  const falseRadio = buildElement("input", `edit-false--${monumentObject.id}`, undefined, "false")
  falseRadio.type = "radio"
  falseRadio.name = "test2"
  monumentFragment.appendChild(falseRadio)
  monumentFragment.appendChild(buildElement("label", undefined, "No", "false"))
  
  if (monumentObject.visited === true){
    trueRadio.checked = true
  } 
  
  if (monumentObject.visited === false){
    falseRadio.checked = true
  }
  
  const lineBreak = document.createElement("br")
  monumentFragment.appendChild(lineBreak)
  
  let saveChangesButton = buildElement("button", undefined, "Save changes")
  monumentFragment.appendChild(saveChangesButton)
  saveChangesButton.addEventListener("click", handleSaveChanges)
  
  return monumentFragment
}



// "name": "Chimney Rock",
// "state": "CO",
// "area": 4724,
// "dateEstablished": "09-21-2012",
// "visited": false