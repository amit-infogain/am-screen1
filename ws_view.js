import React, { Component } from 'react';
import { render } from 'react-dom';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import Avatar from '@material-ui/core/Avatar';
import './ws_view.scss';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';


class WSView extends React.Component {

  render() {

    return (

      <div id="sm_wsviewpage" className="container">
        <div className="row">

          <div class="sidebar">
            <HomeIcon className="iconStyle1" />

            <div className="midContent">
              <div className="boxes">
                <div className="box"> NM </div>
                <div className="box notification"> CX </div>
                <div className="box"> K운 </div>
                <div className="box"> 팀즈 </div>
                <div className="box"> VD </div>

              </div>
            </div>

            <Avatar alt="Remy Sharp" src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png" className="avatarBottom" />
          </div>

          <div class="main">
            <div className="col left">
              <div className="header">
                <h2>Mentions Me 3</h2>
              </div>
              <List className="mention_list">
                <ListItem alignItems="flex-start" divider="true">
                  <ListItemAvatar>
                    <Avatar className="avatarImg" alt="Remy Sharp" src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <React.Fragment>
                        <div className="content">
                          <h4>Mulien Joe</h4><span>12:34 PM</span>
                          <p> <Link component="button" variant="body2"> @Karen </Link> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard.</p>
                          <div className="end">PM+Designer <span class="divider"></span> 팀즈PJT</div>
                        </div>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <ListItem alignItems="flex-start" divider="true">
                  <ListItemAvatar>
                    <Avatar className="avatarImg" alt="Remy Sharp" src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <React.Fragment>
                        <div className="content">
                          <h4>Mulien Joe</h4><span>9:05 AM</span>
                          <p> <Link component="button" variant="body2"> @Karen </Link> Please check your e-mail.</p>
                          <div className="end">PM+Designer <span class="divider"></span> 팀즈PJT</div>
                        </div>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <ListItem alignItems="flex-start" divider="true">
                  <ListItemAvatar>
                    <Avatar className="avatarImg" alt="Remy Sharp" src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <React.Fragment>
                        <div className="content">
                          <h4>Mulien Joe</h4><span>9:03 AM</span>
                          <p> <Link component="button" variant="body2"> @Karen </Link> Please check your e-mail.</p>
                          <div className="end">PM+Designer <span class="divider"></span> 팀즈PJT</div>
                        </div>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </List>
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
