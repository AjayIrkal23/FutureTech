import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class Transaction extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.transaction

    return <div className="transaction-area left-bottom-line-bg common-pd-bottom-3" style={{backgroundImage: 'url( '+publicUrl+' assets/img/shape/pen.png)'}}>
		  <div className="container">
		    <div className="row justify-content-center">
		      <div className="col-lg-8">
		        <div className="section-title text-center">
		          <h5 className="subtitle">{ data.subtitle }</h5>
		          <h3 className="title">{ data.title }</h3>
		          <div className="row justify-content-center">
		            <div className="col-lg-9">
		              <p className="mb-0">{ data.content }</p>
		            </div>
		          </div>
		        </div>
		      </div>
		      <div className="col-12">
		        <div className="transaction-tab-area">
		          <ul className="transaction-tab nav nav-tabs" id="myTab" role="tablist">
		            <li className="nav-item btn">
		              <a className="nav-link bottom-right-radius-0 active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Deposit</a>
		            </li>
		            <li className="nav-item btn m-0">
		              <a className="nav-link bottom-left-radius-0" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Withdraw</a>
		            </li>
		          </ul>
		          <div className="transaction-table tab-content" id="myTabContent">
		            <div className="tab-pane deposit-tab fade active show" id="home" role="tabpanel" aria-labelledby="home-tab">
		              <div className="table-responsive">
		                <table className="table table-hover">
		                  <thead>
		                    <tr>
		                      <th colSpan={2} scope="col">Person</th>
		                      <th scope="col">Date</th>
		                      <th scope="col">Amount</th>
		                      <th scope="col">Currency</th>
		                      <th scope="col">Deposit</th>
		                    </tr>
		                  </thead>
		                  <tbody>
		                    <tr className="table-margin">
		                      <th />
		                    </tr>
		                    <tr>
		                      <th scope="row"><img src={publicUrl+"assets/img/transection/01.png" }alt="client" /></th>
		                      <td className="name">Emmett Steinkellner</td>
		                      <td>Oct 24,2018</td>
		                      <td>$9,00,000.00</td>
		                      <td>Dollar</td>
		                      <td>001 Days Ago</td>
		                    </tr>
		                    <tr className="table-margin">
		                      <th />
		                    </tr>
		                    <tr>
		                      <th scope="row"><img src={publicUrl+"assets/img/transection/02.png"} alt="client" /></th>
		                      <td className="name">Emmett Steinkellner</td>
		                      <td>Oct 24,2018</td>
		                      <td>$9,00,000.00</td>
		                      <td>Dollar</td>
		                      <td>001 Days Ago</td>
		                    </tr>
		                    <tr className="table-margin">
		                      <th />
		                    </tr>
		                    <tr>
		                      <th scope="row"><img src={publicUrl+"assets/img/transection/03.png"} alt="client" /></th>
		                      <td className="name">Emmett Steinkellner</td>
		                      <td>Oct 24,2018</td>
		                      <td>$9,00,000.00</td>
		                      <td>Dollar</td>
		                      <td>001 Days Ago</td>
		                    </tr>
		                    <tr className="table-margin">
		                      <th />
		                    </tr>
		                    <tr>
		                      <th scope="row"><img src={publicUrl+"assets/img/transection/04.png"} alt="client" /></th>
		                      <td className="name">Emmett Steinkellner</td>
		                      <td>Oct 24,2018</td>
		                      <td>$9,00,000.00</td>
		                      <td>Dollar</td>
		                      <td>001 Days Ago</td>
		                    </tr>
		                    <tr className="table-margin">
		                      <th />
		                    </tr>
		                    <tr>
		                      <th scope="row"><img src={publicUrl+"assets/img/transection/01.png"} alt="client" /></th>
		                      <td className="name">Emmett Steinkellner</td>
		                      <td>Oct 24,2018</td>
		                      <td>$9,00,000.00</td>
		                      <td>Dollar</td>
		                      <td>001 Days Ago</td>
		                    </tr>
		                  </tbody>
		                </table>
		              </div>
		            </div>
		            <div className="tab-pane withdraw-tab fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
		              <div className="table-responsive">
		                <table className="table table-hover">
		                  <thead>
		                    <tr>
		                      <th colSpan={2} scope="col">Person</th>
		                      <th scope="col">Date</th>
		                      <th scope="col">Amount</th>
		                      <th scope="col">Currency</th>
		                      <th scope="col">Deposit</th>
		                    </tr>
		                  </thead>
		                  <tbody>
		                    <tr className="table-margin">
		                      <th />
		                    </tr>
		                    <tr>
		                      <th scope="row"><img src={publicUrl+"assets/img/transection/01.png"} alt="client" /></th>
		                      <td className="name">Emmett Steinkellner</td>
		                      <td>Oct 24,2018</td>
		                      <td>$9,00,000.00</td>
		                      <td>Dollar</td>
		                      <td>001 Days Ago</td>
		                    </tr>
		                    <tr className="table-margin">
		                      <th />
		                    </tr>
		                    <tr>
		                      <th scope="row"><img src={publicUrl+"assets/img/transection/02.png"} alt="client" /></th>
		                      <td className="name">Emmett Steinkellner</td>
		                      <td>Oct 24,2018</td>
		                      <td>$9,00,000.00</td>
		                      <td>Dollar</td>
		                      <td>001 Days Ago</td>
		                    </tr>
		                    <tr className="table-margin">
		                      <th />
		                    </tr>
		                    <tr>
		                      <th scope="row"><img src={publicUrl+"assets/img/transection/03.png"} alt="client" /></th>
		                      <td className="name">Emmett Steinkellner</td>
		                      <td>Oct 24,2018</td>
		                      <td>$9,00,000.00</td>
		                      <td>Dollar</td>
		                      <td>001 Days Ago</td>
		                    </tr>
		                    <tr className="table-margin">
		                      <th />
		                    </tr>
		                    <tr>
		                      <th scope="row"><img src={publicUrl+"assets/img/transection/04.png" }alt="client" /></th>
		                      <td className="name">Emmett Steinkellner</td>
		                      <td>Oct 24,2018</td>
		                      <td>$9,00,000.00</td>
		                      <td>Dollar</td>
		                      <td>001 Days Ago</td>
		                    </tr>
		                    <tr className="table-margin">
		                      <th />
		                    </tr>
		                    <tr>
		                      <th scope="row"><img src={publicUrl+"assets/img/transection/01.png"} alt="client" /></th>
		                      <td className="name">Emmett Steinkellner</td>
		                      <td>Oct 24,2018</td>
		                      <td>$9,00,000.00</td>
		                      <td>Dollar</td>
		                      <td>001 Days Ago</td>
		                    </tr>
		                  </tbody>
		                </table>
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

export default Transaction