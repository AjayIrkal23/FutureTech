import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import blogdetails from '../../data/single-blogdata.json';
import Comments from './comments';
import Sidebar from './sidebar';

class BlogDetails extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'
    let data = blogdetails.singlepostdata

    return (
      <div className="blog-details-area mg-bottom-120">
		  <div className="container">
		    <div className="row">
		      <div className="col-xl-8 col-lg-8">
		        <div className="blog-details-content">
		          {/* blog details content  */}
		          <div className="thumb">
		            <img className="w-100" src={publicUrl+"assets/img/blog/blog-details.png"} alt={ imagealt } />
		          </div>
		          <div className="common_area">
		            <div className="date">
		              <span>23</span>
		              <p>DEC</p>
		            </div>
		            <ul>
		              <li>
		                <a href="#">
		                  <i className="fa fa-comments" /> { data.commentnumber }
		                </a>
		              </li>
		              <li>
		                <a href="#">
		                  <i className="fa fa-share" /> { data.sharenumbernumber }
		                </a>
		              </li>
		            </ul>
		          </div>
		          <div className="content">
		              <h3>
		                { data.title }
		              </h3>
		            <p className="bDpb">
		              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
		              incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco.
		            </p>
		            <p>
		              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
		              in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis
		              iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
		              sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia.
		            </p>
		            <blockquote className="blockquote-wrapper">
		              <div className="media d-flex">
		                <div className="left align-self-center mr-4">
		                  <i className="fa fa-quote-left" />
		                </div>
		                <div className="right">
		                  <p>
		                    Investing in stock markets is a gamble: while you could win small or win big, you could lose small or lose big – and end up empty-handed To grow, and hopefully boost profits to turn a business into a financial success, firms offer investors the chance
		                    to back them with their own cash. </p>
		                  <span className="author">
		                    - MR Sen Rosalilo
		                  </span>
		                </div>
		              </div>
		            </blockquote>
		            <p>
		              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
		              in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis
		              iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
		              sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia.
		            </p>
		          </div>
		          <div className="entry-footer">
		            {/* entry footer */}
		            <div className="left-content">
		              <ul>
		                <li className="title mr-2">Tags:</li>
		                <li><a href="#">Investment</a></li>
		                <li><a href="#">Business</a></li>
		                <li><a href="#">Finance</a></li>
		              </ul>
		            </div>
		            <div className="right-content">
		              <ul className="footer-social">
		                <li className="title">Share:</li>
		                <li>
		                  <a href="#" className="facebook"> <i className="fa fa-facebook-f" aria-hidden="true" /></a>
		                </li>
		                <li><a href="#" className="twitter"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
		                <li><a href="#" className="linkedin"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
		                <li><a href="#" className="google"><i className="fa fa-google-plus" aria-hidden="true" /></a></li>
		              </ul>
		            </div>
		          </div>
		          {/* //. entry footer */}
		          <Comments />

		        </div>
		        {/* //. blog details content */}
		      </div>
		      <Sidebar />

		    </div>
		  </div>
		</div>

    )
  }
}

export default BlogDetails;
