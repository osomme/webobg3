// Lånte scriptet fra forelesningen 13. oktober.


function mobilNav() {
  if (document.getElementById("mobilnav").style.display == "none") {
    document.getElementById("mobilnav").style.display = "block";
    document.getElementById("hamikon").classList.remove("fa-bars");
    document.getElementById("hamikon").classList.add("fa-times");
  }
  else {
    document.getElementById("mobilnav").style.display = "none";
    document.getElementById("hamikon").classList.remove("fa-times");
    document.getElementById("hamikon").classList.add("fa-bars");
  }
}
