let inputText = document.querySelector("#encrypt-text-selector");
let inputResult = document.querySelector("#result");
let btnEncrypt = document.querySelector("#encrypt-btn-selector");
let btnDecrypt = document.querySelector("#decrypt-btn-selector");
let btnCopy = document.querySelector("#copy");

var stringOriginalSize = 0;

btnEncrypt.addEventListener("click", () => {
  if (inputText.value != "") {
    //se o campo não estiver vazio
    var text = inputText.value.toLowerCase(); //todas letras minúsculas
    stringOriginalSize = text.length;

    let i = 0;

    while (i < text.length) {
      switch (text[i]) {
        case "a":
          text = text.slice(0, i + 1) + "i" + text.slice(i + 1);
          i = i + 2;
          break;
        case "e":
          text = text.slice(0, i + 1) + "nter" + text.slice(i + 1);
          i = i + 5;
          break;
        case "i":
          text = text.slice(0, i + 1) + "mes" + text.slice(i + 1);
          i = i + 4;
          break;
        case "o":
          text = text.slice(0, i + 1) + "ber" + text.slice(i + 1);
          i = i + 4;
          break;
        case "u":
          text = text.slice(0, i + 1) + "fat" + text.slice(i + 1);
          i = i + 4;
          break;
        default:
          i = i + 1;
      }
    }

    inputResult.value = text;

    document.getElementById("msg-none").style.display = "none"; //apagando msg
    document.getElementById("img-detective").style.display = "none"; //apagando img
    document.getElementById("copy").style.display = "block"; //colocando botão
  }
});

btnDecrypt.addEventListener("click", () => {
  if (inputText.value != "") {
    var text = inputText.value.toLowerCase();
    stringOriginalSize = text.length;

    for (let i = 0; i < text.length; i++) {
      switch (text[i]) {
        case "a":
          text = text.slice(0, i + 1) + text.slice(i + 2);
          break;
        case "e":
          text = text.slice(0, i + 1) + text.slice(i + 5);
          break;
        case "i":
          text = text.slice(0, i + 1) + text.slice(i + 4);
          break;
        case "o":
          text = text.slice(0, i + 1) + text.slice(i + 4);
          break;
        case "u":
          text = text.slice(0, i + 1) + text.slice(i + 4);
          break;
        default:
      }
    }

    inputResult.value = text;

    document.getElementById("msg-none").style.display = "none";
    document.getElementById("img-detective").style.display = "none";
    document.getElementById("copy").style.display = "block";
  }
});

btnCopy.addEventListener("click", () => {
  var textCopy = document.getElementById("result");
  textCopy.select();
});
