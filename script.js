document.getElementById("button").addEventListener("click", fetchTxt);

function fetchTxt() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "data.txt", true);

  xhr.onprogress = function () {
    console.log("on progress state", this.readyState);
  };

  xhr.onload = function () {
    console.log("on load readystate ", this.readyState);

    if (this.status === 200) {
      document.getElementById(
        "output"
      ).innerHTML = `<p>${this.responseText}</p>`;
    }
  };
  xhr.send();
}
