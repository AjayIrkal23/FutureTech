import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import CaseDetailsPage from './section-components/case-details';
import Subscriber from './section-components/subscriber';
import Footer from './global-components/footer';

const CaseDetails = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Case Details" />
        <CaseDetailsPage />
        <Subscriber />
        <Footer />
    </div>
}

export default CaseDetails

