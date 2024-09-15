import React from 'react';

const Breadcrumb = () => {
    return (
        <div className="breadcrumbs d-flex align-center justify-space-between no-print">
            <div className="document-breadcrumbs">
                <a href="/fa" className="d-inline-flex align-center nuxt-link-active">
                    <div className="v-image v-responsive d-flex-inline theme--light ml-2">
                        <div className="v-responsive__sizer" style={{ paddingBottom: '18.4466%' }}></div>
                        <div className="v-image__image v-image__image--contain" style={{ backgroundImage: 'url(image_url_here)', backgroundPosition: 'center center' }}></div>
                    </div>
                    <svg viewBox="0 0 7.047 12.108" height="12" width="12" xmlns="http://www.w3.org/2000/svg" className="svg-icon divider fill-color" style={{ '--fill-color': '#747474', minWidth: '12px' }}>
                        {/* SVG content */}
                    </svg>
                </a>
                <ul className="v-breadcrumbs theme--light pr-2">
                    <span className="breadcrumb-item disabled">راهنما</span>
                </ul>
            </div>
            <div className="d-inline-flex align-center cursor-pointer">
                <svg viewBox="0 0 24 24" height="24" width="24" id="Icon_Print" xmlns="http://www.w3.org/2000/svg" className="svg-icon" style={{ minWidth: '24px' }}>
                    {/* SVG content */}
                </svg>
                <span className="print mobile-d-none">نسخه چاپی</span>
            </div>
        </div>
    );
};

export default Breadcrumb;
