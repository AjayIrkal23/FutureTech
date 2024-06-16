import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class Case extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.banner

    return <div className="case-page-area">
			  <div className="container">
			    <div className="row case-single">
			      <div className="col-lg-6">
			        <div className="case-image wow fadeInLeft">
			          <img src={publicUrl+"assets/img/case/01.png"} className="img-fluid" alt="case images" />
			          <div className="case-item-hover">
			            <a href="#">
			              <div className="case-link"><span className="fa fa-eye" /></div>
			            </a>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-6 d-flex">
			        <div className="case-content wow fadeInRight">
			          <h3 className="title">Business &amp; Finance</h3>
			          <p>We provide innovative solutions with the best. Incididunt dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
			          <div className="btn-wrapper text-left invest-go-top">
			            <Link to="/case-details" className="btn btn-basic top-right-radius-0">Case Details</Link>
			          </div>
			        </div>
			      </div>
			    </div>
			    <div className="row case-single">
			      <div className="col-lg-6 order-lg-12">
			        <div className="case-image wow fadeInRight">
			          <img src={publicUrl+"assets/img/case/02.png" }className="img-fluid" alt="case images" />
			          <div className="case-item-hover">
			            <a href="#">
			              <div className="case-link"><span className="fa fa-eye" /></div>
			            </a>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-6 d-flex  order-lg-1">
			        <div className="case-content wow fadeInLeft">
			          <h3 className="title">Strategic Planning</h3>
			          <p>We provide innovative solutions with the best. Incididunt dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
			          <div className="btn-wrapper text-left invest-go-top">
			              <Link to="/case-details" className="btn btn-basic top-right-radius-0">Case Details</Link>
			          </div>
			        </div>
			      </div>
			    </div>
			    <div className="row case-single">
			      <div className="col-lg-6">
			        <div className="case-image wow fadeInLeft">
			          <img src={publicUrl+"assets/img/case/03.png"} className="img-fluid" alt="case images" />
			          <div className="case-item-hover">
			            <a href="#">
			              <div className="case-link"><span className="fa fa-eye" /></div>
			            </a>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-6 d-flex">
			        <div className="case-content wow fadeInRight">
			          <h3 className="title">Wealth Manegment</h3>
			          <p>We provide innovative solutions with the best. Incididunt dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
			          <div className="btn-wrapper text-left invest-go-top">
			              <Link to="/case-details" className="btn btn-basic top-right-radius-0">Case Details</Link>
			          </div>
			        </div>
			      </div>
			    </div>
			    <div className="row case-single">
			      <div className="col-lg-6  order-lg-12">
			        <div className="case-image wow fadeInRight">
			          <img src={publicUrl+"assets/img/case/04.png"} className="img-fluid" alt="case images" />
			          <div className="case-item-hover">
			            <a href="#">
			              <div className="case-link"><span className="fa fa-eye" /></div>
			            </a>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-6 d-flex  order-lg-1">
			        <div className="case-content wow fadeInLeft">
			          <h3 className="title">Lifecare &amp; Insurance</h3>
			          <p>We provide innovative solutions with the best. Incididunt dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
			          <div className="btn-wrapper text-left invest-go-top">
			             <Link to="/case-details" className="btn btn-basic top-right-radius-0">Case Details</Link>
			          </div>
			        </div>
			      </div>
			    </div>
			    <div className="row case-single">
			      <div className="col-lg-6">
			        <div className="case-image wow fadeInLeft">
			          <img src={publicUrl+"assets/img/case/05.png"} className="img-fluid" alt="case images" />
			          <div className="case-item-hover">
			            <a href="#">
			              <div className="case-link"><span className="fa fa-eye" /></div>
			            </a>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-6 d-flex">
			        <div className="case-content">
			          <h3 className="title">Business &amp; Finance</h3>
			          <p>We provide innovative solutions with the best. Incididunt dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
			          <div className="btn-wrapper text-left invest-go-top">
			             <Link to="/case-details" className="btn btn-basic top-right-radius-0">Case Details</Link>
			          </div>
			        </div>
			      </div>
			    </div>
			    <div className="row case-single">
			      <div className="col-lg-6 order-lg-12">
			        <div className="case-image wow fadeInRight ">
			          <img src={publicUrl+"assets/img/case/06.png"} alt="case images" />
			          <div className="case-item-hover">
			            <a href="#">
			              <div className="case-link"><span className="fa fa-eye" /></div>
			            </a>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-6 d-flex order-lg-1">
			        <div className="case-content wow fadeInLeft">
			          <h3 className="title">Business &amp; Finance</h3>
			          <p>We provide innovative solutions with the best. Incididunt dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
			          <div className="btn-wrapper text-left invest-go-top">
			              <Link to="/case-details" className="btn btn-basic top-right-radius-0">Case Details</Link>
			          </div>
			        </div>
			      </div>
			    </div>
			    <div className="row case-single">
			      <div className="col-lg-6">
			        <div className="case-image  wow fadeInLeft">
			          <img src={publicUrl+"assets/img/case/07.png"} className="img-fluid" alt="case images" />
			          <div className="case-item-hover">
			            <a href="#">
			              <div className="case-link"><span className="fa fa-eye" /></div>
			            </a>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-6 d-flex">
			        <div className="case-content wow fadeInRight">
			          <h3 className="title">Market Analysis</h3>
			          <p>We provide innovative solutions with the best. Incididunt dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
			          <div className="btn-wrapper text-left invest-go-top">
			              <Link to="/case-details" className="btn btn-basic top-right-radius-0">Case Details</Link>
			          </div>
			        </div>
			      </div>
			    </div>
			    <div className="col-lg-12">
			      <nav aria-label="Page navigation">
			        <ul className="pagination pagination-2 justify-content-center">
			          <li className="page-item">
			            <a className="page-link d-none d-sm-inline-block" href="#" tabIndex={-1} aria-disabled="true"> <i className="fa fa-arrow-left" aria-hidden="true" /></a>
			          </li>
			          <li className="page-item"><a className="page-link" href="#">01</a></li>
			          <li className="page-item active"><a className="page-link" href="#">02</a></li>
			          <li className="page-item"><a className="page-link" href="#">03</a></li>
			          <li className="page-item"><a className="page-link" href="#">...</a></li>
			          <li className="page-item"><a className="page-link" href="#">10</a></li>
			          <li className="page-item">
			            <a className="page-link d-none d-sm-inline-block" href="#"> <i className="fa fa-arrow-right" aria-hidden="true" /></a>
			          </li>
			        </ul>
			      </nav>
			    </div>
			  </div>
			</div>

        }
}

export default Case