import React, { useState } from "react";
import { Link } from "react-router-dom";
import sectiondata from "../../data/sections.json";
import parse from "html-react-parser";

const ProfitArea = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState("");
  const [rateOfReturn, setRateOfReturn] = useState("36");
  const [investmentPeriod, setInvestmentPeriod] = useState("");
  const [futureValue, setFutureValue] = useState(null);
  const [totalInvestment, setTotalInvestment] = useState(null);

  const publicUrl = process.env.PUBLIC_URL + "/";
  const imagealt = "image";
  const data = sectiondata.profit;

  const calculateSIP = (e) => {
    e.preventDefault();

    const monthlyRate = rateOfReturn / 100 / 12;
    const totalMonths = investmentPeriod * 12;
    const totalInvestment = monthlyInvestment * totalMonths;
    const futureValue =
      monthlyInvestment *
      ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) *
      (1 + monthlyRate);

    setTotalInvestment(totalInvestment.toFixed(2));
    setFutureValue(futureValue.toFixed(2));
  };

  return (
    <div className="check-profit-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <form onSubmit={calculateSIP}>
              <div className="title text-center">
                <h5>Calculate Your SIP</h5>
              </div>
              <div className="form-group">
                <label>Monthly Investment (₹):</label>
                <input
                  type="number"
                  placeholder="₹1000"
                  className="form-control"
                  value={monthlyInvestment}
                  onChange={(e) => setMonthlyInvestment(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Expected Rate of Return (% p.a):</label>
                <input
                  type="number"
                  placeholder="8"
                  className="form-control"
                  value={rateOfReturn}
                  required
                />
              </div>
              <div className="form-group">
                <label>Investment Period (years):</label>
                <input
                  type="number"
                  placeholder="10"
                  className="form-control"
                  value={investmentPeriod}
                  onChange={(e) => setInvestmentPeriod(e.target.value)}
                  required
                />
              </div>
              {futureValue && totalInvestment && (
                <div className="result mt-4">
                  <h4>Total Investment:</h4>
                  <p>₹ {totalInvestment}</p>
                  <h4>Future Value:</h4>
                  <p>₹ {futureValue}</p>
                </div>
              )}
              <button type="submit" className="btn btn-primary">
                Calculate
              </button>
            </form>
          </div>
          <div className="col-lg-6 align-self-center">
            <div className="payment-method-wrap">
              <h2>{data.title}</h2>
              <p>{data.content}</p>
              <ul className="payment-card">
                {data.items.map((item, i) => (
                  <li key={i}>
                    <a href="#">
                      <img src={publicUrl + item.img} alt={imagealt} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfitArea;
