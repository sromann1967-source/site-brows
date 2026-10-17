document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
});

function openLightbox(card) {
    const img = card.querySelector('img');
    if (!img) return;
    document.getElementById('lightbox-img').src = img.src;
    document.getElementById('lightbox').classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = '';
}
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
});

const toTop = document.getElementById('toTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) toTop.classList.add('visible');
    else toTop.classList.remove('visible');
});
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function submitForm(e) {
    e.preventDefault();
    const form = e.target;
    const data = {
        name: form.name.value,
        phone: form.phone.value,
        service: form.service.value,
        time: form.time.value
    };
    alert(`Спасибо, ${data.name}!\n\nЯ свяжусь с вами по номеру ${data.phone} в течение часа.`);
    form.reset();
}

window.addEventListener('DOMContentLoaded', () => {
    const textEl = document.getElementById('preloaderText');
    const preloader = document.getElementById('preloader');
    if (!textEl || !preloader) return;
    const text = 'Анастасия Орлова';
    text.split('').forEach((char, i) => {
        const span = document.createElement('span');
        if (char === ' ') {
            span.className = 'space';
            span.textContent = ' ';
        } else {
            span.className = 'letter';
            span.textContent = char;
            const fromX = (Math.random() - 0.5) * 600;
            const rot = (Math.random() - 0.5) * 720;
            span.style.setProperty('--from-x', fromX + 'px');
            span.style.setProperty('--rot', rot + 'deg');
            span.style.animationDelay = (i * 0.15) + 's';
        }
        textEl.appendChild(span);
    });
    setTimeout(() => preloader.classList.add('hidden'), 4000);
});
