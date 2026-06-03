// ========== داده کامل آلبوم‌ها با تمام جزئیات ==========
const albumsFullData = {
    1: {
        id: 1,
        title: "سفر به شمال؛ بهشت گیلان",
        category: "طبیعت گردی",
        coverImage: "assetss/Images/slider-1.jpg",
        shortDesc: "سفر به بهشت گیلان، باران و طبیعت بکر، تجربه‌ای فراموش‌نشدنی",
        date: "اردیبهشت ۱۴۰۵",
        location: "گیلان، ماسوله",
        duration: "۳ روز و ۲ شب",
        price: "۲,۵۰۰,۰۰۰ تومان",
        groupSize: "۱۲ نفر",
        season: "بهار",
        bestTime: "اوایل اردیبهشت تا اواخر خرداد",
        fullDescription: "سفر به شمال ایران همیشه یکی از محبوب‌ترین مقاصد گردشگری بوده است. در این سفر ۳ روزه، از جاده زیبای اسالم به خلخال گذشتیم، یکی از دیدنی‌ترین جاده‌های ایران که در میان ابر و جنگل پیچیده است. در ماسوله قدم زدیم، روستای پلکانی با معماری منحصر به فرد که قدمت آن به بیش از ۸۰۰ سال می‌رسد. از چایکاری‌های لاهیجان دیدن کردیم و طعم چای تازه را چشیدیم. اقامت در یک کلبه چوبی با چشم‌انداز جنگل، شب‌نشینی دور آتش و پیاده‌روی در دل طبیعت از خاطرات به‌یادماندنی این سفر بود. غذای محلی شامل ماهی دودی، میرزا قاسمی و اناربیج از لذیذترین غذاهایی بود که در این سفر تجربه کردیم. بازدید از آبشارهای دیدنی و قدم زدن در دل جنگل‌های هیرکانی با درختان هزار ساله، لحظاتی فراموش‌نشدنی را برای ما رقم زد.",
        gallery: [
            { img: "assetss/Images/slider-1.jpg", title: "منظره ابرهای پایین", desc: "ارتفاعات ماسوله با دریای ابر" },
            { img: "assetss/Images/slider-2.jpg", title: "بازار سنتی", desc: "بازار محلی و صنایع دستی شمال" },
            { img: "assetss/Images/slider-1.jpg", title: "چای کاری", desc: "باغات چای در دل ابر" },
            { img: "assetss/Images/slider-2.jpg", title: "آبشار", desc: "صدای آب و آرامش در دل جنگل" },
            { img: "assetss/Images/slider-1.jpg", title: "جاده اسالم به خلخال", desc: "یکی از زیباترین جاده‌های ایران" },
            { img: "assetss/Images/slider-2.jpg", title: "ماسوله", desc: "شهر پلکانی تاریخ" }
        ]
    },
    2: {
        id: 2,
        title: "تور کویر مرنجاب؛ شب زیر ستاره‌ها",
        category: "ماجراجویی",
        coverImage: "assetss/Images/slider-2.jpg",
        shortDesc: "غروب آفتاب در دل کویر، شب‌نشینی زیر ستاره‌ها و سافاری هیجان‌انگیز",
        date: "اسفند ۱۴۰۴",
        location: "کاشان، مرنجاب",
        duration: "۲ روز و ۱ شب",
        price: "۱,۸۰۰,۰۰۰ تومان",
        groupSize: "۱۵ نفر",
        season: "زمستان و اوایل بهار",
        bestTime: "بهمن تا اواخر فروردین",
        fullDescription: "تور کویر مرنجاب یک تجربه فراموش‌نشدنی از سفر به دل کویر بود. از رانندگی هیجان‌انگیز روی تپه‌های شنی گرفته تا شب‌نشینی زیر آسمان پرستاره کویر. شام سنتی در کاروانسرای تاریخی مرنجاب که متعلق به دوره صفویه است و تماشای طلوع آفتاب از بلندی‌های کویر، لحظاتی بودند که هیچ‌گاه فراموش نمی‌شوند. کویر مرنجاب با تپه‌های شنی بلند و دریاچه نمک، یکی از زیباترین مناطق کویری ایران است. در این سفر از دریاچه نمک و پناهگاه حیات وحش نیز دیدن کردیم و شاهد زندگی آهوان و روباه‌های شنی بودیم. سافاری با ماشین‌های آفرود در دل تپه‌های شنی، یکی از هیجان‌انگیزترین بخش‌های این سفر بود.",
        gallery: [
            { img: "assetss/Images/slider-1.jpg", title: "غروب کویر", desc: "طلوع و غروب در دل کویر" },
            { img: "assetss/Images/slider-2.jpg", title: "شب پرستاره", desc: "آسمان شب کویر با هزاران ستاره" },
            { img: "assetss/Images/slider-1.jpg", title: "سافاری", desc: "سافاری هیجان‌انگیز در دل کویر" },
            { img: "assetss/Images/slider-2.jpg", title: "کاروانسرا", desc: "کاروانسرای تاریخی مرنجاب" },
            { img: "assetss/Images/slider-1.jpg", title: "دریاچه نمک", desc: "مناظر بکر دریاچه نمک" },
            { img: "assetss/Images/slider-2.jpg", title: "تپه‌های شنی", desc: "تپه‌های شنی مرنجاب" }
        ]
    },
    3: {
        id: 3,
        title: "همدان گردی؛ قدم در تاریخ کهن",
        category: "تاریخی و فرهنگی",
        coverImage: "assetss/Images/slider-1.jpg",
        shortDesc: "بازدید از آثار تاریخی و آرامگاه بوعلی سینا، طعم تاریخ در دیار هگمتانه",
        date: "خرداد ۱۴۰۵",
        location: "همدان",
        duration: "۲ روز و ۱ شب",
        price: "۱,۵۰۰,۰۰۰ تومان",
        groupSize: "۲۰ نفر",
        season: "بهار و تابستان",
        bestTime: "اردیبهشت تا شهریور",
        fullDescription: "همدان با تاریخ کهن و آثار باستانی‌اش یکی از بهترین مقاصد سفرهای فرهنگی و تاریخی است. در این تور ۲ روزه از گنج‌نامه (کتیبه‌های داریوش بزرگ)، آرامگاه بوعلی سینا (پزشک و فیلسوف بزرگ ایرانی)، کلیسای آنجلی (کلیسای تاریخی ارامنه) و تپه هگمتانه (پایتخت تابستانی هخامنشیان) بازدید کردیم. قایق‌سواری در غار علیصدر (بزرگترین غار آبی جهان) هم تجربه‌ای بی‌نظیر بود. اقامت در هتل سنتی و طعم غذاهای محلی شامل دیزی سنگی و کباب همدانی، این سفر را کامل کرد. شهرداری همدان با نورپردازی زیبای شبانه، فضای دلنشینی را برای گردشگران ایجاد کرده است.",
        gallery: [
            { img: "assetss/Images/slider-2.jpg", title: "گنج‌نامه", desc: "کتیبه‌های تاریخی داریوش بزرگ" },
            { img: "assetss/Images/slider-1.jpg", title: "آرامگاه بوعلی", desc: "آرامگاه ابن سینا" },
            { img: "assetss/Images/slider-2.jpg", title: "غار علیصدر", desc: "قایق‌سواری در بزرگترین غار آبی جهان" },
            { img: "assetss/Images/slider-1.jpg", title: "تپه هگمتانه", desc: "بازمانده از تمدن مادها" },
            { img: "assetss/Images/slider-2.jpg", title: "کلیسای آنجلی", desc: "کلیسای تاریخی ارامنه" },
            { img: "assetss/Images/slider-1.jpg", title: "بازار قدیمی", desc: "بازار سنتی همدان" }
        ]
    }
};

function getAlbumIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    console.log('آلبوم ID دریافت شده:', id);
    return id ? parseInt(id) : null;
}

function openLightbox(imgSrc) {
    const modal = document.getElementById('lightboxModal');
    const img = document.getElementById('lightboxImage');
    img.src = imgSrc;
    modal.classList.add('active');
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function (m) {
        return m === '&' ? '&amp;' : (m === '<' ? '&lt;' : '&gt;');
    });
}

function renderAlbumDetail() {
    const albumId = getAlbumIdFromUrl();
    const container = document.getElementById('albumDetailContent');

    console.log('آلبوم‌های موجود:', Object.keys(albumsFullData));
    console.log('آلبوم درخواستی:', albumId);

    if (!albumId || !albumsFullData[albumId]) {
        container.innerHTML = `
                    <div style="text-align: center; padding: 60px 20px; background: #141b24; border-radius: 28px;">
                        <i class="fas fa-exclamation-triangle" style="font-size: 4rem; color: rgba(55,121,255,0.85);"></i>
                        <h2 style="color: #ffffff; margin: 20px 0;">آلبوم مورد نظر یافت نشد!</h2>
                        <p style="color: #9aa9b8; margin-bottom: 30px;">لطفاً از صفحه اصلی آلبوم مورد نظر خود را انتخاب کنید.</p>
                        <a href="index.html" class="reserve-now-btn" style="display: inline-block; text-decoration: none;">بازگشت به صفحه اصلی</a>
                    </div>
                `;
        return;
    }

    const album = albumsFullData[albumId];

    let galleryHtml = '';
    album.gallery.forEach((item, index) => {
        const imgSrc = item.img || 'https://picsum.photos/id/104/400/300';
        galleryHtml += `
                    <div class="gallery-item" onclick="openLightbox('${imgSrc}')">
                        <div class="gallery-item-img">
                            <img src="${imgSrc}" alt="${item.title}" onerror="this.src='https://picsum.photos/id/104/400/300'">
                        </div>
                        <div class="gallery-item-info">
                            <h4><i class="fas fa-camera"></i> ${escapeHtml(item.title)}</h4>
                            <p>${escapeHtml(item.desc)}</p>
                        </div>
                    </div>
                `;
    });

    container.innerHTML = `
                <div class="album-detail-header">
                    <span class="album-detail-category"><i class="fas fa-tag"></i> ${escapeHtml(album.category)}</span>
                    <h1 class="album-detail-title">${escapeHtml(album.title)}</h1>
                    <div class="album-detail-meta">
                        <span><i class="fas fa-calendar-alt"></i> ${album.date}</span>
                        <span><i class="fas fa-map-marker-alt"></i> ${escapeHtml(album.location)}</span>
                        <span><i class="fas fa-clock"></i> ${album.duration}</span>
                        <span><i class="fas fa-users"></i> ${album.groupSize}</span>
                        <span><i class="fas fa-thermometer-half"></i> ${album.season}</span>
                    </div>
                </div>
                
                <div class="info-cards-grid">
                    <div class="info-card"><i class="fas fa-ticket-alt"></i><h4>قیمت تور</h4><p>${album.price}</p></div>
                    <div class="info-card"><i class="fas fa-clock"></i><h4>مدت اقامت</h4><p>${album.duration}</p></div>
                    <div class="info-card"><i class="fas fa-map-marked-alt"></i><h4>مقصد</h4><p>${escapeHtml(album.location)}</p></div>
                    <div class="info-card"><i class="fas fa-users"></i><h4>ظرفیت گروه</h4><p>${album.groupSize}</p></div>
                    <div class="info-card"><i class="fas fa-leaf"></i><h4>بهترین فصل</h4><p>${album.bestTime}</p></div>
                </div>
                
                <div class="album-description-box">
                    <h3><i class="fas fa-pen-fancy"></i> خاطرات این سفر</h3>
                    <p>${escapeHtml(album.fullDescription)}</p>
                </div>
                
                <h3 class="gallery-title"><i class="fas fa-images"></i> گالری تصاویر سفر</h3>
                <div class="gallery-grid">${galleryHtml}</div>
                
                <div class="reserve-section">
                    <h3><i class="fas fa-calendar-check"></i> آماده سفر به ${escapeHtml(album.location)} هستید؟</h3>
                    <p>همین حالا برای این سفر زیبا رزرو کنید و تجربه‌ای فراموش‌نشدنی داشته باشید.</p>
                    <button class="reserve-now-btn" onclick="alert('✅ درخواست رزرو شما ثبت شد.\nکارشناسان ما به زودی با شما تماس می‌گیرند.')">
                        <i class="fas fa-check-circle"></i> درخواست رزرو
                    </button>
                </div>
            `;
}

function initMobileMenu() {
    const burger = document.getElementById('burgerMenu');
    const navCollapse = document.getElementById('mainNavbar');
    if (burger && navCollapse) {
        burger.addEventListener('click', () => {
            navCollapse.classList.toggle('show');
        });
    }
}

document.getElementById('lightboxModal')?.addEventListener('click', function (e) {
    if (e.target === this || e.target.classList.contains('close-lightbox')) {
        this.classList.remove('active');
    }
});

document.querySelector('.btn-reserve')?.addEventListener('click', (e) => {
    e.preventDefault();
    alert('فرم رزرو آنلاین به زودی فعال می‌شود.');
});

document.addEventListener('DOMContentLoaded', () => {
    renderAlbumDetail();
    initMobileMenu();
});