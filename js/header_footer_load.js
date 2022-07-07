$(document).ready(function () {
  $("#header-boxa-container").load("/common/header-boxa.html");
  $("#footer-boxa-container").load("/common/footer-boxa.html");
  var chargenow = setTimeout(addActiveClass, 50);
});
function addActiveClass() {
  var itemselected;
  if (document.title == "How to buy - BOXA") {
    itemselected = document.querySelector("ul.navbar-nav>li:nth-child(1)");
  } else if (document.title == "Tokenomics - BOXA") {
    itemselected = document.querySelector("ul.navbar-nav>li:nth-child(2)");
  } else if (document.title == "Manifest - BOXA") {
    itemselected = document.querySelector("ul.navbar-nav>li:nth-child(3)");
  } else if (document.title == "Real Estate - BOXA") {
    itemselected = document.querySelector("ul.navbar-nav>li:nth-child(4)");
  }
  itemselected.classList.add("active");
}
