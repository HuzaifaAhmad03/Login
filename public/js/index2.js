function check () {
    var valid = true;

    var field = document.getElementById("ema");
    var error = document.getElementById("cmail");
    if (!field.checkValidity()){
      valid = false;
    
      error.textContent = "Please include an '@' in the email\r\n";
    } 
    else{
      error.textContent = "";
    }

    field = document.getElementById("adh");
    error = document.getElementById("cadhr");
    if (!field.checkValidity()){
      valid = false;
    
      error.textContent = "Adhaar Should have 12 digits\r\n";
    } 
    else{
      error.textContent = "";
    }
    field = document.getElementById("con");
    error = document.getElementById("ccont");
    if (!field.checkValidity()){
      valid = false;
    
      error.textContent = "Contact should start from digits 6,7,8,9 (10 digits)\r\n";
    } 
    else{
      error.textContent = "";
    }
return valid;
}

function doctorReg()
{
    document.querySelector(".field-head").innerText="Doctor Register";
    document.querySelectorAll(".inp-label")[0].innerText="Doctor Name";
    document.querySelectorAll(".inp-label")[4].innerText="Specialisation";
    document.querySelector("#app").setAttribute("type","text");
    document.querySelector("#fie").setAttribute("value","Doctor");
};
function adminReg()
{
    document.querySelector(".field-head").innerText="Admin Register";
    document.querySelectorAll(".inp-label")[0].innerText="Admin Name";
    document.querySelectorAll(".inp-label")[4].innerText="Department";
    document.querySelector("#app").setAttribute("type","text");
    document.querySelector("#fie").setAttribute("value","Admin");
};
function patientReg()
{
    document.querySelector(".field-head").innerText="Patient Register";
    document.querySelectorAll(".inp-label")[0].innerText="Patient Name";
    document.querySelectorAll(".inp-label")[4].innerText="Appointment";
    document.querySelector("#app").setAttribute("type","date");
    document.querySelector("#fie").setAttribute("value","Patient");
};


document.addEventListener('DOMContentLoaded', function () {
    const buttonClicked = localStorage.getItem('buttonClicked');
    localStorage.removeItem('buttonClicked'); // Remove the item from localStorage
    if (buttonClicked === 'doc') {
        doctorReg();
    } else if (buttonClicked === 'pat') {
        patientReg();
    } else if (buttonClicked === 'adm') {
        adminReg();
    }
});
