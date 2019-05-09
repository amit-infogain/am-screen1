import React from 'react';
import TextField from '@material-ui/core/TextField';
import './login.scss';
import Button from '@material-ui/core/Button';



class TextFields extends React.Component {

  render() {

    return (

      <div id="sm_login">
        <div className="wrapper">
          <div className="left_half">
            <div className="inner_wrap">
              <div className="logo">Logo</div>
              <form noValidate autoComplete="off">
                <TextField
                  id="standard-name"
                  placeholder="ID"
                  margin="normal"
                  fullWidth
                  className="custom_inp"
                />
                <TextField
                  id="standard-name"
                  placeholder="Password"
                  margin="normal"
                  fullWidth
                  className="custom_inp"
                />
                <Button variant="contained" className="defButton"  fullWidth >
                  Sign In
                </Button>
              </form>
            </div>
          </div>
          <div className="right_half">
            <div className="inner_wrap">
              <img src="./img/illust.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default (TextFields);
