// --------------------------------------------------------------------------------------------------------------------

function notify(msg) {
  Toastify({
    text: msg,
    duration: 2000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to left, #808080, #000000)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}
// ---------------------------------------------------------------------------------------------------------------------------------------

function Clear() {
  document.getElementById("outputbox").innerHTML = "";
}

// ---------------------------------------------------------------------------------------------------------------------------------------

function ifElse() {
  let now = new Date();
  // console.log(now);
  let today = now.getDay();
  // console.log(today);
  if (today === 0) {
    notify("It's Sunday");
  } else if (today === 1) {
    notify("It's Monday");
  } else if (today === 2) {
    notify("It's Tuesday");
  } else if (today === 5) {
    notify("It's Friday");
  } else {
    notify("Its some other Day");
  }
}

// ---------------------------------------------------------------------------------------------------------------------------------------

function askname() {
  do {
    var name = prompt("What is Your Name !");
  } while (!name || name < 3);
  name = name.trim();
  console.log(name);
  outputbox.innerHTML = name;
}

// ---------------------------------------------------------------------------------------------------------------------------------------

function Switch() {
  let now = new Date();
  // console.log(now);
  let today = now.getDay();
  // console.log(today);
  switch (today) {
    case 0:
    case 6:
      notify("It's Weekend");
      break;
    case 1:
      notify("Its Monday");
      break;
    case 2:
      notify("Its Tuesday");
      break;
    case 3:
      notify("Its Wednesday");
      break;
    default:
      notify("Its Some Other Day !");
  }
}

// --------------------------------------------------------------------------------------------------------------------------------------
