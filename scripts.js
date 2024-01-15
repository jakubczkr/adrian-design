function showMainContent() {
  document.getElementById("content-div").style.display = "flex"
  document.getElementById("welcome-page-div").style.display = "none"

  const divs = document.getElementsByClassName("content");
  Array.from(divs).forEach(div => div.style.display = (div.id === "projects-div") ? "flex" : "none");
}

function backToMain() {
  document.getElementById("content-div").style.display = "none"
  document.getElementById("welcome-page-div").style.display = "flex"
}

function changePage(divId) {
  const divs = document.getElementsByClassName("content");
  Array.from(divs).forEach(div => div.style.display = (div.id === divId) ? "flex" : "none");
}