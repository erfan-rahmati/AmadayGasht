// ==================== داده کامل مقالات ====================
const blogPosts = [
    {
        id: 1,
        title: "۱۰ نکته طلایی برای سفر ارزان قیمت",
        category: "نکات سفر",
        date: "۱۴۰۵/۰۲/۱۵",
        readTime: "۵ دقیقه",
        image: "assetss/Images/blog/travel-tips.jpg",
        author: "مریم حسینی",
        authorBio: "کارشناس ارشد گردشگری و مشاور سفر",
        tags: ["سفر ارزان", "نکات سفر", "بودجه سفر"],
        content: `
                    <p>سفر کردن یکی از لذت‌بخش‌ترین تجربیات زندگی است، اما گاهی هزینه‌های بالا می‌تواند مانع از این لذت شود. در این مقاله ۱۰ نکته کاربردی را به شما آموزش می‌دهیم که با رعایت آنها می‌توانید سفری به صرفه و خاطره‌انگیز داشته باشید.</p>
                    
                    <h2>۱. سفر در فصل کم‌بازدید</h2>
                    <p>سفر در فصل‌های کم‌بازدید نه تنها هزینه‌ها را کاهش می‌دهد، بلکه از شلوغی و ازدحام جمعیت نیز در امان خواهید بود. قیمت هتل‌ها و بلیط‌ها در این فصل‌ها تا ۵۰ درصد کاهش می‌یابد.</p>
                    
                    <h2>۲. رزرو زودهنگام</h2>
                    <p>هرچه زودتر بلیط و اقامتگاه خود را رزرو کنید، قیمت مناسب‌تری دریافت خواهید کرد. بسیاری از سایت‌های رزرو آنلاین، تخفیف‌های ویژه برای رزرو زودهنگام ارائه می‌دهند.</p>
                    
                    <div class="tip-box">
                        <i class="fas fa-lightbulb"></i> <strong>نکته طلایی:</strong> حداقل ۲ ماه قبل از سفر، بلیط هواپیما و قطار خود را رزرو کنید تا بهترین قیمت را دریافت کنید.
                    </div>
                    
                    <h2>۳. استفاده از اقامتگاه‌های جایگزین</h2>
                    <p>به جای هتل‌های گرانقیمت، می‌توانید از خانه‌های استیجاری، مهمانپذیرها و بومگردی‌ها استفاده کنید. این اقامتگاه‌ها علاوه بر قیمت مناسب، تجربه‌ای متفاوت و اصیل از سفر را برای شما رقم می‌زنند.</p>
                    
                    <h2>۴. حمل و نقل عمومی</h2>
                    <p>استفاده از مترو، اتوبوس و قطار هزینه سفر را به میزان قابل توجهی کاهش می‌دهد. بسیاری از شهرهای بزرگ ایران دارای سیستم حمل و نقل عمومی پیشرفته و ارزانی هستند.</p>
                    
                    <h2>۵. پخت و پز در اقامتگاه</h2>
                    <p>اگر اقامتگاه شما آشپزخانه دارد، پخت و پز می‌تواند هزینه غذا را تا نصف کاهش دهد. همچنین می‌توانید از غذاهای محلی و خیابانی که معمولاً قیمت مناسب‌تری دارند استفاده کنید.</p>
                    
                    <h2>۶. جستجوی جاهای دیدنی رایگان</h2>
                    <p>بسیاری از شهرها دارای جاذبه‌های رایگان مانند پارک‌ها، موزه‌های رایگان و بازارهای محلی هستند. قبل از سفر، لیستی از جاذبه‌های رایگان مقصد خود تهیه کنید.</p>
                    
                    <h2>۷. استفاده از برنامه‌های تخفیف</h2>
                    <p>با نصب اپلیکیشن‌های تخفیف، می‌توانید از کدهای تخفیف هتل، رستوران و جاذبه‌ها استفاده کنید. برخی از این برنامه‌ها شامل تخفیف‌های ویژه برای کاربران جدید هستند.</p>
                    
                    <h2>۸. خرید از سوپرمارکت‌های محلی</h2>
                    <p>به جای رستوران، از سوپرمارکت‌های محلی خرید کنید و وعده‌های غذایی خود را خودتان آماده کنید. این کار هم به صرفه‌جویی در هزینه کمک می‌کند و هم با فرهنگ غذایی محلی آشنا می‌شوید.</p>
                    
                    <h2>۹. سفر گروهی</h2>
                    <p>سفر گروهی هزینه اقامت و حمل و نقل را به طور قابل توجهی کاهش می‌دهد. با چند خانواده یا دوستان خود هماهنگ شوید و با هم سفر کنید.</p>
                    
                    <h2>۱۰. انعطاف در تاریخ سفر</h2>
                    <p>با کمی انعطاف در تاریخ سفر، می‌توانید از قیمت‌های ارزان‌تر بهره‌مند شوید. سفر در روزهای وسط هفته معمولاً ارزان‌تر از آخر هفته است.</p>
                    
                    <p>با رعایت این نکات، بدون شک سفری به صرفه و لذت‌بخش را تجربه خواهید کرد. اگر تجربه یا نکته دیگری دارید، در بخش نظرات با ما به اشتراک بگذارید.</p>
                `
    },
    {
        id: 2,
        title: "معرفی مقاصد گردشگری شمال ایران",
        category: "مقاصد",
        date: "۱۴۰۵/۰۲/۱۰",
        readTime: "۴ دقیقه",
        image: "assetss/Images/blog/north.jpg",
        author: "علی رضایی",
        authorBio: "راهنمای تور و عکاس طبیعت",
        tags: ["شمال ایران", "طبیعت گردی", "مقاصد گردشگری"],
        content: `<p>شمال ایران با طبیعت بکر، جنگل‌های سرسبز و دریای خزر، یکی از محبوب‌ترین مقاصد گردشگری کشور است...</p>`
    },
    {
        id: 3,
        title: "راهنمای انتخاب اقامتگاه مناسب",
        category: "اقامت",
        date: "۱۴۰۵/۰۲/۰۵",
        readTime: "۶ دقیقه",
        image: "assetss/Images/blog/accommodation.jpg",
        author: "سارا احمدی",
        authorBio: "مدیر فروش و بازاریابی",
        tags: ["اقامتگاه", "هتل", "بومگردی"],
        content: `<p>انتخاب اقامتگاه مناسب یکی از مهم‌ترین تصمیمات در سفر است...</p>`
    },
    {
        id: 4,
        title: "سفر ماجراجویانه به کویر مرنجاب",
        category: "ماجراجویی",
        date: "۱۴۰۵/۰۱/۲۵",
        readTime: "۵ دقیقه",
        image: "assetss/Images/blog/desert.jpg",
        author: "رضا کریمی",
        authorBio: "مشاور ارشد سفر",
        tags: ["کویر", "ماجراجویی", "مرنجاب"],
        content: `<p>کویر مرنجاب در نزدیکی کاشان، یکی از زیباترین و بکرترین مناطق کویری ایران است...</p>`
    },
    {
        id: 5,
        title: "تور اقتصادی مشهد با بودجه کم",
        category: "نکات سفر",
        date: "۱۴۰۵/۰۱/۱۸",
        readTime: "۴ دقیقه",
        image: "assetss/Images/blog/mashhad.jpg",
        author: "زهرا محمدی",
        authorBio: "کارشناس رزرواسیون",
        tags: ["مشهد", "سفر اقتصادی", "زیارتی"],
        content: `<p>مشهد مقدس به عنوان قطب زیارتی ایران، سالانه میلیون‌ها زائر را به خود جذب می‌کند...</p>`
    },
    {
        id: 6,
        title: "راهنمای خرید سوغاتی محلی",
        category: "نکات سفر",
        date: "۱۴۰۵/۰۱/۰۸",
        readTime: "۳ دقیقه",
        image: "assetss/Images/blog/souvenir.jpg",
        author: "مریم حسینی",
        authorBio: "کارشناس ارشد گردشگری",
        tags: ["سوغاتی", "صنایع دستی", "خرید"],
        content: `<p>سوغاتی خریدن یکی از لذت‌بخش‌ترین بخش‌های هر سفری است...</p>`
    }
];

