

const menuButton = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

// Mobile menu
if (menuButton && navLinks) {
    menuButton.addEventListener("click", function () {
        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");
        menuButton.setAttribute("aria-expanded", isOpen);
    });

    document.querySelectorAll(".nav-links a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
            menuButton.setAttribute("aria-expanded", "false");
        });
    });
}

// Display the current year
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Sukesh's email address
const emailAddress = "sukeshmaddy07@gmail.com";

const emailButton = document.getElementById("email-btn");
const contactNote = document.getElementById("contact-note");

// Configure the contact button
if (emailButton) {
    emailButton.href = "mailto:" + emailAddress;
}

if (contactNote) {
    contactNote.textContent = "Email: " + emailAddress;
}
