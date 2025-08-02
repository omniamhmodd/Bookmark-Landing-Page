
function showDiv(event, id, link) {
event.preventDefault();

const divs = document.querySelectorAll('.content');
divs.forEach(div => div.classList.add('hidden'));

document.getElementById(id).classList.remove('hidden');

const links = document.querySelectorAll('.nav a');
links.forEach(a => a.classList.remove('active'));

link.classList.add('active');
}

window.onload = function () {
const firstLink = document.querySelector('.nav a');
showDiv(new Event('click'), 'div1', firstLink);
};
document.querySelectorAll('.arrow').forEach(arrow => {
    arrow.addEventListener('click', function () {
    const para = this.parentElement.nextElementSibling;

    // Toggle class "hidden"
    para.classList.toggle('hidden');

    
    this.classList.toggle('rotated');
});
});
let mobileIcon = document.querySelector(".mobile")
let popupBox = document.querySelector(".popup")
let closeIcon = document.querySelector("#close")

if(mobileIcon){
    mobileIcon.addEventListener("click", ()=>{
        popupBox.classList.remove("hidden")
    })
}
if(closeIcon){
    closeIcon.addEventListener("click", ()=>{
        popupBox.classList.add("hidden")
    })
}