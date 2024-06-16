import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class InvestmentNews extends Component {

	componentDidMount() {

    const $ = window.$;
    
    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'

     $('.news-slider').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            smartSpeed: 1500,
            navText: ['<img src="'+publicUrl+'assets/img/icon/arrow-left.png"/>', '<img src="'+publicUrl+'assets/img/icon/arrow-left.png"/>'],
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        });
   }

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.newsslider

    return <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="news-slider-area">
                <h6>Latest Top Investments News</h6>
                <div className="news-slider owl-carousel owl-theme">
                  { data.items.map( (item, i)=> 
                 	<div key={ i } className="item"><img src={publicUrl+item.img }alt={ imagealt } /></div>
                 	) }
                </div>
              </div>
            </div>
          </div>
        </div>

        }
}

export default InvestmentNews