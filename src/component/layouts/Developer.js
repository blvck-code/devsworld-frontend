import React, { Component } from "react";
import Navbar from "../layouts/Navbar";
import { connect } from "react-redux";
import user from "../img/default.png";
import { developer } from "../../actions/profiles";
import { developerExpe } from "../../actions/experience";
import { devEduct } from "../../actions/education";
import { devContact } from "../../actions/contact";
import { Link, NavLink } from "react-router-dom";
import Alerts from "./Alerts";

export class Developer extends Component {
  
  componentWillMount() {
    const {
      devEduct,
      developer,
      devContact,
      developerExpe,
      location,
    } = this.props;

    developer(location.pathname);
    devContact(location.pathname);
    developerExpe(location.pathname);
    devEduct(location.pathname);
  }
  render() {
    const { dev, experience, education, contact } = this.props;
    return (
      <>
        <Navbar />
        <Alerts />
        <div className="container developer">
          <Link to="/developers">
            <button className="btn btn-dark">Back To Profiles</button>
          </Link>
          <div className="dev-info">
            <div className="dp">
              {dev.profile_pic ? (
                <>
                  <img src={dev.profile_pic} alt="ProfilePic" />
                </>
              ) : (
                <>
                  <img src={user} alt="ProfilePic" />
                </>
              )}
            </div>
            <div className="details">
              <h1>
                {dev.first_name} {dev.last_name}
              </h1>
              <h2>{dev.profession}</h2>
              {dev.location ? (
                <h4>
                  {dev.location}, {dev.country}
                </h4>
              ) : (
                ""
              )}

              <div className="icons">
                {contact.website_url ? (
                  <NavLink to={contact.website_url}>
                    <i className="fa fa-globe"></i>
                  </NavLink>
                ) : (
                  ""
                )}

                {contact.github_username ? (
                  <NavLink to={contact.github_username}>
                    <i className="fa fa-github"></i>
                  </NavLink>
                ) : (
                  ""
                )}

                {contact.twitter_username ? (
                  <NavLink to={contact.twitter_username}>
                    <i className="fa fa-twitter"></i>
                  </NavLink>
                ) : (
                  ""
                )}

                {contact.phone ? (
                  <NavLink to={contact.phone}>
                    <i className="fa fa-mobile-phone"></i>
                  </NavLink>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          {dev.headline ? (
            <div className="dev-about">
              <>
                <div className="title">
                  <h2>{dev.first_name}'s Bio</h2>
                  <p>{dev.headline}</p>
                </div>
              </>
            </div>
          ) : (
            ""
          )}
          <div className="grid">
            <div className="dev-experience">
              <div className="title">
                <h2>Experiences</h2>
              </div>
              {experience === "" || experience.length === 0 ? (
                <h4>The developer have no Experiences added</h4>
              ) : (
                <>
                  {experience.map((expe) => (
                    <div className="body" key={expe.id}>
                      <h3>{expe.company}</h3>
                      {expe.start ? (
                        <p>
                          {expe.start} - {expe.end}
                        </p>
                      ) : (
                        ""
                      )}

                      {expe.job ? (
                        <>
                          <p>
                            <strong>Position:</strong> {expe.job}
                          </p>
                          <p>
                            <strong>Description:</strong> {expe.description}
                          </p>
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                  ))}
                </>
              )}
            </div>
            <div className="dev-education">
              <div className="title">
                <h2>Education</h2>
              </div>
              {education === "" || education.length === 0 ? (
                <h4>The developer have no Education background added</h4>
              ) : (
                <>
                  {education.map((edu) => (
                    <div className="body" key={edu.id}>
                      <h3>{edu.school}</h3>
                      {edu.start ? (
                        <p>
                          {edu.start} - {edu.end}
                        </p>
                      ) : (
                        ""
                      )}

                      {edu.degree ? (
                        <>
                          <p>
                            <strong>Degree:</strong> {edu.degree}
                          </p>
                        </>
                      ) : (
                        ""
                      )}
                      {edu.study_field ? (
                        <>
                          <p>
                            <strong>Field of Studies:</strong> {edu.study_field}
                          </p>
                        </>
                      ) : (
                        ""
                      )}

                      {edu.description ? (
                        <>
                          <p>
                            <strong>Description:</strong> {edu.description}
                          </p>
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  dev: state.profiles.developer,
  experience: state.experience.devExpe,
  education: state.education.devEdu,
  contact: state.contact.devContact,
});

export default connect(mapStateToProps, {
  developer,
  developerExpe,
  devContact,
  devEduct,
})(Developer);
