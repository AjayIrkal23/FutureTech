import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Case from './section-components/case';
import Brand from './section-components/brand';
import Subscriber from './section-components/subscriber';
import Footer from './global-components/footer';

const UserPanel = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Case Studies" />
        <Case />
        <Brand />
        <Subscriber />
        <Footer />
    </div>
}

export default UserPanel

