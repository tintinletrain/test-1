// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Code commun pour toutes les pages
    commonFunctionality();

    // Fonctionnalités spécifiques à la page 'Past'
if (window.location.pathname.includes("Past.html")) {
    pastPageFunctionality();
}

// Fonctionnalités spécifiques à la page 'Present'
if (window.location.pathname.includes("Present.html")) {
    presentPageFunctionality();
}

// Fonctionnalités spécifiques à la page 'Future'
if (window.location.pathname.includes("Future.html")) {
    futurePageFunctionality();
}
});

function commonFunctionality() {
// Code pour les fonctionnalités communes à toutes les pages
console.log("Fonctionnalités communes chargées");
}

function pastPageFunctionality() {
// Code spécifique à la page 'Past'
console.log("Fonctionnalités de la page 'Past' activées");
}

function presentPageFunctionality() {
// Code spécifique à la page 'Present'
console.log("Fonctionnalités de la page 'Present' activées");
}

function futurePageFunctionality() {
// Code spécifique à la page 'Future'
console.log("Fonctionnalités de la page 'Future' activées");
}
