import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class Subscriber extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.banner

    return <div className="subscribe-area bg-gray common-pd-subscribe text-center text-sm-left">
            <div className="container">
              <div className="row">
                <div className="col-lg-5 align-self-center">
                  <h3 className="title"><i className="fa fa-paper-plane-o" />Sign up to Newsletter</h3>
                </div>
                <div className="col-lg-6 offset-lg-1 align-self-center">
                  <form className="subscribe-form" method="GET">
                    <input type="text" name="email" placeholder="YOUR MAIL" />
                    <button>SUBSCRIBE</button>
                  </form>
                </div>
              </div>
            </div>
          </div>

        }
}

export default Subscriber