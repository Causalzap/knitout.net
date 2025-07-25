// ===== 导航栏功能 =====

// 设置当前导航项激活状态
function setActiveNavItem() {
    const currentPage = location.pathname.split('/').pop();
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        const page = item.getAttribute('href');
        // 移除所有激活状态
        item.classList.remove('active');
        
        // 设置当前页激活状态
        if (page.includes(currentPage)) {
            item.classList.add('active');
        }
    });
}

// 初始化移动菜单
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const closeBtn = document.querySelector('.close-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
        });
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    }
    
    // 移动菜单导航项点击关闭菜单
    document.querySelectorAll('.mobile-nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });
}

// 页面加载时初始化导航栏
function initNavbar() {
    setActiveNavItem();
    initMobileMenu();
}

// 页面加载后执行初始化
document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    
    // 如果存在导航栏容器，初始化导航栏
    if (document.getElementById('nav-container')) {
        initNavbar();
    }
});