// مقالات مرتبط (بر اساس دسته‌بندی)
function getRelatedPosts(currentPost, limit = 3) {
    return blogPosts.filter(post => post.id !== currentPost.id && post.category === currentPost.category).slice(0, limit);
}

function getPostIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('id'));
}

function renderBlogDetail() {
    const id = getPostIdFromUrl();
    const post = blogPosts.find(p => p.id === id);
    const container = document.getElementById('blogDetailContent');

    if (!post) {
        container.innerHTML = `<div style="text-align:center; padding:50px;"><i class="fas fa-exclamation-triangle" style="font-size:3rem; color:rgba(55,121,255,0.85);"></i><p style="color:white;">مقاله مورد نظر یافت نشد.</p></div>`;
        return;
    }

    const relatedPosts = getRelatedPosts(post);
    let imgSrc = post.image || 'https://picsum.photos/id/104/800/400';

    // رندر مقالات مرتبط
    let relatedHtml = '';
    relatedPosts.forEach(related => {
        let relatedImg = related.image || 'https://picsum.photos/id/104/100/100';
        relatedHtml += `
                    <div class="related-post" onclick="location.href='blog-detail.html?id=${related.id}'">
                        <div class="related-post-img"><img src="${relatedImg}" onerror="this.src='https://picsum.photos/id/104/100/100'"></div>
                        <div class="related-post-info">
                            <h4>${related.title}</h4>
                            <span><i class="far fa-calendar-alt"></i> ${related.date}</span>
                        </div>
                    </div>
                `;
    });

    // رندر برچسب‌ها
    let tagsHtml = '';
    post.tags.forEach(tag => {
        tagsHtml += `<span class="tag">${tag}</span>`;
    });

    container.innerHTML = `
                <div class="blog-detail-header">
                    <span class="blog-detail-category">${post.category}</span>
                    <h1 class="blog-detail-title">${post.title}</h1>
                    <div class="blog-detail-meta">
                        <span><i class="far fa-calendar-alt"></i> ${post.date}</span>
                        <span><i class="far fa-clock"></i> ${post.readTime} مطالعه</span>
                        <span><i class="fas fa-user"></i> ${post.author}</span>
                    </div>
                </div>
                <div class="blog-detail-image">
                    <img src="${imgSrc}" alt="${post.title}" onerror="this.src='https://picsum.photos/id/104/800/400'">
                </div>
                <div class="blog-detail-content-wrapper">
                    <div class="blog-detail-content">
                        ${post.content}
                    </div>
                    <div class="blog-sidebar">
                        <div class="sidebar-card">
                            <div class="sidebar-title"><i class="fas fa-newspaper"></i> مقالات مرتبط</div>
                            ${relatedHtml || '<p style="color:#9aa9b8;">مقاله مرتبطی یافت نشد</p>'}
                        </div>
                        <div class="sidebar-card">
                            <div class="sidebar-title"><i class="fas fa-tags"></i> برچسب‌ها</div>
                            <div class="tags-cloud">${tagsHtml}</div>
                        </div>
                    </div>
                </div>
                <div class="blog-detail-footer">
                    <div class="blog-author">
                        <div class="blog-author-avatar"><i class="fas fa-user-circle"></i></div>
                        <div class="blog-author-info">
                            <h4>${post.author}</h4>
                            <span>${post.authorBio}</span>
                        </div>
                    </div>
                    <div class="share-buttons">
                        <div class="share-btn" onclick="alert('اشتراک‌گذاری در اینستاگرام')"><i class="fab fa-instagram"></i></div>
                        <div class="share-btn" onclick="alert('اشتراک‌گذاری در تلگرام')"><i class="fab fa-telegram"></i></div>
                        <div class="share-btn" onclick="alert('اشتراک‌گذاری در واتساپ')"><i class="fab fa-whatsapp"></i></div>
                        <div class="share-btn" onclick="navigator.clipboard.writeText(window.location.href); alert('لینک مقاله کپی شد')"><i class="fas fa-link"></i></div>
                    </div>
                </div>
                
                <!-- بخش نظرات -->
                <div class="comments-section">
                    <div class="comments-title"><i class="fas fa-comments"></i> نظرات کاربران</div>
                    <div id="commentsList"></div>
                    <div class="comment-form">
                        <h4>دیدگاه خود را بنویسید</h4>
                        <form id="commentForm">
                            <div class="comment-form-row">
                                <input type="text" id="commentName" placeholder="نام و نام خانوادگی" required>
                                <input type="email" id="commentEmail" placeholder="ایمیل (اختیاری)">
                            </div>
                            <textarea id="commentText" rows="4" placeholder="متن دیدگاه..." required></textarea>
                            <button type="submit" class="comment-submit" style="margin-top: 1rem;">ارسال دیدگاه</button>
                        </form>
                    </div>
                </div>
            `;

    // بارگذاری نظرات ذخیره شده
    loadComments(post.id);

    // رویداد ارسال نظر
    const commentForm = document.getElementById('commentForm');
    if (commentForm) {
        commentForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById('commentName')?.value.trim();
            const text = document.getElementById('commentText')?.value.trim();
            if (!name || name.length < 3) {
                alert('لطفاً نام خود را وارد کنید');
                return;
            }
            if (!text || text.length < 5) {
                alert('لطفاً متن دیدگاه را وارد کنید');
                return;
            }

            const newComment = {
                id: Date.now(),
                name: name,
                text: text,
                date: new Date().toLocaleDateString('fa-IR'),
                postId: post.id
            };

            saveComment(newComment);
            commentForm.reset();
            loadComments(post.id);
            alert('دیدگاه شما با موفقیت ثبت شد و پس از تایید نمایش داده می‌شود.');
        });
    }
}

