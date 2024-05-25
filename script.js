let input = document.querySelectorAll("textarea");
let output = document.querySelector("main .right iframe");
var iframeDocument = output.contentDocument || output.contentWindow.document;
iframeDocument.body.style.color = "white"; // Change text color to red
iframeDocument.body.style.fontFamily = "Poppins";
let [htmlcode,csscode,jscode] = ""

input.forEach((item, index) => {
  item.addEventListener("keyup", function () {
    if (index === 0) {
      htmlcode = item.value;
    }
    if (index === 1) {
      csscode = item.value;
    }
    if (index === 2) {
      jscode = item.value;
    }
    output.contentDocument.body.innerHTML = htmlcode;
    output.contentDocument.head.innerHTML = `<style>${csscode}</style>`;
    output.contentWindow.eval(jscode)
  });
});
