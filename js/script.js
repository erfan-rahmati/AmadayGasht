// ========== مسیر پایه تصاویر ==========
const imagePath = "assetss/Images/";

// ========== ۷ دکمه و ۷ اسلایدر مجزا ==========
const travelDestinations = [
    {
        id: "luxury_villa",
        title: "کمپینگ",
        icon: "fas fa-campground",
        slides: [
            { img: imagePath + "slider-1.jpg", title: "کمپینگ در طبیعت", desc: "تجربه کمپینگ حرفه‌ای در دل طبیعت" },
            { img: imagePath + "slider-2.jpg", title: "شب پرستاره", desc: "شب‌نشینی زیر آسمان پرستاره" },
            { img: imagePath + "slider-1.jpg", title: "آتش و همدلی", desc: "دور هم جمع شدن و ساخت خاطره" },
            { img: imagePath + "slider-2.jpg", title: "صبحانه در طبیعت", desc: "لذت صبحانه در دل کوهستان" }
        ]
    },
    {
        id: "sea_view",
        title: "قطار",
        icon: "fas fa-train",
        slides: [
            { img: imagePath + "slider-1.jpg", title: "سفر با قطار", desc: "تجربه سفری خاطره‌انگیز با قطار" },
            { img: imagePath + "slider-2.jpg", title: "مناظر بکر", desc: "تماشای طبیعت از پنجره قطار" },
            { img: imagePath + "slider-1.jpg", title: "خدمات عالی", desc: "امکانات رفاهی در طول مسیر" },
            { img: imagePath + "slider-2.jpg", title: "مقصد رویایی", desc: "رسیدن به مقصدی که همیشه آرزویش را داشتید" }
        ]
    },
    {
        id: "mountain",
        title: "هوایی",
        icon: "fas fa-plane",
        slides: [
            { img: imagePath + "slider-1.jpg", title: "پرواز راحت", desc: "سفر هوایی با بهترین خطوط" },
            { img: imagePath + "slider-2.jpg", title: "چشم‌انداز آسمان", desc: "منظره ابرها از بالا" },
            { img: imagePath + "slider-1.jpg", title: "خدمات پرواز", desc: "پذیرایی و خدمات عالی" },
            { img: imagePath + "slider-2.jpg", title: "فرود در مقصد", desc: "شروع یک ماجراجویی جدید" }
        ]
    },
    {
        id: "city_penthouse",
        title: "زمینی",
        icon: "fas fa-bus",
        slides: [
            { img: imagePath + "slider-1.jpg", title: "سفر جاده‌ای", desc: "لذت سفر با اتوبوس‌های مدرن" },
            { img: imagePath + "slider-2.jpg", title: "مناظر زیبا", desc: "تماشای جاده و طبیعت" },
            { img: imagePath + "slider-1.jpg", title: "توقفگاه‌های دلنشین", desc: "استراحت در بهترین مکان‌ها" },
            { img: imagePath + "slider-2.jpg", title: "رسیدن به مقصد", desc: "شروع یک خاطره جدید" }
        ]
    },
    {
        id: "desert",
        title: "همدان گردی",
        icon: "fas fa-map-marked-alt",
        slides: [
            { img: imagePath + "slider-1.jpg", title: "تاریخ کهن", desc: "بازدید از آثار تاریخی همدان" },
            { img: imagePath + "slider-2.jpg", title: "غار علیصدر", desc: "قایق‌سواری در بزرگترین غار آبی" },
            { img: imagePath + "slider-1.jpg", title: "آرامگاه بوعلی", desc: "بازدید از آرامگاه ابن سینا" },
            { img: imagePath + "slider-2.jpg", title: "تپه هگمتانه", desc: "بازمانده از تمدن مادها" }
        ]
    },
    {
        id: "garden",
        title: "هتل",
        icon: "fas fa-hotel",
        slides: [
            { img: imagePath + "slider-1.jpg", title: "اقامت لوکس", desc: "اتاق‌های مدرن و مجهز" },
            { img: imagePath + "slider-2.jpg", title: "رستوران عالی", desc: "غذاهای لذیذ بین‌المللی" },
            { img: imagePath + "slider-1.jpg", title: "استخر و اسپا", desc: "امکانات تفریحی و رفاهی" },
            { img: imagePath + "slider-2.jpg", title: "خدمات ۲۴ ساعته", desc: "پشتیبانی کامل در طول اقامت" }
        ]
    },
    {
        id: "historic_mansion",
        title: "بومگردی",
        icon: "fas fa-tree",
        slides: [
            { img: imagePath + "slider-1.jpg", title: "اقامت سنتی", desc: "تجربه زندگی در خانه‌های روستایی" },
            { img: imagePath + "slider-2.jpg", title: "غذای محلی", desc: "طعم واقعی غذاهای بومی" },
            { img: imagePath + "slider-1.jpg", title: "طبیعت بکر", desc: "هوای پاک و چشمه‌های زلال" },
            { img: imagePath + "slider-2.jpg", title: "مهمان‌نوازی", desc: "مهربانی مردم محلی" }
        ]
    }
];

