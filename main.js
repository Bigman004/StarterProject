var share = document.getElementsByClassName("share_img");
var menu = document.getElementsByClassName("hidden-menu");
var content = menu[0];
function show(){
    if(content.className == "hidden-menu")
        content.className = "show";
    else
        content.className = "hidden-menu"
}

share[0].addEventListener("click", show);