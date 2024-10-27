// I Ruushi Shah, 000884229 certify that Assignment 6 is my own work and I haven't shared my work with anyone else. I take the whole responsibility fo my own i.e., Assignment 6.

// This script is used to control the navigation links and the sections of the page.
// Initially, only the hero section is visible and the scrolling is disabled.
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('.section');
    const heroSection = document.querySelector('#hero');
    const body = document.body;

    // Show only the hero section initially and disable scrolling
    // Hide all other sections
    body.classList.add('no-scroll');
    heroSection.classList.add('active');

    // When a link is clicked, show the target section and disable scrolling for others
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            
            // Enable scrolling only for the selected section
            body.classList.remove('no-scroll');
            sections.forEach(section => {
                if (section.id === targetId) {
                    // Show only the target section content and disable scrolling for others
                    sections.forEach(sec => sec.style.display = 'none'); // Hide all sections
                    section.style.display = 'block'; // Display only the selected section
                    section.scrollIntoView({ behavior: 'smooth' });
                    body.classList.add('no-scroll'); // Reapply no-scroll to control access
                }
            });
        });
    });
});
// Here ends the JavaScript code.