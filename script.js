const stickyWrapper = document.querySelector('.sticky-mobile-wrapper'); // الـ div كله
const stickyBtn = stickyWrapper.querySelector('.sticky-btn'); // الرابط جواه
const closeBtn = stickyWrapper.querySelector('.close-sticky');
const realBtn = document.querySelector('.white-btn:not(.sticky-btn)');
let mobileClosed = false;

// function لتحديث الحالة
function updateSticky() {
    if (!realBtn || !stickyWrapper) return;

    if (window.innerWidth > 768) {
        // Desktop
        stickyWrapper.style.display = 'none'; // نخفيه على الديسكتوب
        realBtn.style.opacity = '1';
        realBtn.style.pointerEvents = 'auto';
        realBtn.style.transform = 'translateY(0)';
    } else {
        // Mobile
        if (!mobileClosed) {
            stickyWrapper.style.display = 'flex';
            realBtn.style.opacity = '0';
            realBtn.style.pointerEvents = 'none';
            realBtn.style.transform = 'translateY(20px)';
        } else {
            stickyWrapper.style.display = 'none';
            realBtn.style.opacity = '1';
            realBtn.style.pointerEvents = 'auto';
            realBtn.style.transform = 'translateY(0)';
        }
    }
}

// تشغيلها أول ما الصفحة تتحمل
updateSticky();

// تحديث على scroll
window.addEventListener('scroll', updateSticky);

// تحديث على تغيير حجم الشاشة
window.addEventListener('resize', updateSticky);

// إخفاء الزرار عند الضغط على X
closeBtn.addEventListener('click', function (e) {
    e.preventDefault(); // يمنع أي رابط
    e.stopPropagation(); // يمنع أي bubbling
    stickyWrapper.style.display = 'none';
    mobileClosed = true;
    realBtn.style.opacity = '1';
    realBtn.style.pointerEvents = 'auto';
    realBtn.style.transform = 'translateY(0)';
});

// منع فتح الرابط لو الزرار متغلق
stickyBtn.addEventListener('click', function (e) {
    if (mobileClosed) e.preventDefault();
});



// Bootstrap tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
