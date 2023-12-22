$(document).ready(function () {
    $('input:checkbox').click(function () {
        $('input:checkbox').not(this).prop('checked', false);
        const idOfBox = $(this).attr('id');
        localStorage.setItem('buttonClicked', idOfBox);
        const frame2 = parent.document.querySelector('.frame2 iframe');
        frame2.contentWindow.location.reload();
    });
});



function doctorReg()
{
    document.querySelector(".field-head").innerText="Doctor Login";
    document.querySelectorAll(".inp-label")[0].innerText="Doctor ID:";
    document.querySelectorAll(".inp-label")[1].innerText="Doctor Name:";
    document.querySelector("#fie").setAttribute("value","Doctor");
    
};
function adminReg()
{
    document.querySelector(".field-head").innerText="Admin Login";
    document.querySelectorAll(".inp-label")[0].innerText="Admin ID:";
    document.querySelectorAll(".inp-label")[1].innerText="Admin Name:";
    document.querySelector("#fie").setAttribute("value","Admin");
    
};
function patientReg()
{
    document.querySelector(".field-head").innerText="Patient Login";
    document.querySelectorAll(".inp-label")[0].innerText="Patient ID:";
    document.querySelectorAll(".inp-label")[1].innerText="Patient Name:";
    document.querySelector("#fie").setAttribute("value","Patient");
};




const checkboxes=document.querySelectorAll(".chkbox")
document.querySelectorAll(".chkbox").forEach(el => el.addEventListener("click",function(){
    const idOfBox=el.getAttribute("id");

    if(idOfBox=="doc"){
        doctorReg();
        localStorage.setItem('buttonClicked', 'doc');
        //window.location.href = './views/register';
    }
    else if(idOfBox=="pat"){
        patientReg();
        localStorage.setItem('buttonClicked', 'pat');
    }
    else if(idOfBox=="adm"){
        adminReg();
        localStorage.setItem('buttonClicked', 'adm');

    }
}));

