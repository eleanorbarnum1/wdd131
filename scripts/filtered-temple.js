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

const container = document.getElementById('templeCards');
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Alabang Philippines",
        location: "Alabang, Philippines",
        dedicated: "2020, June, 4",
        area: 114205,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/alabang-philippines-temple/alabang-philippines-temple-8191-main.jpg"
    },
    {
        templeName: "Frankfurt Germany",
        location: "Frankfurt, Germany",
        dedicated: "1987, August, 30",
        area: 32895,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/frankfurt-germany-temple/frankfurt-germany-temple-38924-main.jpg"
    },
    {
        templeName: "Okinawa Japan",
        location: "Okinawa, Japan",
        dedicated: "2023, November,12 ",
        area: 12437,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/okinawa-japan-temple/okinawa-japan-temple-40845-main.jpg"
    },
  ];


function renderTemples(filteredTemples){
  document.querySelector("#templeCards").innerHTML = "";
  filteredTemples.forEach(obj => {

    const card = document.createElement('div');
    card.classList.add('temple-card');
    const img = document.createElement('img');
    img.src = obj.imageUrl;
    img.alt = obj.templeName;
    img.loading = "lazy";
    card.innerHTML += `<h3>${obj.templeName}</h3><p><b>Location: </b>${obj.location}<br><b>Dedicated:</b> ${obj.dedicated}<br><b> Area:</b> ${obj.area} sq ft</p>`
    card.appendChild(img);
  
    container.appendChild(card);
  });
}
    
//home
const home = document.querySelector("#home");
home.addEventListener("click",() =>{
  let home = temples.filter(temple => temple.location.includes("Utah"));
  renderTemples(home);
})
//old
const old = document.querySelector("#old");
old.addEventListener("click",() =>{
let old = temples.filter(temple => {
  const dedicatedDate = new Date(temple.dedicated);
  const dedicatedYear = dedicatedDate.getFullYear();
  return dedicatedYear < 1900;
});
  renderTemples(old);
});
//new
const newT = document.querySelector("#new");
newT.addEventListener("click",() =>{
let newT = temples.filter(temple => {
  const dedicatedDate = new Date(temple.dedicated);
  const dedicatedYear = dedicatedDate.getFullYear();
  return dedicatedYear > 2000;
});
  renderTemples(newT);
});
//large
const large = document.querySelector("#large");
large.addEventListener("click",() =>{
let large = temples.filter(temple => temple.area > 90000);
  renderTemples(large);
});
//small
const small = document.querySelector("#small");
small.addEventListener("click",() =>{
let small = temples.filter(temple => temple.area < 10000);
  renderTemples(small);
});


// const old = document.querySelector("#old");
// const new2 = document.querySelector("#new");
// const large = document.querySelector("#large");
// const small = document.querySelector("#small");
  