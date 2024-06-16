import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class ContactForm extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.banner

    return <div className="contact-message-area text-center pd-bottom-90 pd-top-110">
		  <div className="container">
		    <div className="row justify-content-center">
		      <div className="col-xl-7 col-lg-8">
		        <div className="section-title text-center">
		          <h5 className="subtitle-sm">SEND MESSAGE</h5>
		          <h3 className="title">Message</h3>
		          <p>Contrary to popular belief, lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 a Latin.</p>
		        </div>
		      </div>
		    </div>
		    <div className="row justify-content-center">
		      <div className="col-lg-4 col-md-6">
		        <form className="single-input-wrap-2">
		          <label>Type Your Name</label>
		          <input placeholder="Name" type="text" className="single-input" />
		        </form>
		      </div>
		      <div className="col-lg-4 col-md-6">
		        <form className="single-input-wrap-2">
		          <label>Type Your E-mail</label>
		          <input placeholder="E-mail" type="text" className="single-input" />
		        </form>
		      </div>
		      <div className="col-lg-4 col-md-6">
		        <form className="single-input-wrap-2">
		          <label>Type Website(Optional)</label>
		          <input placeholder="http//" type="text" className="single-input" />
		        </form>
		      </div>
		      <div className="col-12">
		        <form className="single-input-wrap-2 text-left">
		          <label>Type Your Message</label>
		          <textarea placeholder="Something write here............." className="single-input" rows={4} defaultValue={""} />
		          <div className="button">
		            <a className="btn btn-basic" href="#">Send Message</a>
		          </div>
		        </form>
		      </div>
		    </div>
		  </div>
		</div>

        }
}

export default ContactForm