let sideToggle = document.querySelector(".sidebar");
let btnToggle = document.querySelector(".sidebar-toggle");
let buttonClose = document.querySelector(".close-btn");

btnToggle.addEventListener("click", function () {
  if (!sideToggle.classList.contains("show-sidebar")) {
    sideToggle.classList.add("show-sidebar");
  } else sideToggle.classList.remove("show-sidebar");
  console.log("toggle clicked");
});

buttonClose.addEventListener("click", function () {
  sideToggle.classList.remove("show-sidebar");
  console.log("close button clicked");
});
