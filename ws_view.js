import React, { Component } from 'react';
import { render } from 'react-dom';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import ListIcon from '@material-ui/icons/List';
import StarIcon from '@material-ui/icons/Star';
import Icon from '@material-ui/core/Icon';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import './ws_view.scss';
import './style.scss';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import Scrollbars from 'react-custom-scrollbars';



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
                <div className="box notification bgGreen"> CX </div>
                <div className="box notification bgOrange"> K운 </div>
                <div className="box bgDarkYellow"> 팀즈 </div>
                <div className="box bgRoyalBlue"> VD </div>

              </div>
            </div>

            <Avatar alt="Remy Sharp" src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png" className="avatarBottom" />
          </div>

          <div class="main">
            <div className="col left">
              <h2>Mentions Me <strong> 3 </strong></h2>

              <div class="mentionsWrapper">
              <Scrollbars autoHide autoHideDuration={200} >
                  <List className="mention_list">
                    <ListItem alignItems="flex-start" divider="true" className="active">
                      <ListItemAvatar>
                        <Avatar className="avatarImg" alt="Remy Sharp" src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png" />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <React.Fragment>
                            <div className="content">
                              <h4>Mulien Joe</h4><span>12:34 PM</span>
                              <p> <Link component="button" variant="body2"> @Karen </Link> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard.</p>
                              <div className="end darkYellow">PM+Designer <span class="divider"></span> 팀즈PJT</div>
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
                    <ListItem alignItems="flex-start" divider="true" >
                      <ListItemAvatar>
                        <Avatar className="avatarImg" alt="Remy Sharp" src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png" />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <React.Fragment>
                            <div className="content">
                              <h4>Mulien Joe</h4><span>12:34 PM</span>
                              <p> <Link component="button" variant="body2"> @Karen </Link> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard.</p>
                              <div className="end darkYellow">PM+Designer <span class="divider"></span> 팀즈PJT</div>
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
                </Scrollbars>
              </div>
            </div>

            <div className="col right">
              <div className="row top_sec">
                <Button className="WorkspaceButton" >
                  Workspace
                  <AddIcon />
                </Button>
                <div className="rightSpace">
                  <IconButton aria-label="list toggle"> <ListIcon /> </IconButton>
                  <span class="divider"></span>
                  <IconButton aria-label="settings"> <SettingsIcon />  </IconButton>
                </div>
              </div>

              <Scrollbars autoHide autoHideDuration={200} >
                <div className="cardList">

                  <div className="card">
                    <div className="workspaceName ">
                      Next MCS T/F
                      </div>
                    <div className="channelList">

                      <div className="channel">
                        <div className="content">
                          <h4>General </h4>
                          <StarIcon className="starIcon" />
                          <Badge badgeContent={1} className="badge" max={99} ></Badge>
                        </div>
                        <div className="details">
                          <p>Thank you.</p>
                          <span>12:34 PM</span>
                        </div>
                      </div>
                      <div className="channel">
                        <div className="content">
                          <h4>PM+Designer </h4>
                        </div>
                        <div className="details">
                          <p>Please check your email</p>
                          <span>12:34 PM</span>
                        </div>
                      </div>
                      <div className="channel">
                        <div className="content">
                          <h4>Pair work </h4>
                          <StarIcon className="starIcon" />
                          <Badge badgeContent={10} className="badge" max={99} ></Badge>
                        </div>
                        <div className="details">
                          <p>Please check your email</p>
                          <span>12:34 PM</span>
                        </div>
                      </div>
                      <div className="channel">
                        <div className="content">
                          <h4>Designers </h4>
                        </div>
                        <div className="details">
                          <p>Lorem Ipsum is simply</p>
                          <span>12:34 PM</span>
                        </div>
                      </div>
                      <div className="channel">
                        <div className="content">
                          <h4>PM+Designer </h4>
                        </div>
                        <div className="details">
                          <p>Lorem Ipsum is simply</p>
                          <span>12:34 PM</span>
                        </div>
                      </div>


                    </div>
                  </div>

                  <div className="card">
                    <div className="workspaceName bgGreen">
                      Next MCS T/F
                      </div>
                    <div className="channelList">

                      <div className="channel">
                        <div className="content">
                          <h4>General </h4>
                          <StarIcon className="starIcon" />
                          <Badge badgeContent={999} className="badge" max={99} ></Badge>
                        </div>
                        <div className="details">
                          <p>Thank you.</p>
                          <span>12:34 PM</span>
                        </div>
                      </div>
                      <div className="channel">
                        <div className="content">
                          <h4>PM+Designer </h4>
                        </div>
                        <div className="details">
                          <p>Please check your email</p>
                          <span>12:34 PM</span>
                        </div>
                      </div>
                      <div className="channel">
                        <div className="content">
                          <h4>Pair work </h4>
                          <StarIcon className="starIcon" />
                          <Badge badgeContent={10} className="badge" max={99} ></Badge>
                        </div>
                        <div className="details">
                          <p>Please check your email</p>
                          <span>12:34 PM</span>
                        </div>
                      </div>
                      <div className="channel">
                        <div className="content">
                          <h4>Designers </h4>
                        </div>
                        <div className="details">
                          <p>Lorem Ipsum is simply</p>
                          <span>12:34 PM</span>
                        </div>
                      </div>
                      <div className="channel">
                        <div className="content">
                          <h4>PM+Designer </h4>
                        </div>
                        <div className="details">
                          <p>Lorem Ipsum is simply</p>
                          <span>12:34 PM</span>
                        </div>
                      </div>


                    </div>
                  </div>

                  <div className="card">
                    <div className="workspaceName bgOrange">
                      Next MCS T/F
                      </div>
                    <div className="channelList">

                      <div className="channel">
                        <div className="content">
                          <h4>General </h4>
                          <StarIcon className="starIcon" />
                          <Badge badgeContent={1} className="badge" max={99} ></Badge>
                        </div>
                        <div className="details">
                          <p>Thank you.</p>
                          <span>12:34 PM</span>
                        </div>
                      </div>
                      <div className="channel">
                        <div className="content">
                          <h4>PM+Designer </h4>
                        </div>
                        <div className="details">
                          <p>Please check your email</p>
                          <span>12:34 PM</span>
                        </div>
                      </div>
                      <div className="channel">
                        <div className="content">
                          <h4>Pair work </h4>
                          <StarIcon className="starIcon" />
                          <Badge badgeContent={10} className="badge" max={99} ></Badge>
                        </div>
                        <div className="details">
                          <p>Please check your email</p>
                          <span>12:34 PM</span>
                        </div>
                      </div>
                      <div className="channel">
                        <div className="content">
                          <h4>Designers </h4>
                        </div>
                        <div className="details">
                          <p>Lorem Ipsum is simply</p>
                          <span>12:34 PM</span>
                        </div>
                      </div>
                      <div className="channel">
                        <div className="content">
                          <h4>PM+Designer </h4>
                        </div>
                        <div className="details">
                          <p>Lorem Ipsum is simply</p>
                          <span>12:34 PM</span>
                        </div>
                      </div>


                    </div>
                  </div>

                  <div className="card">
                    <div className="workspaceName bgDarkYellow">
                      Next MCS T/F
                      </div>
                    <div className="channelList">

                      <div className="channel">
                        <div className="content">
                          <h4>General </h4>
                          <StarIcon className="starIcon" />
                          <Badge badgeContent={1} className="badge" max={99} ></Badge>
                        </div>
                        <div className="details">
                          <p>Thank you.</p>
                          <span>12:34 PM</span>
                        </div>
                      </div>
                      <div className="channel">
                        <div className="content">
                          <h4>PM+Designer </h4>
                        </div>
                        <div className="details">
                          <p>Please check your email</p>
                          <span>12:34 PM</span>
                        </div>
                      </div>
                      <div className="channel">
                        <div className="content">
                          <h4>Pair work </h4>
                          <StarIcon className="starIcon" />
                          <Badge badgeContent={10} className="badge" max={99} ></Badge>
                        </div>
                        <div className="details">
                          <p>Please check your email</p>
                          <span>12:34 PM</span>
                        </div>
                      </div>
                      <div className="channel">
                        <div className="content">
                          <h4>Designers </h4>
                        </div>
                        <div className="details">
                          <p>Lorem Ipsum is simply</p>
                          <span>12:34 PM</span>
                        </div>
                      </div>
                      <div className="channel">
                        <div className="content">
                          <h4>PM+Designer </h4>
                        </div>
                        <div className="details">
                          <p>Lorem Ipsum is simply</p>
                          <span>12:34 PM</span>
                        </div>
                      </div>


                    </div>
                  </div>

                  <div className="card">
                    <div className="workspaceName bgRoyalBlue">
                      Next MCS T/F
                      </div>
                    <div className="channelList">

                      <div className="channel">
                        <div className="content">
                          <h4>General </h4>
                          <StarIcon className="starIcon" />
                          <Badge badgeContent={1} className="badge" max={99} ></Badge>
                        </div>
                        <div className="details">
                          <p>Thank you.</p>
                          <span>12:34 PM</span>
                        </div>
                      </div>
                      <div className="channel">
                        <div className="content">
                          <h4>PM+Designer </h4>
                        </div>
                        <div className="details">
                          <p>Please check your email</p>
                          <span>12:34 PM</span>
                        </div>
                      </div>
                      <div className="channel">
                        <div className="content">
                          <h4>Pair work </h4>
                          <StarIcon className="starIcon" />
                          <Badge badgeContent={10} className="badge" max={99} ></Badge>
                        </div>
                        <div className="details">
                          <p>Please check your email</p>
                          <span>12:34 PM</span>
                        </div>
                      </div>
                      <div className="channel">
                        <div className="content">
                          <h4>Designers </h4>
                        </div>
                        <div className="details">
                          <p>Lorem Ipsum is simply</p>
                          <span>12:34 PM</span>
                        </div>
                      </div>
                      <div className="channel">
                        <div className="content">
                          <h4>PM+Designer </h4>
                        </div>
                        <div className="details">
                          <p>Lorem Ipsum is simply</p>
                          <span>12:34 PM</span>
                        </div>
                      </div>


                    </div>
                  </div>

                </div>
              </Scrollbars>

            </div>
          </div>

        </div>
      </div>

    );
  }
}



export default (WSView);