function loadComments(postId) {
    const savedComments = localStorage.getItem('blogComments');
    let allComments = savedComments ? JSON.parse(savedComments) : [];
    const postComments = allComments.filter(c => c.postId === postId);
    const commentsList = document.getElementById('commentsList');

    if (postComments.length === 0) {
        commentsList.innerHTML = '<p style="color:#9aa9b8; text-align:center; padding:1rem;">هنوز دیدگاهی ثبت نشده است. اولین نفری باشید که نظر می‌دهید!</p>';
        return;
    }

    let html = '';
    postComments.forEach(comment => {
        html += `
                    <div class="comment-item">
                        <div class="comment-avatar"><i class="fas fa-user"></i></div>
                        <div class="comment-content">
                            <h4>${escapeHtml(comment.name)}</h4>
                            <span class="comment-date">${comment.date}</span>
                            <p class="comment-text">${escapeHtml(comment.text)}</p>
                        </div>
                    </div>
                `;
    });
    commentsList.innerHTML = html;
}

function saveComment(comment) {
    const savedComments = localStorage.getItem('blogComments');
    let allComments = savedComments ? JSON.parse(savedComments) : [];
    allComments.push(comment);
    localStorage.setItem('blogComments', JSON.stringify(allComments));
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function (m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

function initMobileMenu() {
    const burger = document.getElementById('burgerMenu');
    const navCollapse = document.getElementById('mainNavbar');
    if (burger && navCollapse) {
        burger.addEventListener('click', () => navCollapse.classList.toggle('show'));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderBlogDetail();
    initMobileMenu();
});