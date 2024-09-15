import React from 'react';

const NavBar = () => {
    return (
        <nav id="mobile-navbar">
            <div className="d-flex align-center justify-center mb-6">
                <div className="btn-component ml-auto">
                    <button type="button" className="v-btn v-btn--text theme--light v-size--default primary--text no-bg" style={{ minWidth: '10px' }}>
                        <span className="v-btn__content">
                            {/* SVG icon here */}
                        </span>
                    </button>
                </div>
            </div>
            <div className="ml-auto">
                <div className="v-image v-responsive theme--light" style={{ maxWidth: '75px', width: '75px' }}>
                    <div className="v-image__image v-image__image--preload v-image__image--contain"></div>
                </div>
            </div>
            {/* Navigation Links */}
            <a href="/fa/app-publish-guidelines">قوانین انتشار</a>
            <a href="/fa/guidelines" aria-current="page" className="nuxt-link-exact-active nuxt-link-active">راهنما</a>
            <a href="https://ads.cafebazaar.ir/">تبلیغات</a>
            <a href="/fa/blog">وبلاگ</a>
            <a href="/fa/faq">سوالات متداول</a>
            <a href="https://careers.cafebazaar.ir/">موقعیت شغلی</a>
            <a href="/fa/blog" className="mt-6">بلاگ</a>
            <a href="/fa/blog/category/feature" className="small-nav-item">ابزار و قابلیت</a>
            <a href="/fa/blog/category/news" className="small-nav-item">اخبار و اطلاع‌رسانی</a>
        </nav>
    );
};

export default NavBar;
