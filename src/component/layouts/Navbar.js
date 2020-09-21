import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import { NavLink, Link } from "react-router-dom";
import {FaHome, FaSearch, FaUser} from 'react-icons/fa';
import img from '../img/default.png';
import {searchItem} from '../../actions/search'

export class Navbar extends Component {

  state = {
    showMenu: false, 
    searchText: ""
  }

  authLinks = (
    <>
    <ul>
      <NavLink to="/developers">
        <li>Developer</li>
      </NavLink>
      <NavLink to="/profile">
        <li>Profile</li>
      </NavLink>
      <NavLink to="/dashboard">
        <li>
          <i className="fa fa-user"></i> <span>Dashboard</span>
        </li>
      </NavLink>
      <li className="log-out" onClick={this.props.logout}>
        <i className="fa fa-sign-out"></i> <span>Logout</span>
        {/* </a> */}
      </li>
    </ul>
    </>
  );

  guestLinks = (
    <ul>
      <NavLink to="/developers">
        <li>Developer</li>
      </NavLink>

      <NavLink to="/login">
        <li>Login</li>
      </NavLink>
      <NavLink to="/register">
        <li>Register</li>
      </NavLink>
      {/* <li>
        <NavLink >Register</NavLink>
      </li> */}
    </ul>
  );

  navMenu = () => {
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value.trim().replace(/" "/g, "")
    })

  }

  toggleMenu = () => {
    const btnLine = document.querySelectorAll('.btn-line')
    const menuBtn = document.querySelector('.menu-btn')
    const navMobile = document.querySelector('.nav-mobile')
    
    this.setState({
      showMenu: !this.state.showMenu
    })
    
    const {showMenu} = this.state;

    if(showMenu) {
      navMobile.style.display = "block"
      menuBtn.classList.add('close')
      btnLine.forEach(item => {
        item.classList.add('close')
      })
    } else {
      navMobile.style.display = "none"
      menuBtn.classList.remove('close')
      btnLine.forEach(item => {
        item.classList.remove('close')
      })
    }
  }

  openModal = (id) => {
    document.getElementById(id).style.display = "block";
  };

  render() {

    const { isAuthenticated, token } = this.props.auth;
    window.addEventListener('scroll', this.hideNav);
    const {profile} = this.props;

    return (
      <nav className="navbar bg-dark">
        <div className="wrapper">
          <div className="logo orange">
            <Link to="/">
              <h1>
                <i className="fa fa-code"></i> DevsWorld{" "}
              </h1>
            </Link>
          </div>
          <>{isAuthenticated && token ? this.authLinks : this.guestLinks}</>
          <div className="mobile">
            <div className="search">
              <FaSearch />
              <input type="text" name="searchText" value={this.state.searchText} onKeyUp={(e) => this.props.searchItem(e.target.value)} onChange={this.onChange} placeholder="Search"/>
            </div>
            <div onClick={this.toggleMenu} className="menu-btn">
              <span className="btn-line"></span>
              <span className="btn-line"></span>
              <span className="btn-line"></span>
            </div>
          </div>
        </div>
        <div className="nav-mobile">
          <div className="info">
            <div className="user">
            <Link to={`/developers/${profile.slug}`}>
              {profile.profile_pic ? <img src={profile.profile_pic} alt="dp" /> : <img src={img} alt="dp" />}
            </Link>
              <div className="details">
                <h3>{profile.first_name} {profile.last_name}</h3>
                {profile.profession ? <p>{profile.profession}</p> : <p style={{cursor:"pointer"}} onClick={() => this.openModal('profileModal')}>Edit Profile</p>} 
              </div>
            </div>
            <div className="icon">
              <h2>Menu</h2> <FaHome />
              <div className="line"></div>
            </div>
            <>{isAuthenticated && token ? this.authLinks : this.guestLinks}</>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profiles.myProfile
});
export default connect(mapStateToProps, { logout, searchItem })(Navbar);
