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