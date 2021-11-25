let navBar = document.querySelector("#navigation-bar-mobile");

function dropMenu(){
    if (navBar.style.display === "block"){
        navBar.style.display = "none";
    } else{
        navBar.style.display = "block"
    }
}