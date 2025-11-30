// Header Component
const headerHTML = `
<div class="container nav-container">
    <a href="index.html" class="logo">
        <!-- Placeholder for Logo Image -->
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M8 11h8"/><path d="M12 7v8"/></svg>
        ERS Limited
    </a>
    <div class="mobile-menu-btn" onclick="toggleMenu()">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
    </div>
    <nav>
        <ul class="nav-links" id="navLinks">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="clients.html">Clients</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </nav>
</div>
`;

// Footer Component
const footerHTML = `
<div class="container">
    <div class="footer-content">
        <div class="footer-col">
            <h3>ERS Limited</h3>
            <p>Providing top-notch logistics and humanitarian relief supplies across Kenya and beyond.</p>
        </div>
        <div class="footer-col">
            <h3>Quick Links</h3>
            <ul class="footer-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="contact.html">Contact Us</a></li>
            </ul>
        </div>
        <div class="footer-col">
            <h3>Contact Info</h3>
            <ul class="footer-links">
                <li>Nairobi, Kenya</li>
                <li>info@ers.co.ke</li>
                <li>+254 700 000 000</li>
            </ul>
        </div>
    </div>
    <div class="copyright">
        &copy; ${new Date().getFullYear()} Emergency Relief Supplies Limited. All Rights Reserved.
    </div>
</div>
`;

// Inject Header and Footer
document.addEventListener('DOMContentLoaded', () => {
    const headerElement = document.querySelector('header');
    const footerElement = document.querySelector('footer');

    if (headerElement) headerElement.innerHTML = headerHTML;
    if (footerElement) footerElement.innerHTML = footerHTML;

    // Highlight active link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

// Mobile Menu Toggle
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}
