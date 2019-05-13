import React, { Component } from 'react';
import { render } from 'react-dom';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import Avatar from '@material-ui/core/Avatar';
import './ws_view.scss';

class WSView extends React.Component {

  render() {

    return (

      <div id="sm_wsviewpage" className="container">
        <div className="row">

          <div class="sidebar">
            <HomeIcon className="iconStyle1" />
            <Avatar alt="Remy Sharp" src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png" className="avatarBottom" />
          </div>

          <div class="main">
            <div className="col left">
              <div class="header">
                <h2>Mentions Me 3</h2>
              </div>
              <div class="list">
                <Avatar alt="Remy Sharp" src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png" />

              </div>
            </div>

            <div className="col right">

            </div>
          </div>

        </div>
      </div>

    );
  }
}



export default (WSView);
