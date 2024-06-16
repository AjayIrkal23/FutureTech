import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class VideoV2 extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.videov2

    return <div className="video-area common-pd-bottom-2 right-line-bg" style={{backgroundImage: 'url('+publicUrl+'assets/img/shape/pen-2.png)'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 align-self-center">
              <div className="single-video-area">
                <div className="thumb">
                  <img src={publicUrl+data.img} alt={ imagealt } />
                  <a className="video-play-btn" href={ data.videourl } data-effect="mfp-zoom-in"><i className="fa fa-play" /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-9 align-self-center text-lg-left text-center invest-go-top">
              <div className="section-title">
                <h5 className="subtitle"><span />{ data.subtitle }</h5>
                <h3 className="title">{ data.title }</h3>
                <p>{ data.content }</p>
              </div>
              <Link className="btn btn-basic top-right-radius-0" to={ data.url } >Find Out More</Link>
              <Link className="btn btn-white top-right-radius-0" to={ data.url } >Know More Us</Link>
            </div>
          </div>
        </div>
      </div>



        }
}

export default VideoV2