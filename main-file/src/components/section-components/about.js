import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class About extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.banner

    return <div className="shape-2" style={{backgroundImage: 'url('+publicUrl+'assets/img/shape/2.png)'}}>
      {/* about-area start */}
      <div className="about-area common-pd-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-md-10">
              <div className="section-title text-center">
                <h5 className="subtitle">Process &amp; Balanced</h5>
                <h3 className="title">Our Intelligent Format</h3>
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <p className="mb-0">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-about text-center">
                <div className="thumb">
                  <img src={publicUrl+"assets/img/process/01.png"} alt="icon" />
                </div>
                <h5><a href="#">We Innovetive</a></h5>
                <p>We are ipsum dolor sit amet, cteturs adipiscing elit sedoeiusincididunt ut labore et doloremagna</p>
                <Link className="btn btn-plus invest-go-top" to="/about"><i className="fa fa-plus" /></Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-about text-center bg-gradient">
                <div className="thumb">
                  <img src={publicUrl+"assets/img/process/02.png"} alt="icon" />
                </div>
                <h5><a href="#">Licensed &amp; Certified</a></h5>
                <p>We are ipsum dolor sit amet, cteturs adipiscing elit sedoeiusincididunt ut labore et doloremagna</p>
                <Link className="btn btn-plus invest-go-top" to="/about"><i className="fa fa-plus" /></Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-about text-center bg-purple">
                <div className="thumb">
                  <img src={publicUrl+"assets/img/process/03.png"} alt="icon" />
                </div>
                <h5><a href="#">Saving &amp; Investments</a></h5>
                <p>We are ipsum dolor sit amet, cteturs adipiscing elit sedoeiusincididunt ut labore et doloremagna</p>
                <Link className="btn btn-plus invest-go-top" to="/about"><i className="fa fa-plus" /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about-area end */}
    </div>



        }
}

export default About