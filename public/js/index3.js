document.addEventListener("DOMContentLoaded", function() {
    
    const buttonClicked = localStorage.getItem('buttonClicked');
    localStorage.removeItem('buttonClicked');
    
    if (buttonClicked === 'true') {
        welcomePage();
    }
    
    function welcomePage() {
        //var frame1 = document.querySelector(".frame1");
        //var frame2 = document.querySelector(".frame2");
        var container = document.querySelector(".container");
        container.innerHTML = "<iframe src='welcome'></iframe>";
        var link = document.getElementById("style-sheet");
        link.setAttribute("href", "/css/styleW.css");
    }
});