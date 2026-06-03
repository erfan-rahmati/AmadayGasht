const destinationsFullData = {
    1: {
        id: 1, title: "شیراز؛ شهر شعر و ادب", location: "شیراز", category: "تاریخی و فرهنگی",
        season: "بهار و پاییز", bestTime: "اردیبهشت تا خرداد", howToGet: "پرواز روزانه از تهران (۱.۵ ساعت)",
        fullDescription: "شیراز، شهر راز و نیاز، شهر شعر و ادب، شهر باغ‌های سرسبز...",
        attractions: ["تخت جمشید", "آرامگاه حافظ", "مسجد نصیرالملک", "باغ ارم", "دروازه قرآن"],
        gallery: ["assetss/Images/slider-1.jpg", "assetss/Images/slider-2.jpg",  "assetss/Images/slider-1.jpg"]
    },
    2: { id: 2, title: "اصفهان؛ نصف جهان", location: "اصفهان", category: "تاریخی و فرهنگی", season: "بهار و پاییز", bestTime: "فروردین تا خرداد", howToGet: "پرواز روزانه از تهران (۱ ساعت)", fullDescription: "اصفهان، نصف جهان، شهری با هنر و معماری بی‌نظیر...", attractions: ["میدان نقش جهان", "مسجد شیخ لطف الله", "پل سی و سه پل", "پل خواجو"], gallery: [] },
    3: { id: 3, title: "مازندران؛ بهشت ایران", location: "مازندران", category: "طبیعت گردی", season: "بهار و تابستان", bestTime: "اردیبهشت تا شهریور", howToGet: "اتوبوس از تهران (۳-۴ ساعت)", fullDescription: "مازندران، بهشت ایران، با جنگل‌های سرسبز...", attractions: ["جاده چالوس", "آبشار سنگ نو", "دریاچه ولشت"], gallery: [] },
    4: { id: 4, title: "کیش؛ مروارید خلیج فارس", location: "کیش", category: "دریایی و تفریحی", season: "پاییز و زمستان", bestTime: "آذر تا اسفند", howToGet: "پرواز روزانه از تهران (۱.۵ ساعت)", fullDescription: "جزیره کیش، مروارید خلیج فارس...", attractions: ["سواحل مرجانی", "کشتی یونانی", "شهر زیرزمینی کاریز"], gallery: [] },
    5: { id: 5, title: "اردبیل؛ سرزمین آب‌های گرم", location: "اردبیل", category: "آب درمانی", season: "بهار و تابستان", bestTime: "خرداد تا شهریور", howToGet: "پرواز از تهران (۱.۵ ساعت)", fullDescription: "اردبیل، سرزمین آب‌های گرم...", attractions: ["چشمه آب گرم سبلان", "دریاچه شورابیل", "بقعه شیخ صفی"], gallery: [] },
    6: { id: 6, title: "کاشان؛ شهر گل و قالی", location: "کاشان", category: "تاریخی و فرهنگی", season: "بهار و پاییز", bestTime: "فروردین و اردیبهشت", howToGet: "اتوبوس از تهران (۲.۵ ساعت)", fullDescription: "کاشان، شهر گل و قالی...", attractions: ["باغ فین", "خانه بروجردی‌ها", "کویر مرنجاب"], gallery: [] }
};

function getDestIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('id'));
}

function renderDestinationDetail() {
    const id = getDestIdFromUrl();
    const dest = destinationsFullData[id];
    const container = document.getElementById('destinationDetailContent');
    if (!dest) {
        container.innerHTML = `<div style="text-align:center; padding:50px;"><i class="fas fa-exclamation-triangle" style="font-size:3rem; color:rgba(55,121,255,0.85);"></i><p style="color:white;">مقصد مورد نظر یافت نشد.</p></div>`;
        return;
    }
    let galleryHtml = '';
    if (dest.gallery && dest.gallery.length) {
        dest.gallery.forEach(img => {
            galleryHtml += `<div class="gallery-item" onclick="openLightbox('${img}')"><div class="gallery-item-img"><img src="${img}" onerror="this.src=' "assetss/Images/slider-1.jpg"'"></div></div>`;
        });
    }
    let attractionsHtml = '';
    dest.attractions.forEach(att => {
        attractionsHtml += `<div class="attraction-item"><i class="fas fa-check-circle"></i><span>${att}</span></div>`;
    });
    container.innerHTML = `
                <div class="dest-detail-header">
                    <span class="dest-detail-category"><i class="fas fa-tag"></i> ${dest.category}</span>
                    <h1 class="dest-detail-title">${dest.title}</h1>
                    <div class="dest-detail-meta">
                        <span><i class="fas fa-map-marker-alt"></i> ${dest.location}</span>
                        <span><i class="fas fa-calendar-alt"></i> فصل مناسب: ${dest.season}</span>
                        <span><i class="fas fa-clock"></i> بهترین زمان: ${dest.bestTime}</span>
                    </div>
                </div>
                <div class="info-cards-grid">
                    <div class="info-card"><i class="fas fa-location-dot"></i><h4>موقعیت</h4><p>${dest.location}</p></div>
                    <div class="info-card"><i class="fas fa-thermometer-half"></i><h4>بهترین فصل</h4><p>${dest.season}</p></div>
                    <div class="info-card"><i class="fas fa-plane"></i><h4>راه دسترسی</h4><p>${dest.howToGet}</p></div>
                </div>
                <div class="dest-description"><h3><i class="fas fa-info-circle"></i> درباره مقصد</h3><p>${dest.fullDescription}</p></div>
                <h3 style="color:white;"><i class="fas fa-star"></i> جاهای دیدنی</h3>
                <div class="attractions-list">${attractionsHtml}</div>
                ${galleryHtml ? `<h3 style="color:white; margin-top:2rem;"><i class="fas fa-images"></i> گالری تصاویر</h3><div class="gallery-grid">${galleryHtml}</div>` : ''}
                <div class="dest-description" style="text-align:center; margin-top:2rem;">
                    <h3><i class="fas fa-calendar-check"></i> برنامه سفر به ${dest.location}</h3>
                    <p>برای رزرو تور و دریافت اطلاعات بیشتر با کارشناسان آمادای گشت تماس بگیرید.</p>
                    <button class="reserve-now-btn" style="margin-top:1rem;" onclick="alert('درخواست رزرو شما ثبت شد. کارشناسان با شما تماس می‌گیرند.')">درخواست رزرو</button>
                </div>
            `;
}

function openLightbox(imgSrc) {
    const modal = document.getElementById('lightboxModal');
    document.getElementById('lightboxImage').src = imgSrc;
    modal.classList.add('active');
}

document.getElementById('lightboxModal')?.addEventListener('click', function (e) {
    if (e.target === this || e.target.classList.contains('close-lightbox')) this.classList.remove('active');
});

renderDestinationDetail();