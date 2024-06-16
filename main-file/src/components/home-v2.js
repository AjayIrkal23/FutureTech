import React from 'react';
import Navbar from './global-components/navbar-v2';
import Banner from './section-components/banner-home2';
import WorkInformation from './section-components/work-information-v2';
import InvestArea from './section-components/invest-area-v2';
import FactCount from './section-components/fact-count-v2';
import About from './section-components/about';
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
        <Banner />
        <WorkInformation />
        <InvestArea />
        <FactCount />
        <About />
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

