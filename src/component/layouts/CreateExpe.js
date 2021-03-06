import React, { Component } from "react";
import { connect } from "react-redux";
import { createExpe } from "../../actions/experience";

export class CreateExpe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      job: "",
      employment_type: "",
      company: "",
      current: "",
      location: "",
      startYear: "",
      startMonth: "",
      endYear: "",
      endMonth: "",
      description: "",
    };
  }

  resetState = () => {
    this.setState({
      job: "",
      employment_type: "",
      company: "",
      location: "",
      startYear: "",
      startMonth: "",
      endYear: "",
      endMonth: "",
      description: "",
    });
  };

  closeModal = () => {
    document.getElementById("expeModal").style.display = "none";
    this.resetState();
  };

  clickOutside = (e) => {
    if (e.target === document.getElementById("expeModal")) {
      document.getElementById("expeModal").style.display = "none";
      this.resetState();
    }
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleCurrent = (e) => {
    if (e.target.checked === true) {
      this.setState({
        endYear: "Present",
      });
      document.getElementById("endMonth").setAttribute("disabled", "true");
      document.getElementById("endYear").setAttribute("disabled", "true");
      document.getElementById("endMonth").classList.add("disabled");
      document.getElementById("endYear").classList.add("disabled");
    } else if (e.target.checked === false) {
      document.getElementById("endMonth").removeAttribute("disabled");
      document.getElementById("endYear").removeAttribute("disabled");
      document.getElementById("endMonth").classList.remove("disabled");
      document.getElementById("endYear").classList.remove("disabled");
    }
  };
  
  onSubmit = (e) => {
    e.preventDefault();
    const {
      job,
      employment_type,
      startYear,
      startMonth,
      endMonth,
      endYear,
      company,
      location,
      description,
    } = this.state;

    // document.getElementById('current').addEventListener('checked', this.checkCurrent)

    let start = `${startMonth} ${startYear}`;
    let end = `${endMonth} ${endYear}`;

    const data = {
      job,
      employment_type,
      start,
      end,
      company,
      location,
      description,
    };
    console.log(data);

    this.props.createExpe(data);
    this.closeModal();
    this.resetState();
  };

  render() {
    const {
      job,
      employment_type,
      startYear,
      startMonth,
      endMonth,
      endYear,
      current,
      company,
      location,
      description,
    } = this.state;
    window.addEventListener("click", this.clickOutside);

    return (
      <div className="modal-content">
        <form onSubmit={this.onSubmit} method="post">
          <div className="modal-title">
            <h2>Add experience</h2>
            <h1>
              <i className="fa fa-close" onClick={this.closeModal}></i>
            </h1>
          </div>
          <div className="modal-body">
            <div className="experienceModal">
              <div className="form-group">
                <label htmlFor="job">
                  Job Title<span>*</span>
                </label>
                <input
                  type="text"
                  name="job"
                  value={job}
                  onChange={this.onChange}
                  placeholder="Ex: Senior Developer"
                />
              </div>
              <div className="form-group">
                <label htmlFor="job">Employment type</label>
                <select
                  name="employment_type"
                  value={employment_type}
                  onChange={this.onChange}
                >
                  {" "}
                  <option value="">-</option>
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Self-employed</option>
                  <option>Freelance</option>
                  <option>Contract</option>
                  <option>Internship</option>
                  <option>Apprenticeship</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="company">
                  Company <span>*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  value={company}
                  onChange={this.onChange}
                  placeholder="(Optional)"
                />
              </div>
              <div className="form-group">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  name="location"
                  value={location}
                  onChange={this.onChange}
                  placeholder="Ex: London, United Kingdom"
                />
              </div>
              <div className="current">
                <input
                  type="checkbox"
                  name="current"
                  value={current}
                  onChange={this.handleCurrent}
                />{" "}
                I am currently working in this role
              </div>
              <div className="years">
                <div className="startYear">
                  <label htmlFor="start">
                    Start Year <span>*</span>
                  </label>
                  <div className="dateInput">
                    <select
                      name="startMonth"
                      value={startMonth}
                      onChange={this.onChange}
                    >
                      {" "}
                      <option value="">Month</option>
                      <option value="Jan">January</option>
                      <option value="Feb">February</option>
                      <option value="Mar">March</option>
                      <option value="Apr">April</option>
                      <option value="May">May</option>
                      <option value="Jun">June</option>
                      <option value="Jul">July</option>
                      <option value="Aug">August</option>
                      <option value="Sep">September</option>
                      <option value="Oct">October</option>
                      <option value="Nov">November</option>
                      <option value="Dec">December</option>
                    </select>

                    <select
                      name="startYear"
                      value={startYear}
                      onChange={this.onChange}
                    >
                      {" "}
                      <option value="">Year</option>
                      <option value="2020">2020</option>
                      <option value="2019">2019</option>
                      <option value="2018">2018</option>
                      <option value="2017">2017</option>
                      <option value="2016">2016</option>
                      <option value="2015">2015</option>
                      <option value="2014">2014</option>
                      <option value="2013">2013</option>
                      <option value="2012">2012</option>
                      <option value="2011">2011</option>
                      <option value="2010">2010</option>
                      <option value="2009">2009</option>
                      <option value="2008">2008</option>
                      <option value="2007">2007</option>
                      <option value="2006">2006</option>
                      <option value="2005">2005</option>
                      <option value="2004">2004</option>
                      <option value="2003">2003</option>
                      <option value="2002">2002</option>
                      <option value="2001">2001</option>
                      <option value="2000">2000</option>
                      <option value="1999">1999</option>
                      <option value="1998">1998</option>
                      <option value="1997">1997</option>
                      <option value="1996">1996</option>
                      <option value="1995">1995</option>
                      <option value="1994">1994</option>
                      <option value="1993">1993</option>
                      <option value="1992">1992</option>
                      <option value="1991">1991</option>
                      <option value="1990">1990</option>
                      <option value="1989">1989</option>
                      <option value="1988">1988</option>
                      <option value="1987">1987</option>
                      <option value="1986">1986</option>
                      <option value="1985">1985</option>
                      <option value="1984">1984</option>
                      <option value="1983">1983</option>
                      <option value="1982">1982</option>
                      <option value="1981">1981</option>
                      <option value="1980">1980</option>
                      <option value="1979">1979</option>
                      <option value="1978">1978</option>
                      <option value="1977">1977</option>
                      <option value="1976">1976</option>
                      <option value="1975">1975</option>
                      <option value="1974">1974</option>
                      <option value="1973">1973</option>
                      <option value="1972">1972</option>
                      <option value="1971">1971</option>
                      <option value="1970">1970</option>
                      <option value="1969">1969</option>
                      <option value="1968">1968</option>
                      <option value="1967">1967</option>
                      <option value="1966">1966</option>
                      <option value="1965">1965</option>
                      <option value="1964">1964</option>
                      <option value="1963">1963</option>
                      <option value="1962">1962</option>
                      <option value="1961">1961</option>
                    </select>
                  </div>
                </div>
                <div className="endYear">
                  <label htmlFor="end">
                    End Year <span>*</span>
                  </label>
                  <div className="dateInput">
                    <select
                      name="endMonth"
                      id="endMonth"
                      value={endMonth}
                      onChange={this.onChange}
                    >
                      {" "}
                      <option value="">Month</option>
                      <option value="Jan">January</option>
                      <option value="Feb">February</option>
                      <option value="Mar">March</option>
                      <option value="Apr">April</option>
                      <option value="May">May</option>
                      <option value="Jun">June</option>
                      <option value="Jul">July</option>
                      <option value="Aug">August</option>
                      <option value="Sep">September</option>
                      <option value="Oct">October</option>
                      <option value="Nov">November</option>
                      <option value="Dec">December</option>
                    </select>

                    <select
                      name="endYear"
                      id="endYear"
                      value={endYear}
                      onChange={this.onChange}
                    >
                      {" "}
                      <option value="">Year</option>
                      <option value="2020">2020</option>
                      <option value="2019">2019</option>
                      <option value="2018">2018</option>
                      <option value="2017">2017</option>
                      <option value="2016">2016</option>
                      <option value="2015">2015</option>
                      <option value="2014">2014</option>
                      <option value="2013">2013</option>
                      <option value="2012">2012</option>
                      <option value="2011">2011</option>
                      <option value="2010">2010</option>
                      <option value="2009">2009</option>
                      <option value="2008">2008</option>
                      <option value="2007">2007</option>
                      <option value="2006">2006</option>
                      <option value="2005">2005</option>
                      <option value="2004">2004</option>
                      <option value="2003">2003</option>
                      <option value="2002">2002</option>
                      <option value="2001">2001</option>
                      <option value="2000">2000</option>
                      <option value="1999">1999</option>
                      <option value="1998">1998</option>
                      <option value="1997">1997</option>
                      <option value="1996">1996</option>
                      <option value="1995">1995</option>
                      <option value="1994">1994</option>
                      <option value="1993">1993</option>
                      <option value="1992">1992</option>
                      <option value="1991">1991</option>
                      <option value="1990">1990</option>
                      <option value="1989">1989</option>
                      <option value="1988">1988</option>
                      <option value="1987">1987</option>
                      <option value="1986">1986</option>
                      <option value="1985">1985</option>
                      <option value="1984">1984</option>
                      <option value="1983">1983</option>
                      <option value="1982">1982</option>
                      <option value="1981">1981</option>
                      <option value="1980">1980</option>
                      <option value="1979">1979</option>
                      <option value="1978">1978</option>
                      <option value="1977">1977</option>
                      <option value="1976">1976</option>
                      <option value="1975">1975</option>
                      <option value="1974">1974</option>
                      <option value="1973">1973</option>
                      <option value="1972">1972</option>
                      <option value="1971">1971</option>
                      <option value="1970">1970</option>
                      <option value="1969">1969</option>
                      <option value="1968">1968</option>
                      <option value="1967">1967</option>
                      <option value="1966">1966</option>
                      <option value="1965">1965</option>
                      <option value="1964">1964</option>
                      <option value="1963">1963</option>
                      <option value="1962">1962</option>
                      <option value="1961">1961</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  value={description}
                  onChange={this.onChange}
                />
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button className="btn btn-modal">Save</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { createExpe })(CreateExpe);
