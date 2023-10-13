var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;

  if(element.matches(".box")) {
    var state = element.getAttribute("data-state");
    var number = element.getAttribute("data-number");

    if(state === "hidden") {
      element.textContent = number;
      element.dataset.state = "visible";

    }
    else {
      element.textContent = "";
      element.dataset.state = "hidden";
    }
  }
});
