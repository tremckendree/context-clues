for (var i = 1; i <= 100; i++) {
  var h3 = document.createElement("h3");
  h3.innerText = "Accusation " + i;
  h3.addEventListener("click", clickH3(i));
  document.body.appendChild(h3)
};

function clickH3(index) {
    return function () {
        alert("Accusation " + index);
    }
}

// josh helped me complete this lab