// ========== متغیرهای سراسری ==========
let mainSwiper = null;
let currentActiveCardId = "luxury_villa";
let isUpdating = false;
let albumsSwiper = null;
let testimonialsSwiper = null;
let calendarSwiper = null;
let destSwiper = null;

// ========== توابع کمکی ==========
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function (m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

// ========== توابع اسلایدر اصلی ==========
function buildSlidesForDestination(destId) {
    const destination = travelDestinations.find(d => d.id === destId);
    if (!destination) return '<div class="swiper-slide">خطا در بارگذاری</div>';
    return destination.slides.map(slide => {
        let bgImage = slide.img && slide.img.trim() !== "" ? slide.img : "https://picsum.photos/id/104/1600/900";
        return `<div class="swiper-slide" data-dest-id="${destId}" style="background-image: linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.2)), url('${bgImage}'); background-size: cover; background-position: center;">
                    <div class="slide-overlay">
                        <h2>${escapeHtml(slide.title)}</h2>
                        <p>${escapeHtml(slide.desc)}</p>
                    </div>
                </div>`;
    }).join('');
}

function activateCardById(destId) {
    if (currentActiveCardId === destId) return;
    currentActiveCardId = destId;
    const allCards = document.querySelectorAll('.stats-card-btn');
    allCards.forEach(card => {
        const cardDestId = card.getAttribute('data-dest-id');
        if (cardDestId === destId) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
}

function rebuildSlider(destId) {
    if (isUpdating) return;
    isUpdating = true;
    const swiperWrapper = document.querySelector('.mainSwiper .swiper-wrapper');
    if (!swiperWrapper) {
        isUpdating = false;
        return;
    }
    const newSlidesHtml = buildSlidesForDestination(destId);
    swiperWrapper.innerHTML = newSlidesHtml;
    if (mainSwiper) {
        mainSwiper.destroy(true, true);
        mainSwiper = null;
    }
    setTimeout(() => {
        mainSwiper = new Swiper('.mainSwiper', {
            loop: true,
            speed: 600,
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
            pagination: { el: '.swiper-pagination', clickable: true },
            on: {
                slideChange: function () {
                    if (!isUpdating) {
                        const activeSlide = this.slides[this.activeIndex];
                        if (activeSlide) {
                            const slideDestId = activeSlide.getAttribute('data-dest-id');
                            if (slideDestId && slideDestId !== currentActiveCardId) {
                                activateCardById(slideDestId);
                            }
                        }
                    }
                }
            }
        });
        isUpdating = false;
    }, 100);
}

function renderCards() {
    const container = document.getElementById('dynamicCardsContainer');
    if (!container) return;
    let cardsHtml = '';
    travelDestinations.forEach(dest => {
        const isActive = (currentActiveCardId === dest.id);
        const activeClass = isActive ? 'active' : '';
        cardsHtml += `<div class="stats-card-btn ${activeClass}" data-dest-id="${dest.id}">
                        <i class="${dest.icon}"></i>
                        <span class="detail">${escapeHtml(dest.title)}</span>
                    </div>`;
    });
    container.innerHTML = cardsHtml;
    const allCards = document.querySelectorAll('.stats-card-btn');
    allCards.forEach(card => {
        card.addEventListener('click', function () {
            const destId = this.getAttribute('data-dest-id');
            if (!destId || destId === currentActiveCardId) return;
            activateCardById(destId);
            rebuildSlider(destId);
        });
    });
}

// ========== منوی موبایل ==========
function initMobileMenu() {
    const burger = document.getElementById('burgerMenu');
    const navCollapse = document.getElementById('mainNavbar');
    if (burger && navCollapse) {
        burger.addEventListener('click', () => {
            navCollapse.classList.toggle('show');
        });
    }
}

// ========== تقویم اصلی سایت ==========
const TODAY_YEAR = 1405;
const TODAY_MONTH = 2;
const TODAY_DAY = 2;
const monthNames = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"];
const toursData = {};

function getToursForDate(year, month, day) {
    const key = `${year}-${month}-${day}`;
    if (toursData[key]) return toursData[key];
    const tours = [];
    const seed = (year * 365 + month * 31 + day) % 7;
    if (seed < 2) {
        tours.push({ title: "تور طبیعت‌گردی دماوند", desc: "صبح تا عصر - ناهار و راهنما همراه", time: "۸:۰۰ صبح" });
        tours.push({ title: "تور کوهنوردی توچال", desc: "صعود به قله توچال با راهنمای حرفه‌ای", time: "۶:۰۰ صبح" });
    } else if (seed < 4) {
        tours.push({ title: "تور شهری تماشای تهران قدیم", desc: "بازدید از کاخ‌ها، موزه‌ها و بازار تاریخی", time: "۱۰:۰۰ صبح" });
        tours.push({ title: "تور موزه گردی", desc: "بازدید از موزه ملی ایران و موزه جواهرات", time: "۹:۰۰ صبح" });
    } else if (seed < 6) {
        tours.push({ title: "تور خرید مرکز خرید مدرن", desc: "با تخفیف‌های ویژه و راهنمای خرید حرفه‌ای", time: "۱۴:۰۰ بعدازظهر" });
        tours.push({ title: "تور غذا و رستوران", desc: "تجربه غذاهای محلی و بین‌المللی", time: "۱۹:۰۰ عصر" });
    } else {
        tours.push({ title: "تور شبانه رستوران‌های لوکس", desc: "شام در بهترین رستوران‌های شهر با منوی ویژه", time: "۲۰:۰۰ شب" });
        tours.push({ title: "تور فرهنگی تئاتر و کنسرت", desc: "بازدید از رویدادهای فرهنگی و هنری", time: "۱۸:۰۰ عصر" });
    }
    toursData[key] = tours;
    return tours;
}

function showToursForDate(year, month, day) {
    const modal = document.getElementById('tourModal');
    const modalDateTitle = document.getElementById('modalDateTitle');
    const modalToursList = document.getElementById('modalToursList');
    if (!modal) return;

    const dateStr = `${day} ${monthNames[month - 1]} ${year}`;
    modalDateTitle.innerHTML = `<i class="fas fa-calendar-day"></i> تورهای روز ${dateStr}`;
    let tours = getToursForDate(year, month, day);

    if (tours.length === 0) {
        modalToursList.innerHTML = `<div class="no-tours"><i class="fas fa-calendar-times"></i> هیچ توری برای این روز تعریف نشده است.<br>برای رزرو سفارشی با ما تماس بگیرید.</div>`;
    } else {
        let toursHtml = '';
        tours.forEach((tour) => {
            toursHtml += `<div class="tour-item"><div class="tour-title"><i class="fas fa-map-marked-alt"></i> ${escapeHtml(tour.title)}</div><div class="tour-desc"><i class="far fa-clock"></i> ${escapeHtml(tour.time)}<br>${escapeHtml(tour.desc)}</div><button class="reserve-btn reserve-tour-btn" data-tour="${escapeHtml(tour.title)}" data-date="${dateStr}"><i class="fas fa-check-circle"></i> درخواست رزرو</button></div>`;
        });
        modalToursList.innerHTML = toursHtml;
        document.querySelectorAll('.reserve-tour-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                alert(`✅ درخواست رزرو شما ثبت شد.\nکارشناسان ما به زودی با شما تماس می‌گیرند.`);
                modal.classList.remove('active');
            });
        });
    }
    modal.classList.add('active');
}

