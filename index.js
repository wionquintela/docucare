function validateForm() {
  const form = document.getElementById("authForm");

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const userName = form.userName.value.trim();
    const password = form.password.value.trim();
    const verifiedID = form.verifiedID.value.trim();

    if(userName == "admin" && password == "adminPass" && verifiedID == "0001-A") {
      alert(`Welcome, admin ${userName}`);
      window.location.href = "mainMenu.html";
    } else if (userName == "staff" && password == "staffPass" && verifiedID == "0001-S") {
      alert(`welcome, staff ${userName}`);
      window.location.href = "mainMenu.html";
    } else if (userName == "doctor" && password == "doctorPass" && verifiedID == "0001-D") {
      alert( `Welcome, doctor ${doctor}`);
      window.location.href = "mainMenu.html";
    } else {
      alert("Sorry the user does not exist");
    }
  })
}

validateForm();

document.getElementById("userGreet").innerHTML = `Welcome, ${userName}`