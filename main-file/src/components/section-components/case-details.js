import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class CaseDetails extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.banner

    return <div className="case-details-area">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-md-6">
        <div className="case-details-image">
          <img src={publicUrl+"assets/img/service/01.jpg"} alt="cases" />
        </div>
      </div>
      <div className="col-lg-6 col-md-6">
        <div className="case-details-image">
          <img src={publicUrl+"assets/img/service/02.jpg"} alt="cases" />
        </div>
      </div>
      <div className="col-lg-12 col-md-12">
        <div className="cases-details-desc">
          <h2>How to select a small business coach</h2>
          <p>We provide innovative solutions with the best. Incididunt dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. We will Define your business goals and steps to achieve them through sustainable tourism. We will analyze
            potential of your tourism destination and define steps and activities that are required for future development and success of your destination. Bizzload will help you in destination assessment activities, tourism business planning,
            creating tourism master plan and tourism marketing strategies.</p>
          <div className="features-text">
            <h3>Case Overview</h3>
            <h4>
              <i className="fa fa-check" /> We provide innovative solutions with the best
            </h4>
            <p>We provide innovative solutions with the best. Incididunt dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
          </div>
          <div className="features-text">
            <h4>
              <i className="fa fa-check" /> We offer our clients support in destination marketing
            </h4>
            <p>After analyzing the case, we conduct a deep keyword research to find the best key phase of your products and services. We also analyze keywords difficulty, search volume &amp; find the long tail keywords.</p>
          </div>
          <div className="features-text">
            <h4>
              <i className="fa fa-check" /> promoting unique story each destination
            </h4>
            <p>In this phase, we listen to your goal &amp; learn more about your company. We review together your products and services to understand what will be the best practice for your search engine optimization to drive quality traffic
              from the SERP’s.
            </p>
          </div>
          <div className="features-text">
            <h3>Result</h3>
            <h4>
              <i className="fa fa-check" /> We provide innovative solutions with the best
            </h4>
            <p>We provide innovative solutions with the best. Incididunt dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
          </div>
          <div className="features-text">
            <h4>
              <i className="fa fa-check" /> We offer our clients support in destination marketing
            </h4>
            <p>After analyzing the case, we conduct a deep keyword research to find the best key phase of your products and services. We also analyze keywords difficulty, search volume &amp; find the long tail keywords.</p>
          </div>
          <div className="features-text">
            <h4>
              <i className="fa fa-check" /> promoting unique story each destination
            </h4>
            <p>In this phase, we listen to your goal &amp; learn more about your company. We review together your products and services to understand what will be the best practice for your search engine optimization to drive quality traffic
              from the SERP’s.
            </p>
          </div>
          <div className="case-details-info">
            <div className="single-info-box">
              <h4>Client</h4>
              <span>Priyanka Viki</span>
            </div>
            <div className="single-info-box">
              <h4>Category</h4>
              <span>Invest, Finance</span>
            </div>
            <div className="single-info-box">
              <h4>Date</h4>
              <span>February 22, 2020</span>
            </div>
            <div className="single-info-box">
              <h4>Share</h4>
              <ul className="social">
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="single-info-box">
              <div className="btn-wrapper text-left">
                <a href="#" className="btn btn-basic top-right-radius-0">Live Preview</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


        }
}

export default CaseDetails