import React, { Component } from "react";
import Navbar from "../layouts/Navbar";
import CreatePost from "../layouts/CreatePost";
import HomeProfile from "../layouts/HomeProfile";
import Posts from "../layouts/Posts";

export class Dashboard extends Component {
  render() {
    return (
      <>
        <Navbar />
        <section className="container main">
          <div className="profile">
            <div className="card">
              <HomeProfile />
            </div>
          </div>
          <div className="posts">
            <CreatePost />
            <div className="underline" />
            <Posts />
          </div>
          <div className="updates">
            <div className="card">
              <h1>Updates</h1>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Dashboard;
