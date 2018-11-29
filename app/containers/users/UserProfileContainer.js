import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Email, LocationOn, Phone, AccountBox, ShoppingCart } from '@material-ui/icons';
import * as ActionCreators from '../../actions/actionCreators';
import * as UserConstants from '../../common/UserConstants';

import GridContainer from '../../theme/material-ui-theme/components/Grid/GridContainer';
import GridItem from '../../theme/material-ui-theme/components/Grid/GridItem';
import Card from '../../theme/material-ui-theme/components/Card/Card';
import CardBody from '../../theme/material-ui-theme/components/Card/CardBody';
import NavPills from '../../theme/material-ui-theme/components/NavPills/NavPills';
import Badge from '../../theme/material-ui-theme/components/Badge/Badge';

import profilePageStyle from '../../theme/material-ui-theme/assets/jss/material-kit-react/views/profilePage';

class UserProfileContainer extends PureComponent {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const {
      dispatcher
    } = this.props;

    const user_details_endpoint = UserConstants.USER_DETAILS_ENDPOINT;

    // dispatch the userdetails after successfully retrieved from the server
    await dispatcher.loadUserDetails(user_details_endpoint);
  }
  renderProfileStats = (userData) => {
    const isActive = userData.isActive;
    let color = 'danger';
    let badgeText = 'Not Active';
    if (isActive) {
      color = 'success';
      badgeText = 'Active';
    }
    return(
      <div>
        <p>
          <b>Registered: </b>
          {userData.registered}
        </p>
        <p>
          <b>Account status: </b>
          <Badge color={color}>
            {badgeText}
          </Badge>
        </p>
      </div>
    );
  } 
  renderOrders = (userOrders, classes) => {
    const orderImageClasses = classNames(
      classes.imgRounded,
      classes.imgFluid
    );
    return(
      userOrders.map((order, i) => {
        return(
          <GridItem xs={12} sm={12} md={4} key={order.id}>
            <div className={classes.order}>
              <div className={classes.orderImage} >
                <img src={order.product.picture} alt='...' className={orderImageClasses} />
              </div>
              <div className={classes.orderContent}>
                <h4 className={classes.title}>{order.product.name}</h4>
                <h3>{order.price}</h3>
                <p>
                  {order.product.description}
                </p>
                <h6>{order.product.orderStatus}</h6>      
              </div>
            </div>
          </GridItem>
        );
      })
    );
  };  

  render() {
    const {
      userState,
      classes,
      ...rest
    } = this.props, {
      userName,
      userData,
      userOrders
    } = userState;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );

    const profilePicture = userData.picture;
    const fullname = `${userName.first} ${userName.last}`;
    return(
      <div className={classes.container} >
        <GridContainer justify='center'>
          <GridItem xs={12} sm={12} md={6}>
            <div className={classes.profile}>
              <div>
                <img src={profilePicture} alt='...' className={imageClasses} />
              </div>
              <div className={classes.name}>
                <h3 className={classes.title}>{fullname}</h3>
                <h6>{userData.company}</h6>                
              </div>
            </div>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <Email className={classes.socials} />
              <h4 className={classes.cardTitle}>Email</h4>
              <CardBody>
                <p className={classes.description}>
                {userData.email}
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <Phone  className={classes.socials} />
              <h4 className={classes.cardTitle}>Phone</h4>
              <CardBody>
                <p className={classes.description}>
                  {userData.phone}
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <LocationOn  className={classes.socials} />
              <h4 className={classes.cardTitle}>Address</h4>
              <CardBody>
                <p className={classes.description}>
                {userData.address}
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>  
        <div className={classes.description}>
          <p>
            {userData.about}
          </p>  
        </div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <NavPills
              alignCenter
              color='primary'
              tabs={[
                {
                  tabButton: 'Account',
                  tabIcon: AccountBox,
                  tabContent: (
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <h4 className={classes.title}>Stats</h4>
                          {this.renderProfileStats(userData, classes)}
                      </GridItem>
                    </GridContainer>
                  )
                },
                {
                  tabButton: 'Orders',
                  tabIcon: ShoppingCart,
                  tabContent: (
                    <GridContainer>
                      {this.renderOrders(userOrders, classes)}
                    </GridContainer>
                  )
                }
              ]}
            />
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userState: state.userReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatcher: bindActionCreators(ActionCreators, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(profilePageStyle)(UserProfileContainer));