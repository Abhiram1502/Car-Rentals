
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
    document.getElementById("topBtn").style.transition="all 5s";
} 
function dropOff(){
    var CheckBox = document.getElementById("myCheck");
    var dropInput = document.getElementById("drop-off");
    var pickUp = document.getElementById("pickup");
    if (CheckBox.checked == true){
        dropInput.style.display = "block";
        pickUp.style.width = "47%";
    }else {
        dropInput.style.display = "none";
        pickUp.style.width = "";
    }
}

window.addEventListener("load" , () => {
    document.querySelector(".preloader").classList.add("preloader--hidden");
});