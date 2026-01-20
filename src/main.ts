import './style.css'

// Global Language State
let currentLang = 'EN';

const translations: any = {
    EN: {
        about_title: "Discovering <span class='gradient-text'>My Journey</span>",
        services_title: "Elite <span class='gradient-text'>Solutions</span>",
        projects_title: "Featured <span class='gradient-text'>Productions</span>",
        identity_title: "Professional <span class='gradient-text'>Identity</span>",
        exp_title: "Professional <span class='gradient-text'>Experience</span>",
        cert_title: "Verified <span class='gradient-text'>Excellence</span>",
        cta_title: "Ready to <span class='gradient-text'>Level Up</span>?",
        hero_available: "Available for Hire"
    },
    AR: {
        about_title: "اكتشف <span class='gradient-text'>رحلتي</span>",
        services_title: "حلول <span class='gradient-text'>متميزة</span>",
        projects_title: "مشاريع <span class='gradient-text'>مختارة</span>",
        identity_title: "الهوية <span class='gradient-text'>المهنية</span>",
        exp_title: "الخبرة <span class='gradient-text'>المهنية</span>",
        cert_title: "شهادات <span class='gradient-text'>التميز</span>",
        cta_title: "هل أنت مستعد <span class='gradient-text'>للانطلاق</span>؟",
        hero_available: "متاح للعمل الحر"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. Preloader Logic
    const preloader = document.getElementById('preloader');
    const loaderBar = document.getElementById('loader-bar');
    const loaderPercent = document.getElementById('loader-percent');
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 20;
        if (progress > 100) progress = 100;
        if (loaderBar) loaderBar.style.width = `${progress}%`;
        if (loaderPercent) loaderPercent.textContent = `${Math.round(progress)}%`;
        if (progress === 100) {
            clearInterval(interval);
            setTimeout(() => {
                if (preloader) preloader.classList.add('fade-out');
                setTimeout(type, 500);
            }, 500);
        }
    }, 80);

    // 1.1 Mobile Menu Logic
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');
    
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Optional: Animate hamburger to X
            const lines = mobileToggle.querySelectorAll('line');
            if (navLinks.classList.contains('active')) {
                lines[0].setAttribute('x1', '18'); lines[0].setAttribute('y1', '6'); lines[0].setAttribute('x2', '6'); lines[0].setAttribute('y2', '18');
                lines[1].style.opacity = '0';
                lines[2].setAttribute('x1', '6'); lines[2].setAttribute('y1', '6'); lines[2].setAttribute('x2', '18'); lines[2].setAttribute('y2', '18');
            } else {
                lines[0].setAttribute('x1', '3'); lines[0].setAttribute('y1', '6'); lines[0].setAttribute('x2', '21'); lines[0].setAttribute('y2', '6');
                lines[1].style.opacity = '1';
                lines[2].setAttribute('x1', '3'); lines[2].setAttribute('y1', '18'); lines[2].setAttribute('x2', '21'); lines[2].setAttribute('y2', '18');
            }
        });

        // Close menu when clicking links
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const lines = mobileToggle.querySelectorAll('line');
                lines[0].setAttribute('x1', '3'); lines[0].setAttribute('y1', '6'); lines[0].setAttribute('x2', '21'); lines[0].setAttribute('y2', '6');
                lines[1].style.opacity = '1';
                lines[2].setAttribute('x1', '3'); lines[2].setAttribute('y1', '18'); lines[2].setAttribute('x2', '21'); lines[2].setAttribute('y2', '18');
            });
        });
    }

    // 2. Typewriter Effect
    const textElement = document.getElementById('typewriter');
    const texts = ["Ahmed Elgmmal.", "Backend Architect.", "Laravel Expert.", "API Specialist."];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";

    function type() {
        if (count === texts.length) count = 0;
        currentText = texts[count];
        letter = currentText.slice(0, ++index);
        if (textElement) textElement.textContent = letter;
        if (letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(type, 3000);
        } else {
            setTimeout(type, 100);
        }
    }

    // 3. Contact Form Submission (EmailJS Integration)
    const contactForm = document.getElementById('contact-form') as HTMLFormElement;
    if (contactForm) {
        // Initialize EmailJS with your Public Key
        // @ts-ignore
        if (typeof emailjs !== 'undefined') {
            // @ts-ignore
            emailjs.init("8Js2j4egsN3a99kwg"); 
            console.log("EmailJS initialized successfully");
        } else {
            console.error("EmailJS SDK not found!");
        }

        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            if (btn) {
                const originalText = btn.textContent;
                btn.textContent = "Sending...";
                btn.disabled = true;

                // Set current time for the template
                const timeInput = document.getElementById('form-time') as HTMLInputElement;
                if (timeInput) timeInput.value = new Date().toLocaleString();

                try {
                    // @ts-ignore
                    const response = await emailjs.sendForm(
                        'service_ckhmjdw', 
                        'template_r3k4uib', 
                        contactForm
                    );
                    
                    console.log("EmailJS Response:", response);
                    
                    if (response.status === 200) {
                        btn.textContent = "Message Sent! ✓";
                        btn.style.background = "#059669";
                        contactForm.reset();
                    } else {
                        throw new Error(`Submit failed with status: ${response.status}`);
                    }
                } catch (err) {
                    console.error("EmailJS Error:", err);
                    btn.textContent = "Error! Try again";
                    btn.style.background = "#ef4444";
                }

                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.background = "var(--primary)";
                    btn.disabled = false;
                }, 4000);
            }
        });
    }
});

