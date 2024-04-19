let light = document.getElementById("lightSetting");
let logo = document.getElementById("logo")

light.addEventListener('click', function() {
    if(light.innerText == "dark_mode") {
        document.documentElement.style.setProperty("--navbgcolor", "rgb(22, 22, 22)");
        document.documentElement.style.setProperty("--navtxtcolor", "rgb(219, 219, 219)");
        document.documentElement.style.setProperty("--bgcolor", "rgb(35, 38, 42)");
        logo.src = "/images/dark_logo.png";
        light.innerText = "light_mode";
        return;
    } else if(light.innerText == "light_mode") {
        document.documentElement.style.setProperty("--navbgcolor", "rgb(232, 232, 232)");
        document.documentElement.style.setProperty("--navtxtcolor", "rgb(139, 139, 139)");
        document.documentElement.style.setProperty("--bgcolor", "rgb(127, 141, 156)");
        logo.src = "/images/light_logo.png";
        light.innerText = "dark_mode";
        return;
    }
});