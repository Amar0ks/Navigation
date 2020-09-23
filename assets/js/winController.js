const fs = require("fs");
console.log("WinController");

function loadPage(html, div) {
  fs.readFile(html, (err, data) => {
    document.getElementById(div).innerHTML = data;
    var scripts = document.getElementById(div).getElementsByTagName("script");
    for (var i = 0; i < scripts.length; i++) {
      eval(scripts[i].innerText);
      console.log(scripts[i].innerText);
    }
  });
}

loadPage("./assets/html/Hello.html", "content");

Hello.addEventListener("click", function () {
  loadPage("./assets/html/Hello.html", "content");
});

Info.addEventListener("click", function () {
  loadPage("./assets/html/Info.html", "content");
});
