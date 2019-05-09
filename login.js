import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});



class TextFields extends React.Component {




  render() {
    const { classes } = this.props;

    return (

      <div id="sm_login">
        <div class="wrapper">
          <div class="left_half">
            <div class="inner_wrap">
              <div class="logo">Logo</div>
              <form className={classes.container} noValidate autoComplete="off">
                <TextField
                  id="standard-name"
                  label="Name"
                  className={classes.textField}
                  margin="normal"
                />
              </form>
            </div>
          </div>
          <div class="right_half">
            <div class="inner_wrap">
              <img src="./img/illust.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
