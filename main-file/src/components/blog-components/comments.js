import React, { Component } from 'react';



class Comments extends Component {
  render() {
   let anchor = '#'
   let imagealt = 'image'
   let publicUrl = process.env.PUBLIC_URL+'/'
    return (
      <div>
         <div className="entry-comment">
            <h3 className="title">Comments On This Post</h3>
            <ul className="comment-list">
              <li>
                <div className="single-comment-item">
                  {/* single comment item */}
                  <div className="thumb">
                    <img src={publicUrl+"assets/img/comments/01.png"} alt="comments image" />
                  </div>
                  <div className="content">
                    <span className="reply"><a href="#">Reply</a></span>
                    <h4 className="name">Masud Viki</h4>
                    <span className="time"><i className="far fa-clock" />2 hours ago</span>
                    <p>ONetus aliquam vitae et lectus mauris quam, quis eget ullamcorper turpis justo consequat, hendrerit nisl...</p>
                  </div>
                </div>
                {/* //. single comment item */}
              </li>
              <li>
                <div className="single-comment-item reply">
                  {/* single comment item */}
                  <div className="thumb reply-image">
                    <img src={publicUrl+"assets/img/comments/02.png"} alt="comments image" />
                  </div>
                  <div className="content">
                    <span className="reply"><a href="#">Reply</a></span>
                    <h4 className="name">Rasel Martin</h4>
                    <span className="time"><i className="far fa-clock" />2 hours ago</span>
                    <p>Netus aliquam vitae et lectus mauris quam, quis eget ullamcorper turpis justo consequat, hendrerit nisl..</p>
                  </div>
                </div>
                {/* //. single comment item */}
              </li>
              <li>
                <div className="single-comment-item">
                  {/* single comment item */}
                  <div className="thumb">
                    <img src={publicUrl+"assets/img/comments/03.png"} alt="comments image" />
                  </div>
                  <div className="content">
                    <span className="reply"><a href="#">Reply</a></span>
                    <h4 className="name">Kamal khan</h4>
                    <span className="time"><i className="far fa-clock" /> 2 hours ago</span>
                    <p>Netus aliquam vitae et lectus mauris quam, quis eget ullamcorper turpis justo consequat, hendrerit nisl..</p>
                  </div>
                </div>
                {/* //. single comment item */}
              </li>
            </ul>
          </div>
          <div className="comment-form-area">
            <h3 className="title">Post Your Comment</h3>
            <form action="/" className="comments-entry-form">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Name*" />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Email*" />
              </div>
              <div className="form-group textarea">
                <textarea className="form-control" placeholder="Message*" cols={30} rows={5} defaultValue={""} />
              </div>
              <button type="submit" className="submit-btn">Post Comment</button>
            </form>
          </div>
      </div>
    )
  }
}

export default Comments;
