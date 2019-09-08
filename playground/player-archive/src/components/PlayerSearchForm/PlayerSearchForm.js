import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actions from '../../actions/playerArchive';
import { get } from '../../services/httpService';

import './PlayerSearchForm.scss';

/**
 * Tiny serach form component
 * to find data and profile of searched players
 */
class PlayerSearchForm extends Component {
  constructor(props) {
      super(props);
      this.state = {
        searchValue: '',
      };
  }
  
  /**
   * Input change handler
   */
  handleInputChange(e) {
    e.preventDefault();

    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  
  /**
   * Get player data
   */
  async getPlayerAviability() {
    this.props.dispatch(actions.getPlayerAviabilityBegin());

    const playerId = this.state.searchValue;
    const apiUrl = CONFIG.apiHost + CONFIG.apiAvailability + `${playerId}.json`;

    return get(apiUrl)
      .then(result => {
        this.props.dispatch(actions.getPlayerAviability(result));
        return result;
      })
      .catch(error => {
        this.props.dispatch(actions.getPlayerAviabilityFailure(error.message));
      });
  }

  /**
   * Get player profile
   */
  getPlayerProfile(playerData) {
    if (!playerData || playerData.active !== 'true') return;

    this.props.dispatch(actions.getPlayerProfileBegin());

    const profileId = playerData['profile-id'];
    const apiUrl = CONFIG.apiHost + CONFIG.apiProfile + `${profileId}`;

    return get(apiUrl)
      .then(result => {
        this.props.dispatch(actions.getPlayerProfile(result));
        return result;
      })
      .catch(error => {
        this.props.dispatch(actions.getPlayerProfileFailure(error.message));
      });
  }

  /**
   * Search handler
   */
  async handleSearch(e) {
    e.preventDefault();

    this.props.dispatch(actions.getPlayerProfileReset());
    this.props.dispatch(actions.getPlayerAviabilityReset());

    // get player data
    const playerData = await this.getPlayerAviability();
    
    // get player profile
    await this.getPlayerProfile(playerData);
  }

  render() {
    const { playerProfile, playerAviability } = this.props;

    return (
      <form className='player-search-form'>
        <div className='input-group mb-3'>
          <input  type='text' 
                  className='form-control' 
                  name='searchValue'
                  placeholder='some player id...' 
                  aria-label='some player id...' 
                  aria-describedby='playerId'
                  value={this.state.searchValue}
                  onChange={this.handleInputChange.bind(this)} />
          
          {
            playerProfile.loading || playerAviability.loading
              ? (
                <div className='player-search-form__loading spinner-border spinner-border-sm' role='status'>
                  <span className='sr-only'>Loading...</span>
                </div>
              )
              : ''
          }
          
          <div className='input-group-append'>
            <button className='btn btn-primary' 
                    onClick={this.handleSearch.bind(this)} 
                    type='button'>
                    Button
            </button>
          </div>
        </div>
      </form>
    );
  }
}

/**
 * React propTypes
 */
PlayerSearchForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  playerProfile: PropTypes.object,
  playerAviability: PropTypes.object
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
)(PlayerSearchForm);