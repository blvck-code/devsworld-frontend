import React, { Component } from "react";
import { connect } from "react-redux";
import { myExpe } from "../../actions/experience";
import PropTypes from "prop-types";

export class Experience extends Component {
  state = {
    job: "",
    company: "",
    location: "",
    start: "",
    end: "",
    description: "",
  };

  componentDidMount() {
    this.props.myExpe();
  }

  static propTypes = {
    expe: PropTypes.array.isRequired,
  };

  openModal = () => {
    this.update = false;
    document.getElementById("expeModal").style.display = "block";
  };

  closeModal = () => {
    this.update = false;
    document.getElementById("expeModal").style.display = "none";
  };

  clickOutside = (e) => {
    this.update = false;
    if (e.target == document.getElementById("expeModal")) {
      document.getElementById("expeModal").style.display = "none";
    }
  };

  current = (e) => {
    if (e.target.checked) {
      const date = new Date();
      console.log(date.getMonth());
      console.log(date.getDate());
      console.log(date.getFullYear());
      // document.getElementById("endYear").setAttribute += "disabled";
    }
  };

  // Update Experience
  updateExp = (item) => {
    document.getElementById("expeModal").style.display = "block";
    this.setState(item);
    this.update = true;
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    window.addEventListener("click", this.clickOutside);

    let update = false;

    const { job, company, location, start, end, description } = this.state;

    return (
      <section className="experience">
        <div className="modal" id="expeModal">
          <div className="modal-content">
            <form onSubmit={this.onSubmit} type="post">
              <div className="modal-title">
                {this.update ? (
                  <h2>Edit experience</h2>
                ) : (
                  <h2>Add experience</h2>
                )}
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
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="job">Employment type</label>
                    <select
                      data-control-name="edit_position_employment_type"
                      name="selectEmploymentType"
                      id="pe-form-field__employment-type-select"
                      class="ember-view"
                    >
                      {" "}
                      <option value="">-</option>
                      <option value="urn:li:fsd_employmentType:12">
                        Full-time
                      </option>
                      <option value="urn:li:fsd_employmentType:11">
                        Part-time
                      </option>
                      <option value="urn:li:fsd_employmentType:3">
                        Self-employed
                      </option>
                      <option value="urn:li:fsd_employmentType:20">
                        Freelance
                      </option>
                      <option value="urn:li:fsd_employmentType:2">
                        Contract
                      </option>
                      <option value="urn:li:fsd_employmentType:18">
                        Internship
                      </option>
                      <option value="urn:li:fsd_employmentType:19">
                        Apprenticeship
                      </option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">
                      Company <span>*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Ex: Microsoft"
                      value={company}
                      onChange={this.onChange}
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
                    <input type="checkbox" onChange={this.current} /> I am
                    currently working in this role
                  </div>
                  <div className="years">
                    <div className="startYear">
                      <label htmlFor="start">
                        Start Year <span>*</span>
                      </label>
                      <div className="dateInput">
                        <select
                          data-control-name="edit_position_start_date_month"
                          name="startMonth"
                          id="position-start-month"
                          class="ember-view"
                        >
                          {" "}
                          <option value="">Month</option>
                          <option value="1">January</option>
                          <option value="2">February</option>
                          <option value="3">March</option>
                          <option value="4">April</option>
                          <option value="5">May</option>
                          <option value="6">June</option>
                          <option value="7">July</option>
                          <option value="8">August</option>
                          <option value="9">September</option>
                          <option value="10">October</option>
                          <option value="11">November</option>
                          <option value="12">December</option>
                        </select>

                        <select
                          data-control-name="edit_position_start_date_year"
                          name="startYear"
                          id="position-start-year"
                          class="ember-view"
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
                          data-control-name="edit_position_start_date_month"
                          name="startMonth"
                          id="position-start-month"
                          class="ember-view"
                        >
                          {" "}
                          <option value="">Month</option>
                          <option value="1">January</option>
                          <option value="2">February</option>
                          <option value="3">March</option>
                          <option value="4">April</option>
                          <option value="5">May</option>
                          <option value="6">June</option>
                          <option value="7">July</option>
                          <option value="8">August</option>
                          <option value="9">September</option>
                          <option value="10">October</option>
                          <option value="11">November</option>
                          <option value="12">December</option>
                        </select>

                        <select
                          data-control-name="edit_position_start_date_year"
                          name="startYear"
                          id="position-start-year"
                          class="ember-view"
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
        </div>
        <div className="title">
          <h4>Experience</h4>
          <div onClick={this.openModal}>
            Add experience{" "}
            <i className="fa fa-plus" onClick={this.openModal}></i>
          </div>
        </div>
        {this.props.expe
          ? this.props.expe.map((item) => (
              <div className="body" key={item.id}>
                <div className="icon">
                  <i className="fa fa-folder-open-o"></i>
                </div>
                <div className="content">
                  <div className="content-title">
                    <h4>{item.job}</h4>
                    <i
                      className="fa fa-pencil"
                      onClick={() => {
                        this.updateExp(item);
                      }}
                    ></i>
                  </div>
                  <div className="content-body">
                    <p className="job-title">
                      {item.job} at {item.company}
                    </p>
                    <p>
                      {item.start} - {item.end}
                    </p>
                    <p>{item.location}</p>
                    <p className="job-summary">{item.description}</p>
                  </div>
                </div>
              </div>
            ))
          : ""}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  expe: state.experience.myExpe,
});

export default connect(mapStateToProps, { myExpe })(Experience);
