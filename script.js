console.log("Connected Successfully.");


const logo = document.getElementById("dhakrAlrahmanLogo");
const navBarList = document.getElementById("navBarList");

logo.addEventListener("click", () => {
    if(navBarList.style.opacity === "0"){
        navBarList.style.opacity = "1";
    } else{
        navBarList.style.opacity = "0";
    }
});