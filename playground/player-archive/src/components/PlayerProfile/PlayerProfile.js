import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './PlayerProfile.scss';

/**
 * Small serach form component
 * to find data and profile of searched players
 */
class PlayerProfile extends Component {
  constructor(props) {
      super(props);
      this.state = {};
  }

  renderProfileOverview() {
    const { id, profile } = this.props.playerProfile.data;

    if (!id && !profile) return;

    const profileDataArr = [
      { name: 'Id', value: id },
      { name: 'Active', value: 'true' },
      { name: 'Age', value: profile.age },
      { name: 'Role', value: profile.team },
      { name: 'Team', value: profile.role },
    ];

    return (
      <ul>
        { profileDataArr.map((data) => {
          return (
            <li key={data.name}>
              {data.name}: {data.value}
            </li>
          );
        })}
      </ul>
    );
  }

  renderProfileImage() {
    const { profile } = this.props.playerProfile.data;

    if (!profile && !profile.picture) return;

    return (
      <img src={ profile.picture } title='' />
    );
  }

  render() {
    const { playerProfile, playerAviability } =  this.props;

    if (!playerProfile.data) return null;
    
    return (
      <section className='player-profile'>
        <h1 className='player-profile__title'>Player Details</h1>
        <div className='player-profile__content d-flex'>
          { this.renderProfileImage() }
          { this.renderProfileOverview() }
        </div>
      </section>
    );
  }
}

/**
 * React propTypes
 */
PlayerProfile.propTypes = {
  playerProfile: PropTypes.object,
  playerAviability: PropTypes.object,
};

/**
 * Redux state to props mapping
 */
function mapStateToProps(state) {
  return { 
    playerProfile: state.playerProfile,
    playerAviability: state.playerAviability
  };
}

export default connect(
  mapStateToProps
)(PlayerProfile);