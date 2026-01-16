// WhatsApp handler function
function openWhatsApp(message = '') {
    const phoneNumber = '5542988153287';
    const url = `https://web.whatsapp.com/send/?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Set current year in footer
document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Mobile menu toggle
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close menu when clicking on a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // WhatsApp links handler
    document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            openWhatsApp('Olá');
        });
    });

    // Contact form handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        const submitButton = contactForm.querySelector('a[href*="wa.me"]');
        if (submitButton) {
            submitButton.addEventListener('click', function(e) {
                e.preventDefault();
                
                const nameInput = contactForm.querySelector('input[type="text"]');
                const phoneInput = contactForm.querySelector('input[type="tel"]');
                const messageInput = contactForm.querySelector('textarea');
                
                const name = nameInput ? nameInput.value.trim() : '';
                const phone = phoneInput ? phoneInput.value.trim() : '';
                const message = messageInput ? messageInput.value.trim() : '';
                
                if (!name || !phone || !message) {
                    alert('Por favor, preencha todos os campos antes de enviar.');
                    return;
                }
                
                const whatsappMessage = `Olá! Meu nome é ${name}\n\nTelefone: ${phone}\n\nMensagem:\n${message}`;
                openWhatsApp(whatsappMessage);
            });
        }
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Image Modal Functions
function openImageModal(imageSrc, caption) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    
    modal.classList.add('active');
    modalImg.src = imageSrc;
    modalCaption.textContent = caption;
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeImageModal();
    }
});
