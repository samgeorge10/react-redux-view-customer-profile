import React, { Component } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

// core components
import Header from '../../theme/material-ui-theme/components/Header/Header';
import Parallax from '../../theme/material-ui-theme/components/Parallax/Parallax';
import profilePageStyle from '../../theme/material-ui-theme/assets/jss/material-kit-react/views/profilePage';

class LayoutContainer extends Component {

  render() {
    const {
      children,
      classes
    } = this.props;

    return(
      <div>
        <Header
          color="transparent"
          brand="Customer Profile"
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
        />
        <Parallax small filter image={require("../../theme/material-ui-theme/assets/img/profile-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(LayoutContainer);