function getWeekDay(year, month, day) { return 3; }

function buildCalendarHTML(year, month) {
    const startOffset = 3;
    let monthDays = (month <= 6) ? 31 : ((month <= 11) ? 30 : 29);
    let daysArray = [];
    for (let i = startOffset - 1; i >= 0; i--) daysArray.push({ year, month: month - 1 || 12, day: 31 - i, isCurrentMonth: false });
    for (let i = 1; i <= monthDays; i++) daysArray.push({ year, month, day: i, isCurrentMonth: true });
    let remaining = 42 - daysArray.length;
    for (let i = 1; i <= remaining; i++) daysArray.push({ year, month: month + 1 || 1, day: i, isCurrentMonth: false });

    let daysHtml = '<div class="calendar-days">';
    daysArray.forEach(dayInfo => {
        let classes = 'calendar-day';
        if (!dayInfo.isCurrentMonth) classes += ' other-month';
        if (dayInfo.year === TODAY_YEAR && dayInfo.month === TODAY_MONTH && dayInfo.day === TODAY_DAY) classes += ' today';
        daysHtml += `<div class="${classes}" data-year="${dayInfo.year}" data-month="${dayInfo.month}" data-day="${dayInfo.day}" data-is-current="${dayInfo.isCurrentMonth}">${dayInfo.day}</div>`;
    });
    daysHtml += '</div>';
    return daysHtml;
}

