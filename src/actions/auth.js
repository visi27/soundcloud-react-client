import SC from 'soundcloud'
import * as actionTypes from '../constants/actionTypes'

export function auth () {
  return function (dispatch) {
    SC.connect().then((session) => {
      dispatch(fetchMe(session))
    })
  }
}

function setMe (user) {
  return {
    type: actionTypes.ME_SET,
    user
  }
}

function fetchMe (session) {
  return function (dispatch) {
    fetch(`//api.soundcloud.com/me?oauth_token=${session.oauth_token}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setMe(data))
      })
  }
}
