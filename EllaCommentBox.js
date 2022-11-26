// get data for display

function commentBox() {
  let data = "";
  let name = document.getElementById("userName").value;
  let email = document.getElementById("userEmail").value;
  let comment = document.getElementById("userComment").value;
  let count = (textContent = textarea.value.length);

  data =
    "<h5>User name: </h5>" +
    name +
    "<h5>User email: </h5>" +
    email +
    "<h5>Comment: </h5>" +
    comment +
    "<h5>Comment characters: </h5>" +
    count +
    " characters";

  document.getElementById("data").innerHTML = data;
}

const max = 140;
let textarea = document.querySelector("textarea");
let info = document.querySelector("#info");

let counter = (info.textContent = max - textarea.value.length);

textarea.addEventListener("input", function () {
  info.textContent = max - this.value.length;
});

textarea.addEventListener("input", warningAlert);

// character over limit alert
function warningAlert() {
  let warning;
  let count = document.getElementById("userComment").value.length;

  if (count > max) {
    (warning = "Please don't exceed the 140 character limit!"),
      (document.getElementById("userComment").style.color = "red");
    document.getElementById("userComment").style.border = "2px solid red";
  } else {
    warning = "";
    document.getElementById("userComment").style.color = "black";
    document.getElementById("userComment").style.border = "1px solid black";
  }
  document.getElementById("warningAlert").style.color = "red";
  document.getElementById("warningAlert").innerHTML = warning;

  console.log(warning);
  console.log(count);
  console.log(info);
}
