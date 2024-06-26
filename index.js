let light = document.getElementById("lightSetting");
let logo = document.getElementById("logo")

light.addEventListener('click', function() {
    if(light.innerText == "dark_mode") {
        document.documentElement.style.setProperty("--navbgcolor", "rgb(22, 22, 22)");
        document.documentElement.style.setProperty("--navtxtcolor", "rgb(219, 219, 219)");
        document.documentElement.style.setProperty("--bgcolor", "rgb(35, 38, 42)");
        document.documentElement.style.setProperty("--infobgcolor", "rgba(196, 196, 196, 0.8)");
        document.documentElement.style.setProperty("--desctxtcolor", "rgb(80, 80, 80)");
        document.documentElement.style.setProperty("--outertxtcolor", "rgb(234, 234, 234)");
        logo.src = "/images/dark_logo.png";
        light.innerText = "light_mode";
        return;
    } else if(light.innerText == "light_mode") {
        document.documentElement.style.setProperty("--navbgcolor", "rgb(232, 232, 232)");
        document.documentElement.style.setProperty("--navtxtcolor", "rgb(139, 139, 139)");
        document.documentElement.style.setProperty("--bgcolor", "rgb(127, 141, 156)");
        document.documentElement.style.setProperty("--infobgcolor", "rgba(117, 117, 117, 0.8)");
        document.documentElement.style.setProperty("--desctxtcolor", "rgb(255, 255, 255)");
        document.documentElement.style.setProperty("--outertxtcolor", "rgb(50, 50, 50)");
        logo.src = "/images/light_logo.png";
        light.innerText = "dark_mode";
        return;
    }
});