function renderCurrentCalendar() {
    const swiperWrapper = document.getElementById('calendarSwiperWrapper');
    if (!swiperWrapper) return;

    let prevYear = currentViewYear, prevMonth = currentViewMonth - 1;
    if (prevMonth < 1) { prevMonth = 12; prevYear = currentViewYear - 1; }
    let nextYear = currentViewYear, nextMonth = currentViewMonth + 1;
    if (nextMonth > 12) { nextMonth = 1; nextYear = currentViewYear + 1; }

    const monthsData = [
        { year: prevYear, month: prevMonth, label: `${monthNames[prevMonth - 1]} ${prevYear}` },
        { year: currentViewYear, month: currentViewMonth, label: `${monthNames[currentViewMonth - 1]} ${currentViewYear}` },
        { year: nextYear, month: nextMonth, label: `${monthNames[nextMonth - 1]} ${nextYear}` }
    ];

    let slidesHtml = '';
    monthsData.forEach((data) => {
        let calendarHtml = buildCalendarHTML(data.year, data.month);
        slidesHtml += `<div class="swiper-slide"><div class="calendar-header" style="margin-bottom: 1rem;"><div class="current-month-year" style="font-size: 1.2rem;">${data.label}</div></div><div class="weekdays"><span>ش</span><span>ی</span><span>د</span><span>س</span><span>چ</span><span>پ</span><span>ج</span></div>${calendarHtml}</div>`;
    });
    swiperWrapper.innerHTML = slidesHtml;
    document.getElementById('currentMonthDisplay').innerHTML = `${monthNames[currentViewMonth - 1]} ${currentViewYear}`;

    setTimeout(() => {
        document.querySelectorAll('.calendar-day').forEach(dayEl => {
            const newDayEl = dayEl.cloneNode(true);
            dayEl.parentNode.replaceChild(newDayEl, dayEl);
            newDayEl.addEventListener('click', (e) => {
                if (newDayEl.getAttribute('data-is-current') !== 'true') return;
                const year = parseInt(newDayEl.getAttribute('data-year'));
                const month = parseInt(newDayEl.getAttribute('data-month'));
                const day = parseInt(newDayEl.getAttribute('data-day'));
                showToursForDate(year, month, day);
            });
        });
    }, 100);
}

let currentViewYear = TODAY_YEAR;
let currentViewMonth = TODAY_MONTH;

function initCalendarSwiper() {
    renderCurrentCalendar();
    if (calendarSwiper) {
        calendarSwiper.destroy(true, true);
        calendarSwiper = null;
    }

    calendarSwiper = new Swiper('.swiper-calendar', {
        slidesPerView: 1,
        spaceBetween: 0,
        effect: 'slide',
        allowTouchMove: true,
        autoHeight: false,
        on: {
            slideChange: function () {
                const activeIndex = this.activeIndex;
                if (activeIndex === 0) {
                    currentViewMonth--;
                    if (currentViewMonth < 1) {
                        currentViewMonth = 12;
                        currentViewYear--;
                    }
                    renderCurrentCalendar();
                    this.slideTo(1, 0);
                } else if (activeIndex === 2) {
                    currentViewMonth++;
                    if (currentViewMonth > 12) {
                        currentViewMonth = 1;
                        currentViewYear++;
                    }
                    renderCurrentCalendar();
                    this.slideTo(1, 0);
                }
                document.getElementById('currentMonthDisplay').innerHTML = `${monthNames[currentViewMonth - 1]} ${currentViewYear}`;
            },
            resize: function () {
                this.update();
            }
        }
    });
    calendarSwiper.slideTo(1, 0);

    // اضافه کردن resize event listener برای به‌روزرسانی
    window.addEventListener('resize', function () {
        if (calendarSwiper) {
            setTimeout(function () {
                calendarSwiper.update();
            }, 100);
        }
    });
}

