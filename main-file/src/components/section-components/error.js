import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class Error extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.error

    return <div className="error-area error-bg">
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-6">
		        <div className="error-image">
		          <img src={publicUrl+data.img} alt={ imagealt } />
		        </div>
		      </div>
		      <div className="col-lg-6">
		        <div className="error-message">
		          <h3 className="title">{ data.title }</h3>
		          <span className="descr">{ data.content }</span>
		          <Link to="/" className="backtohome"><i className="fa fa-home" /> Go Home</Link>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>

        }
}

export default Error