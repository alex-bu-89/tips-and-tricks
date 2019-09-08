import { 
  GET_PLAYER_PROFILE,
  GET_PLAYER_PROFILE_SUCCESS, 
  GET_PLAYER_PROFILE_FAILURE, 
  GET_PLAYER_PROFILE_RESET,
  GET_PLAYER_AVIABILITY,
  GET_PLAYER_AVIABILITY_SUCCESS, 
  GET_PLAYER_AVIABILITY_FAILURE,
  GET_PLAYER_AVIABILITY_RESET,
} from '../actions/playerArchive';

const initState = {
  loading: false,
  error: null,
  data: null
};

export function profileReducer(state = initState, action) {
  switch (action.type) {
      case GET_PLAYER_PROFILE:
        return {
          ...state,
          loading: true,
          error: null,
          data: null
        };

      case GET_PLAYER_PROFILE_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
          data: action.payload
        };

      case GET_PLAYER_PROFILE_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
          data: null
        };

      case GET_PLAYER_PROFILE_RESET:
        return {
          ...state,
          loading: false,
          error: null,
          data: null
        };

      default:
        return state;
    };
}

export function aviabilityReducer(state = initState, action) {
  switch (action.type) {
      case GET_PLAYER_AVIABILITY:
        return {
          ...state,
          loading: true,
          error: null,
          data: null
        };

      case GET_PLAYER_AVIABILITY_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
          data: action.payload
        };

      case GET_PLAYER_AVIABILITY_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
          data: null
        };

      case GET_PLAYER_AVIABILITY_RESET:
        return {
          ...state,
          loading: false,
          error: null,
          data: null
        };

      default:
        return state;
    };
}