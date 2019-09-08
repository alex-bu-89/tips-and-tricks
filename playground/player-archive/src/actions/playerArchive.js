export const GET_PLAYER_PROFILE = 'GET_PLAYER_PROFILE';
export const GET_PLAYER_PROFILE_SUCCESS = 'GET_PLAYER_PROFILE_SUCCESS';
export const GET_PLAYER_PROFILE_FAILURE = 'GET_PLAYER_PROFILE_FAILURE';
export const GET_PLAYER_PROFILE_RESET = 'GET_PLAYER_PROFILE_RESET';
export const GET_PLAYER_AVIABILITY = 'GET_PLAYER_AVIABILITY';
export const GET_PLAYER_AVIABILITY_SUCCESS = 'GET_PLAYER_AVIABILITY_SUCCESS';
export const GET_PLAYER_AVIABILITY_FAILURE = 'GET_PLAYER_AVIABILITY_FAILURE';
export const GET_PLAYER_AVIABILITY_RESET = 'GET_PLAYER_AVIABILITY_RESET';

export function getPlayerProfileBegin(payload) {
  return {
    type: GET_PLAYER_PROFILE,
    payload: payload
  };
}

export function getPlayerProfile(payload) {
  return {
    type: GET_PLAYER_PROFILE_SUCCESS,
    payload: payload
  };
}

export function getPlayerProfileFailure(error) {
  return {
    type: GET_PLAYER_PROFILE_FAILURE,
    payload: error
  };
}

export function getPlayerProfileReset() {
  return {
    type: GET_PLAYER_PROFILE_RESET
  };
}

export function getPlayerAviabilityBegin(payload) {
  return {
    type: GET_PLAYER_AVIABILITY,
    payload: payload
  };
}

export function getPlayerAviability(payload) {
  return {
    type: GET_PLAYER_AVIABILITY_SUCCESS,
    payload: payload
  };
}

export function getPlayerAviabilityFailure(error) {
  return {
    type: GET_PLAYER_AVIABILITY_FAILURE,
    payload: error
  };
}

export function getPlayerAviabilityReset() {
  return {
    type: GET_PLAYER_AVIABILITY_RESET
  };
}

export default {
  getPlayerProfileBegin,
  getPlayerProfile,
  getPlayerProfileFailure,
  getPlayerProfileReset,
  getPlayerAviabilityBegin,
  getPlayerAviability,
  getPlayerAviabilityFailure,
  getPlayerAviabilityReset
};