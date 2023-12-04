
function register(){
    document.getElementById('button').onclick = function() {
        window.location.href = "http://127.0.0.1:5501/auth/html/registration.html";
    }
}

function callContact(){
    window.location.href ="http://127.0.0.1:5501/landingPages/html/contactus.html";
}

function callHome(){
    window.location.href ="http://127.0.0.1:5501/landingPages/html/landing_page.html";
}

function callAbout(){
    window.location.href ="http://127.0.0.1:5501/landingPages/html/aboutus.html";
}

function callLogout(){
    window.location.href ="http://127.0.0.1:5501/auth/html/login.html";
}