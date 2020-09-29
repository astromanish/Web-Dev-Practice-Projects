document.querySelectorAll(".card")[0].style.visibility = "hidden";
document.querySelectorAll(".card")[1].style.visibility = "hidden";

document.getElementById("lgth").addEventListener("input" , (e) =>{

    document.querySelectorAll(".card")[0].style.visibility = "visible";
    document.querySelectorAll(".card")[1].style.visibility = "visible";
    const meter = e.target.value;
    const foot = document.querySelector("#outputFoot").innerHTML = (meter*10)/3;
    document.querySelector("#outputInch").innerHTML = foot*12;

}); 