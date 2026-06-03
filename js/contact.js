// فرم تماس با ما
const contactForm = document.getElementById('contactForm');
const contactSuccessMessage = document.getElementById('contactSuccessMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('contactName')?.value.trim();
        const phone = document.getElementById('contactPhone')?.value.trim();
        const message = document.getElementById('contactMessage')?.value.trim();

        if (!name || name.length < 3) {
            alert('لطفاً نام و نام خانوادگی خود را وارد کنید');
            return;
        }

        if (!phone || phone.length < 11) {
            alert('لطفاً شماره تماس معتبر وارد کنید');
            return;
        }

        if (!message || message.length < 10) {
            alert('لطفاً پیام خود را وارد کنید (حداقل ۱۰ کاراکتر)');
            return;
        }

        const submitBtn = contactForm.querySelector('.contact-submit');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> در حال ارسال...';
        submitBtn.disabled = true;

        setTimeout(() => {
            const formData = {
                name: name,
                phone: phone,
                email: document.getElementById('contactEmail')?.value.trim() || 'وارد نشده',
                subject: document.getElementById('contactSubject')?.value.trim() || 'بدون موضوع',
                message: message,
                date: new Date().toLocaleString('fa-IR')
            };
            console.log('پیام جدید:', formData);

            contactSuccessMessage.innerHTML = `
                        <i class="fas fa-check-circle"></i>
                        <p>✅ پیام شما با موفقیت ارسال شد!</p>
                        <p style="font-size: 0.8rem; margin-top: 5px;">${name} عزیز، کارشناسان ما به زودی با شما تماس می‌گیرند.</p>
                    `;
            contactSuccessMessage.style.display = 'block';
            contactForm.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;

            setTimeout(() => {
                contactSuccessMessage.style.display = 'none';
            }, 5000);
        }, 1500);
    });
}

// منوی موبایل
function initMobileMenu() {
    const burger = document.getElementById('burgerMenu');
    const navCollapse = document.getElementById('mainNavbar');
    if (burger && navCollapse) {
        burger.addEventListener('click', () => {
            navCollapse.classList.toggle('show');
        });
    }
}

document.addEventListener('DOMContentLoaded', initMobileMenu);