import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class Privacy extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.banner

    return <div className="privacy-area">
		  <div className="container">
		    <div className="row justify-content-center">
		      <div className="col-lg-12">
		        <div className="section-title text-center">
		          <div className="privacy-image">
		            <img src={publicUrl+"assets/img/privacy.png"} alt="privacy image" />
		          </div>
		          <span className="sub-title">Welcome to</span>
		          <h2 className="title">Our Privacy Policy</h2>
		          <p className="privacy-text">Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry's standard dummy ever since a the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
		            It has survived not only five as the centuries, but also the leap into electronic typesetting, remaining essentially unchanged ting, remaining essentially unchanged ting, remaining essentially unchanged. </p>
		        </div>
		      </div>
		    </div>
		    <div className="row">
		      <div className="col-xl-6 col-lg-6">
		        <div className="personalization">
		          <div className="privacy-header">
		            <h3>Personalization</h3>
		          </div>
		          <div className="part-text">
		            <h5>Lorem Ipsum is simply dummy</h5>
		            <p>Lorem Ipsum is simply dummy text of the printing and type is setting industry. <a href="#" className="learn"> Learn more</a> </p>
		          </div>
		          <div className="part-text">
		            <h5>Lorem Ipsum is simply dummy</h5>
		            <p>Lorem Ipsum is simply dummy text of the printing and type is setting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
		          </div>
		          <div className="part-text">
		            <h5>Lorem Ipsum is simply dummy</h5>
		            <p>Lorem Ipsum is simply dummy text of the printing and type is setting industry.Lorem Ipsum is simply dummy text of printing and typesetting industry. Lorem Ipsum industry's standard dummy ever since a the 1500s.
		              <a href="#" className="learn"> Learn more</a> </p>
		          </div>
		          <div className="part-text">
		            <h5>Lorem Ipsum is simply dummy</h5>
		            <p>Lorem Ipsum is simply dummy text of the printing and type is setting industry.Lorem Ipsum is simply dummy text of printing and typesetting industry. <a href="#" className="learn"> Learn more</a> </p>
		          </div>
		        </div>
		      </div>
		      <div className="col-xl-6 col-lg-6">
		        <div className="data">
		          <div className="privacy-header">
		            <h3>Data</h3>
		          </div>
		          <div className="part-text">
		            <h5>Lorem Ipsum is simply dummy</h5>
		            <p>Lorem Ipsum is simply dummy text of the printing and type is setting industry.
		              <a href="#" className="learn"> Learn more</a> </p>
		          </div>
		          <div className="part-text">
		            <h5>Lorem Ipsum is simply dummy</h5>
		            <p>Lorem Ipsum is simply dummy text of the printing and type is setting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
		          </div>
		          <div className="part-text">
		            <h5>Lorem Ipsum is simply dummy</h5>
		            <p>Lorem Ipsum is simply dummy text of the printing and type is setting industry.Lorem Ipsum is simply dummy text of printing and typesetting industry. Lorem Ipsum industry's standard dummy ever since a the 1500s.
		              <a href="#" lass="learn"> Learn more</a> </p>
		          </div>
		          <div className="part-text">
		            <h5>Lorem Ipsum is simply dummy</h5>
		            <p>Lorem Ipsum is simply dummy text of the printing and type is setting industry.Lorem Ipsum is simply dummy text of printing and typesetting industry. <a href="#" className="learn"> Learn more</a> </p>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>


        }
}

export default Privacy