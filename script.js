document.getElementById("button").addEventListener("click", fetchJson);

function fetchJson() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "data.json", true);

  xhr.onprogress = function () {
    console.log("on progress state", this.readyState);
  };

  xhr.onload = function () {
    console.log("on load readystate ", this.readyState);
    if (this.status === 200) {
      const datas = JSON.parse(this.responseText);
      let output = "";
      datas.forEach((data) => {
        output += `<div class="alert alert-info" role="alert">
        My name is ${data.name} and Learning ${data.learn}
        </div>`;
      });
      document.getElementById("output").innerHTML = output;
    }
  };
  xhr.send();
}
