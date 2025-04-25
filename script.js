// Change text content
document.getElementById("changeTextBtn").addEventListener("click", function () {
    document.getElementById("heading").textContent = "Text Changed!";
  });
  
  // Modify CSS style
  document.getElementById("changeStyleBtn").addEventListener("click", function () {
    document.body.style.backgroundColor = "#f0f8ff";
  });
  
  // Add or remove element
  let isElementAdded = false;
  document.getElementById("toggleElementBtn").addEventListener("click", function () {
    const container = document.getElementById("container");
  
    if (!isElementAdded) {
      const newElement = document.createElement("p");
      newElement.textContent = "New element added!";
      newElement.id = "dynamicElement";
      container.appendChild(newElement);
    } else {
      const existing = document.getElementById("dynamicElement");
      if (existing) container.removeChild(existing);
    }
  
    isElementAdded = !isElementAdded;
  });