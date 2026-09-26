const boton = document.getElementById("btnHabilidades");
const habilidades = document.getElementById("habilidades");

habilidades.style.display = "none";
 
boton.addEventListener("click", function () {
 
if (habilidades.style.display === "none") {
habilidades.style.display = "block";
} else {
habilidades.style.display = "none";
}
 
});
 
document.addEventListener("keydown", function (event) {
 
if (event.key === "b" || event.key === "B") {
document.body.style.backgroundColor = "lightblue";
}
 
if (event.key === "r" || event.key === "R") {
document.body.style.backgroundColor = "lightcoral";
}
 
if (event.key === "n" || event.key === "N") {
document.body.style.backgroundColor = "white";
}
 
});