// ========== آلبوم سفرها ==========
const albumsData = [
    { id: 1, title: "سفر به شمال", category: "طبیعت گردی", coverImage: imagePath + "slider-1.jpg", description: "سفر به بهشت گیلان، باران و طبیعت بکر", date: "اردیبهشت ۱۴۰۵" },
    { id: 2, title: "تور کویر مرنجاب", category: "ماجراجویی", coverImage: imagePath + "slider-2.jpg", description: "غروب آفتاب در دل کویر و شب‌نشینی زیر ستاره‌ها", date: "اسفند ۱۴۰۴" },
    { id: 3, title: "همدان گردی", category: "تاریخی و فرهنگی", coverImage: imagePath + "slider-1.jpg", description: "بازدید از آثار تاریخی و آرامگاه بوعلی سینا", date: "خرداد ۱۴۰۵" },
    { id: 4, title: "سفر به جنوب", category: "دریایی", coverImage: imagePath + "slider-2.jpg", description: "قشم و هرمز، جزایر رنگارنگ و سواحل بکر", date: "بهمن ۱۴۰۴" },
    { id: 5, title: "تور اردبیل", category: "آب درمانی", coverImage: imagePath + "slider-1.jpg", description: "سرعین و آب‌های گرم، دریاچه شورابیل", date: "تیر ۱۴۰۵" },
    { id: 6, title: "اصفهان گردی", category: "تاریخی و فرهنگی", coverImage: imagePath + "slider-2.jpg", description: "نصف جهان، میدان نقش جهان و پل‌های تاریخی", date: "مرداد ۱۴۰۵" },
    { id: 7, title: "شیراز گردی", category: "تاریخی و فرهنگی", coverImage: imagePath + "slider-1.jpg", description: "تخت جمشید، حافظیه و باغ‌های زیبا", date: "شهریور ۱۴۰۵" },
    { id: 8, title: "تور کیش", category: "دریایی", coverImage: imagePath + "slider-2.jpg", description: "جزیره مرجانی و تفریحات آبی", date: "مهر ۱۴۰۵" },
    { id: 9, title: "تور مشهد", category: "زیارتی", coverImage: imagePath + "slider-1.jpg", description: "حرم مطهر رضوی و آرامش معنوی", date: "آبان ۱۴۰۵" }
];

