import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import TopInvestmentNewa from './section-components/investment-news'
import PostList from './blog-components/blog-left-sidebar';
import BrandV2 from './section-components/brand-v2';
import Subscriber from './section-components/subscriber';
import Footer from './global-components/footer';

const BlogLeftSidebar = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Blog Left" />
        <TopInvestmentNewa />
        <PostList />
        <BrandV2 />
        <Subscriber />
        <Footer />
    </div>
}

export default BlogLeftSidebar

