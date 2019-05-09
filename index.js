import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div id="sm_login">
        <div class="wrapper">
          <div class="left_half">
              <div class="inner_wrap">
                  <div class="logo">Logo</div>
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

render(<App />, document.getElementById('root'));
