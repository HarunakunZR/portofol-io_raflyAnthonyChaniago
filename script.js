// Toggle menu navigasi di layar kecil (mobile)
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
});

// Tutup menu otomatis setelah memilih salah satu link (mobile)
mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
    });
});

// Tahun otomatis di footer
document.getElementById('year').textContent = new Date().getFullYear();