function renderAlbumsSlider() {
    const container = document.getElementById('albumsSwiperWrapper');
    if (!container) return;

    let html = '';
    albumsData.forEach(album => {
        const imgSrc = album.coverImage || 'https://picsum.photos/id/104/400/300';
        html += `
            <div class="swiper-slide">
                <div class="album-card" data-id="${album.id}">
                    <div class="album-image">
                        <img src="${imgSrc}" alt="${album.title}" onerror="this.src='https://picsum.photos/id/104/400/300'">
                        <div class="album-overlay">
                            <span class="album-category">${album.category}</span>
                        </div>
                    </div>
                    <div class="album-info">
                        <h3>${album.title}</h3>
                        <p>${album.description}</p>
                        <div class="album-meta">
                            <span class="album-date"><i class="fas fa-calendar-alt"></i> ${album.date}</span>
                            <span class="album-view">مشاهده آلبوم <i class="fas fa-arrow-left"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;

    document.querySelectorAll('.album-card').forEach(card => {
        card.addEventListener('click', function (e) {
            e.stopPropagation();
            const id = this.getAttribute('data-id');
            window.location.href = `album-detail.html?id=${id}`;
        });
    });
}

function initAlbumsSwiper() {
    if (albumsSwiper) albumsSwiper.destroy(true, true);
    albumsSwiper = new Swiper('.albumsSwiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: { delay: 5000, disableOnInteraction: false },
        pagination: { el: '.albums-pagination', clickable: true },
        navigation: { nextEl: '.album-next', prevEl: '.album-prev' },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 12,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
        },
    });
}

// ========== اسلایدر نظرات مشتریان ==========
function initTestimonialsSwiper() {
    const swiperElement = document.querySelector('.testimonialsSwiper');
    if (!swiperElement) return;

    if (testimonialsSwiper) {
        testimonialsSwiper.destroy(true, true);
        testimonialsSwiper = null;
    }

    testimonialsSwiper = new Swiper('.testimonialsSwiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.testimonials-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.testimonial-next',
            prevEl: '.testimonial-prev',
        },
    });
}

// ========== مقاصد گردشگری ==========
const destinationsData = [
    { id: 1, title: "شیراز؛ شهر شعر و ادب", city: "شیراز، استان فارس", location: "شیراز", category: "تاریخی و فرهنگی", coverImage: imagePath + "slider-1.jpg", shortDesc: "خاستگاه شعر و ادب فارسی، تخت جمشید و آرامگاه حافظ و سعدی", season: "بهار و پاییز", bestTime: "اردیبهشت تا خرداد و مهر تا آبان" },
    { id: 2, title: "اصفهان؛ نصف جهان", city: "اصفهان، استان اصفهان", location: "اصفهان", category: "تاریخی و فرهنگی", coverImage: imagePath + "slider-2.jpg", shortDesc: "نصف جهان، میدان نقش جهان، سی و سه پل و مساجد تاریخی", season: "بهار و پاییز", bestTime: "فروردین تا خرداد و شهریور تا آبان" },
    { id: 3, title: "مازندران؛ بهشت ایران", city: "مازندران، استان مازندران", location: "مازندران", category: "طبیعت گردی", coverImage: imagePath + "slider-1.jpg", shortDesc: "جنگل‌های سرسبز، سواحل خزر و آبشارهای دیدنی", season: "بهار و تابستان", bestTime: "اردیبهشت تا شهریور" },
    { id: 4, title: "کیش؛ مروارید خلیج فارس", city: "کیش، استان هرمزگان", location: "کیش", category: "دریایی و تفریحی", coverImage: imagePath + "slider-2.jpg", shortDesc: "جزیره مرجانی با تفریحات آبی و مراکز خرید مدرن", season: "پاییز و زمستان", bestTime: "آذر تا اسفند" },
    { id: 5, title: "اردبیل؛ سرزمین آب‌های گرم", city: "اردبیل، استان اردبیل", location: "اردبیل", category: "آب درمانی", coverImage: imagePath + "slider-1.jpg", shortDesc: "چشمه‌های آب گرم، دریاچه شورابیل و جنگل‌های فندقلو", season: "بهار و تابستان", bestTime: "خرداد تا شهریور" },
    { id: 6, title: "کاشان؛ شهر گل و قالی", city: "کاشان، استان اصفهان", location: "کاشان", category: "تاریخی و فرهنگی", coverImage: imagePath + "slider-2.jpg", shortDesc: "باغ‌های تاریخی، خانه‌های سنتی و کویر مرنجاب", season: "بهار و پاییز", bestTime: "فروردین و اردیبهشت" }
];

function renderDestinationsSlider() {
    const container = document.getElementById('destinationsSwiperWrapper');
    if (!container) return;

    let html = '';
    destinationsData.forEach(dest => {
        const imgSrc = dest.coverImage || 'https://picsum.photos/id/104/400/300';
        html += `
            <div class="swiper-slide">
                <div class="dest-card" data-id="${dest.id}">
                    <div class="dest-image">
                        <img src="${imgSrc}" alt="${dest.title}" onerror="this.src='https://picsum.photos/id/104/400/300'">
                        <div class="dest-overlay">
                            <span class="dest-location"><i class="fas fa-map-marker-alt"></i> ${dest.location}</span>
                        </div>
                    </div>
                    <div class="dest-info">
                        <h3>${dest.title}</h3>
                        <p>${dest.shortDesc}</p>
                        <div class="dest-meta">
                            <span class="dest-city"><i class="fas fa-city"></i> ${dest.city}</span>
                            <span class="dest-view">مشاهده جزئیات <i class="fas fa-arrow-left"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;

    document.querySelectorAll('.dest-card').forEach(card => {
        card.addEventListener('click', function (e) {
            e.stopPropagation();
            const id = this.getAttribute('data-id');
            window.location.href = `destination-detail.html?id=${id}`;
        });
    });
}

function initDestinationsSwiper() {
    if (destSwiper) destSwiper.destroy(true, true);
    destSwiper = new Swiper('.destSwiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: { delay: 5000, disableOnInteraction: false },
        pagination: { el: '.dest-pagination', clickable: true },
        navigation: { nextEl: '.dest-btn-next', prevEl: '.dest-btn-prev' },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 12,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
        },
    });
}

