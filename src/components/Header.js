import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="v-toolbar__content" style={{ height: '70px' }}>
                <div className="container">
                    <div className="row justify-center">
                        <div className="pa-0 col-md-11 col-xl-8 col-12">
                            <div className="header-content d-inline-flex align-center">
                                {/* Mobile Menu Button */}
                                <button type="button" className="v-btn v-btn--text theme--light v-size--default primary--text no-bg pr-0" style={{ minWidth: '10px' }}>
                                    <span className="v-btn__content">
                                        {/* SVG icon here */}
                                    </span>
                                </button>

                                {/* Logo */}
                                <a href="/fa" className="nuxt-link-active">
                                    <div className="v-image v-responsive theme--light" style={{ minWidth: '75px', maxWidth: '75px', width: '75px' }}>
                                        <div className="v-responsive__sizer" style={{ paddingBottom: '44.843%' }}></div>
                                        <div className="v-image__image v-image__image--contain" style={{ backgroundImage: 'url(logo_url_here)', backgroundPosition: 'center center' }}></div>
                                    </div>
                                </a>
                            </div>

                            <div className="header-actions d-inline-flex align-center">
                                {/* Search Icon */}
                                <button type="button" className="v-btn v-btn--text theme--light v-size--default primary--text no-bg px-3" style={{ minWidth: '10px' }}>
                                    <span className="v-btn__content">
                                        {/* SVG icon here */}
                                    </span>
                                </button>

                                <span className="locale-switch px-3">En</span>

                                {/* Developer Panel Button */}
                                <div className="btn-component no-xs-devices mr-3">
                                    <a href="https://pishkhan.cafebazaar.ir/account/login" className="v-btn v-btn--outlined theme--light v-size--default primary--text" style={{ minWidth: '10px' }}>
                                        <span className="v-btn__content">پنل توسعه‌دهندگان</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
