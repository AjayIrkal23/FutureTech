import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import data from '../../data/widgetdata.json';
class Sidebar extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'
    return (
      <div className="col-xl-4 col-lg-4">
        <div className="sidebar">
          <div className="widget widget_search">
            <form name="search_form" className="sayit_search_form" id="search_form">
              <span className="sayit_icon_search"><i className="fa fa-search" /></span>
              <input className="sayit_field_search" name="search" placeholder="Search" title="Search the site..." form="search_form" />
              <div className="clear" />
            </form>
          </div>
          <div className="widget social_share">
            <h5 className="widgettitle"><span>Follow Us</span></h5>
            <ul className="social-link">
              <li>
                <a href="#" target="_blank" className="facebook"> <i className="fa fa-facebook-f" aria-hidden="true" /></a>
              </li>
              <li><a href="#" target="_blank" className="twitter"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
              <li><a href="#" target="_blank" className="youtube"><i className="fa fa-youtube-play" aria-hidden="true" /></a></li>
              <li><a href="#" target="_blank" className="instagram"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
            </ul>
            {/* /.social-box */}
          </div>
          <div className="widget widget-popular-post">
            <h5 className="widgettitle">
              <span>{ data.latestposts.title }</span>
            </h5>
            { data.latestposts.listitems.map( ( item, i )=> 
	            <div key={ i } className="single-post invest-go-top">
	              <div className="part-img">
	                <img src={publicUrl+item.image} alt={ imagealt } />
	              </div>
	              <div className="part-text">
	                <span>{ item.date }</span>
	                <h4><Link to={ item.url }> { item.title } </Link></h4>
	              </div>
	            </div>
            ) }

          </div>
          <div className="widget widget_categories invest-go-top">
            <h5 className="widgettitle"><span>{ data.categorywidget.title }</span></h5>
            <ul>
             { data.categorywidget.listitems.map( ( item, i )=>
              <li key={ i }><Link to={ item.url }>{ item.cat } ({ item.number })</Link></li>
              ) }
            </ul>
          </div>
          <div className="widget widget_tag_cloud">
            <h5 className="widgettitle">
              <span>{ data.tagscloud.title }</span>
            </h5>
            <div className="tagcloud">
            { data.tagscloud.listitems.map( ( item, i )=>
              <Link key={ i } to={ item.url }>{ item.title }</Link>
              ) }
            </div>
          </div>
          <div className="widget widget_instagram mb-0">
            <h5 className="widgettitle">
              <span>Instagram</span>
            </h5>
            <ul className="instagram-img">
              <li className="col-xs-4 col-4">
                <a href="#"><img alt="" src={publicUrl+"assets/img/blog/i-01.png"} /></a>
              </li>
              <li className="col-xs-4 col-4">
                <a href="#"><img alt="" src={publicUrl+"assets/img/blog/i-02.png"} /></a>
              </li>
              <li className="col-xs-4 col-4">
                <a href="#"><img alt="" src={publicUrl+"assets/img/blog/i-03.png"} /></a>
              </li>
              <li className="col-xs-4 col-4">
                <a href="#"><img alt="" src={publicUrl+"assets/img/blog/i-04.png"} /></a>
              </li>
              <li className="col-xs-4 col-4">
                <a href="#"><img alt="" src={publicUrl+"assets/img/blog/i-05.png"} /></a>
              </li>
              <li className="col-xs-4 col-4">
                <a href="#"><img alt="" src={publicUrl+"assets/img/blog/i-06.png"} /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>

    )
  }
}

export default Sidebar;
