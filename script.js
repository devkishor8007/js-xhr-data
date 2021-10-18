document.getElementById("button").addEventListener("click", fetchTxt);

function fetchTxt() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "data.json", true);

  xhr.onprogress = function () {
    console.log("on progress state", this.readyState);
  };

  xhr.onload = function () {
    console.log("on load readystate ", this.readyState);
    if (this.status === 200) {
      const data = JSON.parse(this.responseText);
      const output = `<p>My name is ${data.name} and Learning ${data.learn}</p>`;
      document.getElementById("output").innerHTML = output;
    }
  };
  xhr.send();
}
