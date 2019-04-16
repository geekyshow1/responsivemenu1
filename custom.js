function showMenu() {
  var b = document.getElementById("bar");
  var t = document.getElementById("times");
  var m = document.getElementById("mob-menu");
  b.style.display = "none";
  t.style.display = "block";
  m.style.display = "block";
}

function closeMenu() {
  var b = document.getElementById("bar");
  var t = document.getElementById("times");
  var m = document.getElementById("mob-menu");
  b.style.display = "block";
  t.style.display = "none";
  m.style.display = "none";
}
