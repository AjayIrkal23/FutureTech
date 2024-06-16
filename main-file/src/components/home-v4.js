import React from 'react';
import Navbar from './global-components/navbar';
import BannerV3 from './section-components/banner-v3';
import WorkInformation from './section-components/work-information';
import InvestArea from './section-components/invest-area';
import FactCount from './section-components/fact-count';
import Transaction from './section-components/transaction';
import WhyChooseUs from './section-components/why-choose-us';
import History from './section-components/history';
import Investor from './section-components/investor';
import InvestmentNews from './section-components/investment-news';
import LatestPost from './section-components/latest-post';
import Profit from './section-components/profit';
import Client from './section-components/client';
import Brand from './section-components/brand';
import Subscriber from './section-components/subscriber';
import Footer from './global-components/footer';

const Home_V1 = () => {
    return <div>
        <Navbar />
        <BannerV3 />
        <WorkInformation />
        <InvestArea />
        <FactCount />
        <Transaction />
        <WhyChooseUs />
        <History />
        <Investor />
        <InvestmentNews />
        <LatestPost />
        <Profit />
        <Client />
        <Brand />
        <Subscriber />
        <Footer />
    </div>
}

export default Home_V1

