let date = new Date();
let year = date.getFullYear();
let modified = document.lastModified;

document.getElementById("currentyear").innerHTML = year
document.getElementById("lastmodified").innerHTML = `Last updated: ${modified}`;