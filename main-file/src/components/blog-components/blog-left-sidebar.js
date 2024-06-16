import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import blogdata from '../../data/blogdata.json';
class BlogListSidebar extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'
    let data = blogdata.bloglist
    return (
	     <div className="blog-left-area">
		  <div className="container">
		    <div className="row">
		      <Sidebar />
		      <div className="col-xl-8 col-lg-8">
		        <div className="blog-area">
		          <div className="container">
		            <div className="row justify-content-center">
		            { data.map( ( item, i )=> 
			              <div key={ i } className="col-lg-6 invest-go-top">
			                <div className="single-blog-wrap mg-bottom-100">
			                  <div className="thumb">
			                    <img src={publicUrl+item.image} alt={ imagealt } />
			                  </div>
			                  <div className="blog-details">
			                    <h5><Link to={ item.url }>{ item.title }</Link></h5>
			                    <span><Link to={ item.url }><i className="fa fa-user" />{ item.author }</Link></span>
			                    <span><i className="fa fa-clock-o" />{ item.date }</span>
			                    <p>{ item.content }</p>
			                    <div className="blog-btn text-center">
			                      <Link className="btn btn-white bottom-right-radius-0" to={ item.url }>Read More<i className="fa fa-long-arrow-right" /></Link>
			                    </div>
			                  </div>
			                </div>
			              </div>
		              ) }
		     
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>


    )
  }
}

export default BlogListSidebar;
