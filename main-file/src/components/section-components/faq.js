import React, { Component } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from "@material-ui/core";
import parse from "html-react-parser";
import sectiondata from "../../data/sections.json"; // Adjust the path as necessary
class Faq extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";
    let data = sectiondata.faq;

    return (
      <div className="faq">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-6">
              <div className="section-title text-center">
                <h3>{data.title}</h3>
                <p>{data.content}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  {data.leftfaq.map((item, i) => (
                    <Accordion key={i}>
                      <AccordionSummary
                        expandIcon="+"
                        aria-controls={`panel${i}-content`}
                        id={`panel${i}-header`}
                      >
                        <Typography>{item.title}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>{item.content}</Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </div>
                <div className="col-xl-6 col-lg-6">
                  {data.rightfaq.map((item, i) => (
                    <Accordion key={i}>
                      <AccordionSummary
                        expandIcon="+"
                        aria-controls={`panel${i + 10}-content`}
                        id={`panel${i + 10}-header`}
                      >
                        <Typography>{item.title}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>{item.content}</Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Faq;
