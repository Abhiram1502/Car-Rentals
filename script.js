
function myfunction(){
    document.getElementById("myDropdowns").classList.toggle("show")
}
window.onclick = function(event) {
    if (!event.target.matches("#drop-btn")) {
        var  dropdowns = document.getElementsByClassName("links");
        var i;
        for (i=0; i< dropdowns.length ;i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
let mybutton=document.getElementById("topBtn");
window.onscroll=function(){scrollFunction()};
function scrollFunction(){
    if(document.body.scrollTop> 30 || document.documentElement.scrollTop>30){
        mybutton.style.display="block";
    } else{
        mybutton.style.display="none";
    }
}
function topFunction(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
    document.getElementById("topBtn").style.transition="ease 5s";
} 
function dropOff(){
    var CheckBox = document.getElementById("myCheck");
    var dropInput = document.getElementById("drop-off");
    var pickUp = document.getElementById("pickup");
    if (CheckBox.checked == true){
        dropInput.style.display = "block";
        dropInput.style.marginLeft="20px";
        dropInput.style.width="37%";
        pickUp.style.width = "37%";
    }else {
        dropInput.style.display = "none";
        pickUp.style.width = "100%";
        dropInput.style.marginLeft="";
    }
}

window.addEventListener("load" , () => {
    document.querySelector(".preloader").classList.add("preloader--hidden");
});
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}
window.onclick = function(event) {
    if (event.target.classList.contains('signup-section')) {
        event.target.style.display = 'none';
    }else if (event.target.classList.contains('login-section')) {
        event.target.style.display = 'none';
    }
}
function popChange(present) {
    document.getElementById(present).style.display="none";
    if(present=='login-section'){
        document.getElementById('signup-section').style.display="block";
    }else if(present=='signup-section'){
        document.getElementById('login-section').style.display="block";
    }
}