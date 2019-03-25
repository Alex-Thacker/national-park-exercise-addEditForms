const buildElement = (elementType, elementId, elementTextContent, elementValue) => {
  let htmlElement = document.createElement(elementType);
  if (elementId) {
    htmlElement.setAttribute("id", elementId);
  }

  if (elementValue) {
    htmlElement.setAttribute("value", elementValue);
  }
  htmlElement.textContent = elementTextContent;
  return htmlElement;
};

const clearElement = domElement => {
  while (domElement.firstChild) {
    domElement.removeChild(domElement.firstChild);
  }
};

const displayContainer = document.querySelector("#display-container");
displayContainer.appendChild(buildElement("section", "national--parks"));
