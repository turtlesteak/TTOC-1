const startYear = 2016;
const currentYear = new Date().getFullYear(); // gets the current year

const header = [`TankTrouble's largest competition for over ${currentYear - startYear + 1} years`];

const footer = [`&copy; TTOC Crew ${startYear} - ${currentYear}`];


document.getElementById("dynamic-subTitle").innerHTML = header;

document.getElementById("dynamic-footer").innerHTML = footer;