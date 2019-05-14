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
import Typography from '@material-ui/core/Typography';

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
               <List className="mention_list">
                  <ListItem alignItems="flex-start" divider="true">
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png" />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Mulien Joe"
                      secondary={
                        <React.Fragment>
                          {"@Karen Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard."}
                          <p className="end">PM+Designer | 팀즈PJT</p>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <ListItem alignItems="flex-start" divider="true">
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png" />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Summer BBQ"
                      secondary={
                        <React.Fragment>
                          <Typography component="span" color="textPrimary">
                            to Scott, Alex, Jennifer
              </Typography>
                          {" — Wish I could come, but I'm out of town this…"}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <ListItem alignItems="flex-start" divider="true">
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png" />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Oui Oui"
                      secondary={
                        <React.Fragment>
                          <Typography component="span" color="textPrimary">
                            Sandra Adams
              </Typography>
                          {' — Do you have Paris recommendations? Have you ever…'}
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
