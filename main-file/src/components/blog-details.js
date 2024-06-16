import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import PostDetails from './blog-components/blog-details'
import Footer from './global-components/footer';

const BlogDetails = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Blog Details" />
        <PostDetails />
        <Footer />
    </div>
}

export default BlogDetails

