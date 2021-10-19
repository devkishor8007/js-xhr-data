document.getElementById("getdata").addEventListener("click", fetchAPI);

function fetchAPI(e) {
  e.preventDefault();

  const number = document.getElementById("number").value;

  const xhr = new XMLHttpRequest();

  xhr.open("GET", `https://api.icndb.com/jokes/random/${number}`, true);

  xhr.onprogress = function () {
    console.log("on progress state", this.readyState);
  };

  xhr.onload = function () {
    console.log("on load readystate ", this.readyState);
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      let output = "";
      if (response.type === "success") {
        response.value.forEach((item) => {
          output += `<li>${item.joke}</li>`;
        });
      } else {
        output += "<li>Error</li>";
      }
      document.querySelector(".jokes").innerHTML = output;
    }
  };
  xhr.send();
}
