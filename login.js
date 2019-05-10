import React from 'react';
import TextField from '@material-ui/core/TextField';
import './login.scss';
import Button from '@material-ui/core/Button';


class TextFields extends React.Component {

  render() {

    return (

      <div id="sm_login" className="container">
        <div className="wrapper row">
          <div className="row left_half">
            <div className="inner_wrap">
              <div className="logo">Logo</div>
              <form noValidate autoComplete="off">
                <TextField
                  id="standard-name"
                  placeholder="ID"
                  margin="none"
                  fullWidth
                  className="custom_inp"
                />
                <TextField
                  id="standard-name"
                  placeholder="Password"
                  margin="none"
                  fullWidth
                  className="custom_inp"
                />
                <Button variant="contained" className="defButton"  fullWidth >
                  Sign In
                </Button>
              </form>
                
            </div>
          </div>
          <div className="row right_half">
            <div className="inner_wrap">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Johan_Christian_Dahl_-_Dresden_by_Moonlight_-_Google_Art_Project.jpg/640px-Johan_Christian_Dahl_-_Dresden_by_Moonlight_-_Google_Art_Project.jpg" className="img-responsive" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default (TextFields);
