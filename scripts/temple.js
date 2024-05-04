// const button = document.querySelector('#menu');
// const nav = document.querySelector('nav');

// button.addEventListener('click', () => {
// 	nav.classList.toggle('open');
// 	button.classList.toggle('open');
// });

function toggleMenu(){
    document.getElementById("menu-bar").classList.toggle("open");
    document.getElementById("nav-btn").classList.toggle("open");
}
const x = document.getElementById('nav-btn');
x.onclick = toggleMenu;

//function toggleMenu(){
//     document.getElementById("navbar").classList.toggle("open");
//     document.getElementById("nav-btn").classList.toggle("open");
// }

// const x = document.getElementById('nav-btn');   
// x.onclick = toggleMenu;