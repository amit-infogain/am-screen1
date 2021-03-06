import React, { Component } from 'react';
import { render } from 'react-dom';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import Avatar from '@material-ui/core/Avatar';
import './home_first.scss';


class HomeFirst extends React.Component {

  render() {

    return (

       <div id="sm_homefirstpage" className="container">
        <div className="row">

          <div class="sidebar">
            <HomeIcon className="iconStyle1" />
            <Avatar alt="Remy Sharp" src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png" className="avatarBottom" />
          </div>

        <div class="main">
          <div className="col left">
            <div className="inner_wrap">
                <h2>Welcome to Your Workspace! </h2>
                <p> All the members in workspace can use 
a variety of features to collaborate tightly. </p>
                <ul>
                  <li>Multiple channels in one workspace</li>
                  <li>Reply to a message</li>
                  <li>Catch up important information on the right area</li>
                  <li>Understand history with longer storage period</li>
                </ul>
                  <Button variant="contained" className="cst_button1" size="large" >
      Create Workspace
                  <AddIcon />
                  </Button>
            </div>
          </div>

          <div className="col right">
            <div className="inner_wrap">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Johan_Christian_Dahl_-_Dresden_by_Moonlight_-_Google_Art_Project.jpg/640px-Johan_Christian_Dahl_-_Dresden_by_Moonlight_-_Google_Art_Project.jpg" className="img-responsive" alt="" />
            </div>
          </div>
          </div>

        </div>
      </div>

    );
  }
}



export default (HomeFirst);
