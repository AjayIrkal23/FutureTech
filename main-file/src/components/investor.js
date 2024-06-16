import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Investor from './section-components/investor';
import Client from './section-components/client';
import Brand from './section-components/brand';
import Footer from './global-components/footer';

const Investment = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Investor" />
        <Investor />
        <Client />
        <Brand />
        <Footer />
    </div>
}

export default Investment