// ========== دانستنی و ملزومات سفر ==========
function initTravelTips() {
    const tabBtns = document.querySelectorAll('.tips-tab-btn');
    const contentItems = document.querySelectorAll('.tips-content-item');
    if (!tabBtns.length) return;
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const tabId = this.getAttribute('data-tab');
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            contentItems.forEach(item => item.classList.remove('active'));
            const targetContent = document.querySelector(`.tips-content-item[data-content="${tabId}"]`);
            if (targetContent) targetContent.classList.add('active');
        });
    });
}

// ========== پشتیبانی و تماس ==========
function initSupportForm() {
    const form = document.getElementById('supportForm');
    if (!form) return;
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const fullName = document.getElementById('fullName')?.value.trim();
        const phoneNumber = document.getElementById('phoneNumber')?.value.trim();
        if (!fullName || fullName.length < 3) { alert('لطفاً نام و نام خانوادگی خود را وارد کنید'); return; }
        if (!phoneNumber || phoneNumber.length < 11) { alert('لطفاً شماره تماس معتبر وارد کنید'); return; }
        alert(`✅ درخواست شما ثبت شد!\n${fullName} عزیز\nکارشناسان ما به زودی با شما تماس می‌گیرند.`);
        form.reset();
    });
}

// ========== تور اختصاصی ==========
function initCustomTourForm() {
    const form = document.getElementById('customTourForm');
    if (!form) return;
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const fullName = document.getElementById('tourFullName')?.value.trim();
        const phone = document.getElementById('tourPhone')?.value.trim();
        const startDate = document.getElementById('tourStartDate')?.value.trim();
        const endDate = document.getElementById('tourEndDate')?.value.trim();
        if (!fullName || fullName.length < 3) { alert('لطفاً نام و نام خانوادگی خود را وارد کنید'); return; }
        if (!phone || phone.length < 11) { alert('لطفاً شماره تماس معتبر وارد کنید'); return; }
        if (!startDate) { alert('لطفاً تاریخ شروع سفر را انتخاب کنید'); return; }
        if (!endDate) { alert('لطفاً تاریخ پایان سفر را انتخاب کنید'); return; }
        alert(`✅ درخواست تور اختصاصی شما ثبت شد!\n${fullName} عزیز\nتاریخ: ${startDate} تا ${endDate}\nکارشناسان ما به زودی با شما تماس می‌گیرند.`);
        form.reset();
    });
}

// ========== استایل گرید ==========
if (!document.querySelector('#albums-grid-style')) {
    const style = document.createElement('style');
    style.id = 'albums-grid-style';
    style.textContent = `.albums-slide-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; padding: 0.5rem; }
        @media (max-width: 992px) { .albums-slide-grid { grid-template-columns: repeat(2, 1fr); gap: 1rem; } }
        @media (max-width: 576px) { .albums-slide-grid { grid-template-columns: 1fr; } }
        .dest-slide-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; padding: 0.5rem; }
        @media (max-width: 992px) { .dest-slide-grid { grid-template-columns: repeat(2, 1fr); gap: 1rem; } }
        @media (max-width: 576px) { .dest-slide-grid { grid-template-columns: 1fr; } }`;
    document.head.appendChild(style);
}

// ==================== تقویم شمسی برای تور اختصاصی ====================
let currentPickerType = 'start';
let selectedPickerDate = null;
let pickerCurrentYear = 1405;
let pickerCurrentMonth = 2; // اردیبهشت

const persianMonths = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"];

function getDaysInMonth(year, month) {
    if (month <= 6) return 31;
    if (month <= 11) return 30;
    const isLeap = (year % 33 === 1 || year % 33 === 5 || year % 33 === 9 || year % 33 === 13 ||
        year % 33 === 17 || year % 33 === 22 || year % 33 === 26 || year % 33 === 30);
    return isLeap ? 30 : 29;
}

function openDatepicker(type) {
    currentPickerType = type;
    selectedPickerDate = null;
    pickerCurrentYear = 1405;
    pickerCurrentMonth = 2;
    renderDatepicker();
    document.getElementById('datepickerModal').classList.add('active');
}

function closeDatepicker() {
    document.getElementById('datepickerModal').classList.remove('active');
}

