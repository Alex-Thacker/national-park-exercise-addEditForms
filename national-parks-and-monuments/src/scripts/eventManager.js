const handleDelete = () => {
  console.log(
    "delete button clicked",
    event.target.parentNode.id.split("--")[1]
  );
  let parkId = event.target.parentNode.id.split("--")[1];

  deletePark(parkId).then(() => listNationalParks());
};

const handleVisited = () => {
  console.log(
    "visited button clicked",
    event.target.parentNode.id.split("--")[1]
  );
  let parkId = event.target.parentNode.id.split("--")[1];

  let visitedParkObject = {
    visited: true
  };

  patchPark(parkId, visitedParkObject).then(() => listNationalParks());
};

const handleEdit = () => {
  console.log("edit button clicked", event.target.parentNode.id.split("--")[1]);
  let parkId = event.target.parentNode.id.split("--")[1];

  const parkArticle = document.querySelector(`#national-park--${parkId}`);
  clearElement(parkArticle);

  getPark(parkId).then(parkToEdit => {
    const editFormForPark = parkEditForm(parkToEdit);
    parkArticle.appendChild(editFormForPark);
  });
};

const handleUpdate = () => {
  // console.log(
  //   "update button clicked",
  //   event.target.parentNode.id.split("--")[1]
  // );
  let parkId = event.target.parentNode.id.split("--")[1];

  const editedParkName = document.querySelector(`#edit-park-name--${parkId}`);
  const editedParkState = document.querySelector(`#edit-park-state--${parkId}`);
  const editedParkLatitude = document.querySelector(`#edit-latitude--${parkId}`);
  const editedParkLongitude = document.querySelector(`#edit-longitude--${parkId}`);
  let radioButtonValue = document.querySelector('input[name="test"]:checked').value;

  radioButtonValue = (radioButtonValue === "true")

  console.log(radioButtonValue);

  let editedPark = {
    name: editedParkName.value,
    state: editedParkState.value,
    latitude: editedParkLatitude.value,
    longitude: editedParkLongitude.value,
    visited: radioButtonValue
  };

  putPark(parkId, editedPark).then(() => listNationalParks());
};




///////////////
const monumentDelete = () => {
  let monumentId = event.target.parentNode.id.split("--")[1]
  console.log(event.target.parendNode.id.split("--")[1])

  deleteMonument(monumentId)
  .then(() => listMonuments())

}

const editMonumentForm = () => {
  // console.log('hi')
  let monumentId = event.target.parentNode.id.split("--")[1]
  console.log(monumentId)

  let article = document.querySelector(`#monument--${monumentId}`)
  clearElement(article)

  getMonument(monumentId)
  .then(response => {
    let newFrag = monumentForm(response)
    article.appendChild(newFrag)

  })
}



const handleSaveChanges = () => {
  let monumentId = event.target.parentNode.id.split("--")[1]
  console.log(monumentId)

  let monumentNameValue = document.querySelector(`#edit-monument-name--${monumentId}`).value
  let monumentStateValue = document.querySelector(`#edit-monument-state--${monumentId}`).value
  let monumentAreaValue = document.querySelector(`#edit-monument-area--${monumentId}`).value
  let monumentDateEstablishedValue = document.querySelector(`#edit-monument-dateEstablished--${monumentId}`).value
  let monumentVisited = document.querySelector('input[name="test2"]:checked').value;

  monumentVisited = (monumentVisited === "true")

  let monumentObject = {
    name: monumentNameValue,
    state: monumentStateValue,
    area: monumentAreaValue,
    dateEstablished: monumentDateEstablishedValue,
    visited: monumentVisited
  }

  putMonument(monumentId, monumentObject).then(() => listMonuments());
}