// 4. WhatsApp Widget Logic (Exposed to window)
(window as any).toggleWAWindow = () => {
    const waWindow = document.getElementById('wa-window');
    if (waWindow) waWindow.classList.toggle('active');
};

const waWindow = document.getElementById('wa-window');

(window as any).sendWAMessage = async () => {
    const nameInput = document.getElementById('wa-name-input') as HTMLInputElement;
    const phoneInput = document.getElementById('wa-phone-input') as HTMLInputElement;
    const msgInput = document.getElementById('wa-msg-input') as HTMLTextAreaElement;
    const btn = waWindow?.querySelector('.btn-primary') as HTMLButtonElement;
    
    if (!nameInput.value.trim() || !phoneInput.value.trim() || !msgInput.value.trim()) {
        alert("Please fill all fields");
        return;
    }

    if (btn) {
        const originalText = btn.textContent;
        btn.textContent = "Connecting...";
        btn.disabled = true;

        // Formulating a professional, pre-filled message
        const fullMessage = `*New Lead from Portfolio* 🚀\n\n👤 *Name:* ${nameInput.value}\n📱 *Phone:* ${phoneInput.value}\n💬 *Message:* ${msgInput.value}\n\n---`;
        const encodedMsg = encodeURIComponent(fullMessage);
        
        // Owner's WhatsApp Number
        const ownerPhone = "201275543298";
        const whatsappURL = `https://wa.me/${ownerPhone}?text=${encodedMsg}`;

        setTimeout(() => {
            // Open WhatsApp with pre-filled content
            window.open(whatsappURL, '_blank');
            
            btn.textContent = "Sent! ✓";
            btn.style.background = "#059669";
            
            // Clear inputs for clean state
            nameInput.value = "";
            phoneInput.value = "";
            msgInput.value = "";
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = "#25d366";
                btn.disabled = false;
                if (waWindow) waWindow.classList.remove('active');
            }, 3000);
        }, 800);
    }
};

// 5. Language Switcher Function (Exposed to window)
(window as any).toggleLanguage = () => {
    currentLang = currentLang === 'EN' ? 'AR' : 'EN';
    const switcher = document.getElementById('language-switcher');
    if (switcher) switcher.textContent = currentLang === 'EN' ? 'EN/AR' : 'AR/EN';
    
    // Update Section Titles based on language
    const mappings = [
        { id: 'about', key: 'about_title' },
        { id: 'services', key: 'services_title' },
        { id: 'projects', key: 'projects_title' },
        { id: 'identity', key: 'identity_title' },
        { id: 'experience', key: 'exp_title' },
        { id: 'certificates', key: 'cert_title' },
        { id: 'contact', key: 'cta_title' }
    ];

    mappings.forEach(m => {
        const section = document.getElementById(m.id);
        const title = section?.querySelector('h2');
        if (title) title.innerHTML = translations[currentLang][m.key];
    });

    // Update Hero Badge
    const heroBadge = document.querySelector('#hero h2');
    if (heroBadge) heroBadge.textContent = translations[currentLang].hero_available;

    document.documentElement.dir = currentLang === 'AR' ? 'rtl' : 'ltr';
    console.log(`Language switched to: ${currentLang}`);
};