function renderDatepicker() {
    const monthYearDiv = document.getElementById('datepickerMonthYear');
    const daysDiv = document.getElementById('datepickerDays');
    if (!monthYearDiv || !daysDiv) return;

    monthYearDiv.innerHTML = `${persianMonths[pickerCurrentMonth - 1]} ${pickerCurrentYear}`;

    const daysInMonth = getDaysInMonth(pickerCurrentYear, pickerCurrentMonth);
    // محاسبه روز اول ماه (شنبه = 0)
    const firstDay = 3; // مقدار تخمینی

    let html = '';

    // روزهای ماه قبل
    const prevMonthDays = getDaysInMonth(pickerCurrentYear, pickerCurrentMonth - 1);
    for (let i = firstDay - 1; i >= 0; i--) {
        html += `<div class="datepicker-day other-month">${prevMonthDays - i}</div>`;
    }

    // روزهای ماه جاری
    for (let i = 1; i <= daysInMonth; i++) {
        const isSelected = (selectedPickerDate && selectedPickerDate.day === i);
        html += `<div class="datepicker-day ${isSelected ? 'selected' : ''}" data-day="${i}">${i}</div>`;
    }

    // روزهای ماه بعد
    const remaining = 42 - (firstDay + daysInMonth);
    for (let i = 1; i <= remaining; i++) {
        html += `<div class="datepicker-day other-month">${i}</div>`;
    }

    daysDiv.innerHTML = html;

    // اضافه کردن رویداد کلیک به روزها
    document.querySelectorAll('.datepicker-day:not(.other-month)').forEach(dayEl => {
        dayEl.removeEventListener('click', handleDayClick);
        dayEl.addEventListener('click', handleDayClick);
    });
}

function handleDayClick(e) {
    const dayEl = e.currentTarget;
    document.querySelectorAll('.datepicker-day.selected').forEach(el => el.classList.remove('selected'));
    dayEl.classList.add('selected');
    selectedPickerDate = {
        year: pickerCurrentYear,
        month: pickerCurrentMonth,
        day: parseInt(dayEl.getAttribute('data-day'))
    };
}

function confirmDateSelection() {
    if (selectedPickerDate) {
        const dateStr = `${selectedPickerDate.day} ${persianMonths[selectedPickerDate.month - 1]} ${selectedPickerDate.year}`;
        if (currentPickerType === 'start') {
            document.getElementById('tourStartDate').value = dateStr;
        } else {
            document.getElementById('tourEndDate').value = dateStr;
        }
    }
    closeDatepicker();
}

// ناوبری تقویم
function initDatepickerNavigation() {
    const prevBtn = document.getElementById('datepickerPrev');
    const nextBtn = document.getElementById('datepickerNext');

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            pickerCurrentMonth--;
            if (pickerCurrentMonth < 1) {
                pickerCurrentMonth = 12;
                pickerCurrentYear--;
            }
            renderDatepicker();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            pickerCurrentMonth++;
            if (pickerCurrentMonth > 12) {
                pickerCurrentMonth = 1;
                pickerCurrentYear++;
            }
            renderDatepicker();
        });
    }
}

// اضافه کردن به DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
    initDatepickerNavigation();
});

// ========== مقداردهی اولیه ==========
document.addEventListener('DOMContentLoaded', function () {
    renderCards();
    rebuildSlider(currentActiveCardId);
    initMobileMenu();
    initCalendarSwiper();
    renderAlbumsSlider();
    renderDestinationsSlider();
    initTravelTips();
    initSupportForm();
    initCustomTourForm();

    setTimeout(() => {
        initAlbumsSwiper();
        initTestimonialsSwiper();
        initDestinationsSwiper();
    }, 200);

    document.querySelector('.btn-reserve')?.addEventListener('click', (e) => {
        e.preventDefault();
        alert('فرم رزرو آنلاین به زودی فعال می‌شود.');
    });

    document.getElementById('prevMonthBtn')?.addEventListener('click', () => calendarSwiper?.slidePrev());
    document.getElementById('nextMonthBtn')?.addEventListener('click', () => calendarSwiper?.slideNext());
    document.getElementById('closeModalBtn')?.addEventListener('click', () => document.getElementById('tourModal')?.classList.remove('active'));
    document.getElementById('tourModal')?.addEventListener('click', (e) => {
        if (e.target === document.getElementById('tourModal')) document.getElementById('tourModal')?.classList.remove('active');
    });
});