var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var mobileNav = document.querySelector(".mobile-nav");
var selectPlanButtons = document.querySelectorAll(".plan .button");
var noClicked = document.querySelector(".modal__action--negative");
for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function () {
    // modal.style.display = "block";
    // backdrop.style.display = "block";
    // modal.className="open" this will overwrite the classname completely
    modal.classList.add("open");
    backdrop.classList.add("open");
  });
}
// console.log(backdrop.style.backgroundImage);
// console.log(backdrop.style["background-image"]);

if (noClicked) {
  noClicked.addEventListener("click", clicked);
}
backdrop.addEventListener("click", function () {
  // mobileNav.style.display = "none";
  mobileNav.classList.remove("open");
  clicked();
});
function clicked() {
  // modal.style.display = "none";
  // backdrop.style.display = "none";
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
}
var toggleButtom = document.querySelector(".toggle-button");

toggleButtom.addEventListener("click", function () {
  // mobileNav.style.display = "block";
  // backdrop.style.display = "block";
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});
