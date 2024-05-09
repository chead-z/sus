document.getElementById("naoBtn").addEventListener("click", function () {
  this.classList.toggle("clicked");
});

document.getElementById("naoBtn").addEventListener("mouseenter", function () {
  var naoBtn = document.getElementById("naoBtn");
  var randomX = Math.floor(
    Math.random() * (window.innerWidth - naoBtn.offsetWidth)
  );
  var randomY = Math.floor(
    Math.random() * (window.innerHeight - naoBtn.offsetHeight)
  );
  naoBtn.style.position = "absolute";
  naoBtn.style.left = randomX + "px";
  naoBtn.style.top = randomY + "px";
});

document.getElementById("simBtn").addEventListener("click", function () {
  window.location.href =
    "https://media.discordapp.net/attachments/1197629074093375682/1238241517471141959/cfc83722ee06503416e1c4531709e54a.jpg?ex=663e91c7&is=663d4047&hm=4dda6d90bec92fb6a94d4b2d64ed74e20f388dc1a6d516335b4a77d7cc3214c5&";
});
